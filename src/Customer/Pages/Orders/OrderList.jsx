import { useState } from 'react';
import OrderCard from '../../Components/Order/OrderCard';
import { OrderFilter } from '../../Components/Order/OrderFilters';

const dummyOrders = [
  { id: '101', customer: 'John Doe', status: 'Pending', date: '2025-04-10' },
  { id: '102', customer: 'Jane Smith', status: 'Shipped', date: '2025-04-09' },
];

export default function OrderList() {
  const [filterStatus, setFilterStatus] = useState('');

  const filteredOrders = dummyOrders.filter(order =>
    filterStatus ? order.status === filterStatus : true
  );

  return (
    <div className="!p-6">
    <h2 className="!text-2xl !font-bold !mb-4">Order List</h2>
    <OrderFilter filterStatus={filterStatus} setFilterStatus={setFilterStatus} />
    <div className="!grid !gap-4 !mt-4">
      {filteredOrders.map(order => (
        <OrderCard key={order.id} order={order} />
      ))}
    </div>
  </div>
  )
}