import React from 'react';

export default function DashboardOrders() {
  const orders = [
    { id: '1', date: 'May 10, 2018', status: 'Completed', total: 'Rs. 25.00 for 1 item' },
    { id: '2', date: 'May 10, 2018', status: 'Processing', total: 'Rs. 17.00 for 1 item' }
  ];

  return (
    <div className="space-y-8 animate-fadeIn">
      <h2 className="text-3xl font-serif font-bold text-secondary">Your Acquisitions</h2>
      <div className="overflow-x-auto rounded-3xl border border-accent-dark/50">
        <table className="w-full text-left">
          <thead className="bg-accent-dark/30">
            <tr>
              <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-secondary">Order</th>
              <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-secondary">Date</th>
              <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-secondary">Status</th>
              <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-secondary">Total</th>
              <th className="px-8 py-5 text-[10px] font-bold uppercase tracking-widest text-secondary">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-accent-dark/50">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-accent-dark/10 transition-colors">
                <td className="px-8 py-6 font-serif font-bold text-secondary">{order.id}</td>
                <td className="px-8 py-6 text-sm text-text-muted">{order.date}</td>
                <td className="px-8 py-6">
                  <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest ${order.status === 'Completed' ? 'bg-green-100 text-green-700' : 'bg-amber-100 text-amber-700'
                    }`}>
                    {order.status}
                  </span>
                </td>
                <td className="px-8 py-6 font-serif text-sm text-secondary">{order.total}</td>
                <td className="px-8 py-6">
                  <button className="text-[10px] font-bold uppercase tracking-widest text-primary hover:text-secondary transition-colors underline decoration-primary/30">View Details</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
