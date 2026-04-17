import React from 'react';
import { Switch, Avatar, IconButton, Tooltip } from '@mui/material';
import { FaTrash, FaEdit } from 'react-icons/fa';

const UserTable = ({ users, onToggleStatus, onEdit, onDelete }) => {
  return (
    <div className="!overflow-x-auto">
      <table className="!min-w-full !ext-sm !text-left">
        <thead>
          <tr className="bg-gray-100 text-gray-700">
            <th className="!py-2 !px-4">User</th>
            <th className="!py-2 !px-4">Email</th>
            <th className="!py-2 !px-4">Role</th>
            <th className="!py-2 !px-4">Status</th>
            <th className="!py-2 !px-4 !text-center">Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id} className="!border-b hover:!bg-gray-200 !transition-all">
              <td className="!py-2 !px-4 flex items-center gap-3">
                <Avatar src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </td>
              <td className="!py-2 !px-4">{user.email}</td>
              <td className="!py-2 !px-4">
                <span className={`!px-2 !py-1 rounded-full !text-xs !font-medium ${
                  user.role === 'Admin'
                    ? 'bg-red-100 text-red-600'
                    : user.role === 'Editor'
                    ? 'bg-blue-100 text-blue-600'
                    : 'bg-green-100 text-green-600'
                }`}>
                  {user.role}
                </span>
              </td>
              <td className="!py-2 !px-4">
                <Switch
                  checked={user.status}
                  onChange={() => onToggleStatus(user.id)}
                  color="primary"
                />
              </td>
              <td className="!py-2 !px-4 flex justify-center !gap-2">
                <Tooltip title="Edit"><IconButton onClick={() => onEdit(user.id)}><FaEdit /></IconButton></Tooltip>
                <Tooltip title="Delete"><IconButton onClick={() => onDelete(user.id)}><FaTrash /></IconButton></Tooltip>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
