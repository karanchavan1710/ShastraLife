import { useParams } from 'react-router-dom';

export default function OrderProductsCustomer() {
    const { orderId } = useParams();
  
    const products = [
      { id: '1', name: 'Product A', quantity: 2, price: 199.99 },
      { id: '2', name: 'Product B', quantity: 1, price: 99.99 },
    ];
  
    return (
      <div className="p-6">
        <h2 className="text-3xl font-extrabold mb-6">Items in Order #{orderId}</h2>
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead className="bg-gray-100">
            <tr>
              <th className="p-3 text-left">Product</th>
              <th className="p-3 text-left">Quantity</th>
              <th className="p-3 text-left">Price</th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => (
              <tr key={product.id} className="border-t border-gray-200">
                <td className="p-3">{product.name}</td>
                <td className="p-3">{product.quantity}</td>
                <td className="p-3">${product.price.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
  