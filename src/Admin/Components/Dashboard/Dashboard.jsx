import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const data = [
  { name: "Jan", sales: 4000 },
  { name: "Feb", sales: 7000 },
  { name: "Mar", sales: 9000 },
  { name: "Apr", sales: 6500 },
];

const Dashboard = () => {
  return (
    <div>
      <h2 className="text-4xl font-bold mb-6">Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded shadow text-center">
          <p className="text-xl font-semibold">Total Sales</p>
          <p className="text-2xl text-green-600 font-bold">₹1.2M</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <p className="text-xl font-semibold">Orders</p>
          <p className="text-2xl text-blue-600 font-bold">3,402</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <p className="text-xl font-semibold">Customers</p>
          <p className="text-2xl text-purple-600 font-bold">1,240</p>
        </div>
        <div className="bg-white p-6 rounded shadow text-center">
          <p className="text-xl font-semibold">Products</p>
          <p className="text-2xl text-red-600 font-bold">324</p>
        </div>
      </div>
      <div className="mt-10 bg-white p-6 rounded shadow">
        <h3 className="text-2xl font-bold mb-4">Monthly Sales Overview</h3>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="sales" stroke="#3b82f6" />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;