import OrderCard from './OrderCard';

export default function MyOrders() {
  return (
    <div className="!p-6">
      <h2 className="!text-2xl !font-bold !mb-4">My Orders</h2>
      <div className="grid gap-4 md:grid-cols-1 lg:grid-cols-1">
        <OrderCard />
    </div>
    
    </div>
  );
}
