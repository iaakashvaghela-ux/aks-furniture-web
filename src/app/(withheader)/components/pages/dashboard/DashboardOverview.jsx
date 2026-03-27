import React from 'react';

export default function DashboardOverview({ setActiveTab }) {
  return (
    <div className="space-y-8 animate-fadeIn">
      <h2 className="text-3xl font-serif font-bold text-secondary">Welcome Back</h2>
      <div className="prose prose-lg dark:prose-invert">
        <p className="text-text-muted leading-relaxed">
          From your account dashboard, you can easily check and view your
          <button onClick={() => setActiveTab('orders')} className="text-primary hover:underline mx-2 font-bold italic">recent orders</button>,
          manage your
          <button onClick={() => setActiveTab('address')} className="text-primary hover:underline mx-2 font-bold italic">shipping and billing addresses</button>
          and
          <button onClick={() => setActiveTab('my-profile')} className="text-primary hover:underline mx-2 font-bold italic">edit your password and account details</button>.
        </p>
      </div>
    </div>
  );
}
