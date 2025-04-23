import { TextField, MenuItem } from '@mui/material';

export function OrderFilter({ filterStatus, setFilterStatus }) {
  const statuses = ['Pending', 'Shipped', 'Delivered'];

  return (
    <TextField
      select
      label="Filter by Status"
      value={filterStatus}
      onChange={(e) => setFilterStatus(e.target.value)}
      className="w-60"
    >
      <MenuItem value="">All</MenuItem>
      {statuses.map((status) => (
        <MenuItem key={status} value={status}>
          {status}
        </MenuItem>
      ))}
    </TextField>
  );
}
