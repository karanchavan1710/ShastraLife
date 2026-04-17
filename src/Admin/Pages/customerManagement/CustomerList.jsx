import React, { useEffect, useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import UserTable from '../../Components/UserTable/UserTable';
import { TextField } from '@mui/material';
import Pagination from '../../Components/CommonUI/Pagination/PaginationTable';

const CustomerList = () => {
  const [users, setUsers] = useState([]); // ✅ Declare users state
  const [search, setSearch] = useState('');
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);

  // ✅ Fetch users
  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        const usersWithStatus = data.map(user => ({
          ...user,
          status: true // Add a dummy 'status' field for toggle
        }));
        setUsers(usersWithStatus);
      } catch (err) {
        console.error('Failed to fetch users:', err);
      }
    };

    fetchUsers();
  }, []);

  const handleToggleStatus = (id) => {
    setUsers(prevUsers =>
      prevUsers.map(user =>
        user.id === id ? { ...user, status: !user.status } : user
      )
    );
  };

  const handleEdit = (id) => alert(`Edit user ${id}`);
  const handleDelete = (id) => alert(`Delete user ${id}`);

  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  const paginatedUsers = filteredUsers.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleChangePage = (_, newPage) => setPage(newPage);
  const handleChangeRowsPerPage = (e) => {
    setRowsPerPage(parseInt(e.target.value, 10));
    setPage(0);
  };

  return (
    <div className="p-4 bg-white rounded-xl shadow-lg">
      <h2 className="text-2xl font-semibold !mb-4">User Management</h2>

      {/* Search Bar */}
      <div className="flex items-center !mb-4 !gap-2 !p-3">
        <FiSearch className="text-gray-500 text-xl" />
        <TextField
          variant="outlined"
          size="small"
          fullWidth
          label="Search by name"
          value={search}
          onChange={(e) => {
            setSearch(e.target.value);
            setPage(0);
          }}
        />
      </div>

      {/* User Table */}
      <UserTable
        users={paginatedUsers}
        onToggleStatus={handleToggleStatus}
        onEdit={handleEdit}
        onDelete={handleDelete}
      />

      {/* Pagination */}
      <Pagination
        count={filteredUsers.length}
        page={page}
        rowsPerPage={rowsPerPage}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </div>
  );
};

export default CustomerList;
