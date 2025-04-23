import { useParams } from 'react-router-dom';

export function OrderDetailsCustomer() {
    const { orderId } = useParams();
  
    return (
      <div className="p-6">
        <h2 className="text-3xl font-extrabold mb-6">Order #{orderId} Details</h2>
        <div className="space-y-4 text-gray-700">
          <p><strong>Status:</strong> Shipped</p>
          <p><strong>Date:</strong> 2025-04-10</p>
          <p><strong>Shipping Address:</strong> 123 Main St, City</p>
          <p><strong>Payment Method:</strong> Credit Card</p>
        </div>
      </div>
    );
  }