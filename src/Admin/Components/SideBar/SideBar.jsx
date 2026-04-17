import {
  Box,
  Button,
  Drawer,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Tooltip,
  Collapse,
} from "@mui/material";
import {
  MdDashboard,
  MdPeople,
  MdStore,
  MdPriceChange,
  MdInventory,
  MdPointOfSale,
  MdExpandLess,
  MdExpandMore,
} from "react-icons/md";
import { useState } from "react";
import { Link } from "react-router-dom";
import Auth from "../AdminDashboard/Auth/Auth";

// Navigation config
const navItems = [
  {
    label: "Dashboard",
    icon: <MdDashboard size={20} />,
    path: "/admin/dashboard",
  },
  {
    label: "customer Management",
    icon: <MdPeople size={20} />,
    children: [
      { label: "order list", path: "/admin/customer/order-list" },
      { label: "customer List", path: "/admin/customer/customer-list" },
    ],
  },
  {
    label: "Store Management",
    icon: <MdStore size={20} />,
    children: [
      { label: "Add Store", path: "/admin/store/add" },
      { label: "Store List", path: "/admin/store/list" },
    ],
  },
  {
    label: "Price Management",
    icon: <MdPriceChange size={20} />,
    path: "/admin/price",
  },
  {
    label: "Inventory Management",
    icon: <MdInventory size={20} />,
    children: [
      { label: "Add Products", path: "/admin/inventory/list" },
      { label: "Products List", path: "/admin/inventory/products" },
    ],
  },
  {
    label: "POS",
    icon: <MdPointOfSale size={20} />,
    path: "/admin/pos",
  },
];

const Sidebar = () => {
  const [openAuthForm, setOpenAuthForm] = useState(false);
  const [openMenu, setOpenMenu] = useState(null);
  const isLoggedIn = false;

  const handleClosed = () => setOpenAuthForm(false);
  const handleOpen = () => setOpenAuthForm(true);

  const handleToggle = (label) => {
    setOpenMenu((prev) => (prev === label ? null : label));
  };

  return (
    <>
      <Drawer
        variant="permanent"
        anchor="left"
        sx={{
          "& .MuiDrawer-paper": {
            backgroundColor: "transparent",
            boxShadow: "none",
            color: "white",
            width: 240,
            borderRight: "1px solid grey",
          },
        }}
      >
        <Box sx={{ height: "100%", position: "relative", px: 2, pt: 2 }}>
          {/* Logo */}
          <Box
            sx={{
              fontSize: "1.5rem",
              fontWeight: "bold",
              px: 1,
              py: 2,
              borderBottom: "1px solid #444",
              color: "gray.200",
            }}
          >
            Shastra Life
          </Box>

          {/* Navigation */}
          <List>
            {navItems.map(({ label, icon, path, children }) => (
              <Box key={label}>
                <Tooltip title={label} placement="right" arrow>
                  <ListItemButton
                    onClick={() => (children ? handleToggle(label) : null)}
                    component={path ? Link : "div"}
                    to={path || undefined}
                    sx={{
                      my: 1,
                      borderRadius: 1,
                      px: 2,
                      py: 1,
                      '&:hover': {
                        backgroundColor: 'grey',
                        color: "black",
                      },
                    }}
                  >
                    <ListItemIcon sx={{ minWidth: 40, color: "#FB923C" }}>
                      {icon}
                    </ListItemIcon>
                    <ListItemText
                      primary={label}
                      primaryTypographyProps={{
                        sx: {
                          color: "#e5e7eb",
                        },
                      }}
                    />
                    {children &&
                      (openMenu === label ? (
                        <MdExpandLess size={20} />
                      ) : (
                        <MdExpandMore size={20} />
                      ))}
                  </ListItemButton>
                </Tooltip>

                {/* Dropdown Children */}
                {children && (
                  <Collapse in={openMenu === label} timeout="auto" unmountOnExit>
                    <List component="div" disablePadding sx={{ pl: 4 }}>
                      {children.map((child) => (
                        <ListItemButton
                          key={child.label}
                          component={Link}
                          to={child.path}
                          sx={{
                            py: 1,
                            px: 2,
                            color: "#cbd5e1",
                            '&:hover': {
                              backgroundColor: "#f1f5f9",
                              color: "#000",
                            },
                          }}
                        >
                          <ListItemText primary={child.label} />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                )}
              </Box>
            ))}
          </List>

          {/* Auth Section */}
          <Box sx={{ position: "absolute", bottom: 'auto', left: 16, right: 16 }}>
            {isLoggedIn ? (
              <Button variant="contained" color="primary" fullWidth>
                Logout
              </Button>
            ) : (
              <Button variant="outlined" color="secondary" fullWidth onClick={handleOpen}>
                Login
              </Button>
            )}
          </Box>
        </Box>
      </Drawer>

      <Auth open={openAuthForm} onClosed={handleClosed} />
    </>
  );
};

export default Sidebar;
