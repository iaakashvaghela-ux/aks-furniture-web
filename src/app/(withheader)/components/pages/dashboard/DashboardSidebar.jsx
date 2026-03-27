import React from 'react';

export default function DashboardSidebar({ activeTab, setActiveTab }) {
  const tabs = [
    { id: 'dashboard', label: 'My Dashboard' },
    { id: 'orders', label: 'Orders' },
    { id: 'address', label: 'Addresses' },
    { id: 'my-profile', label: 'My Profile' },
    { id: 'change-password', label: 'Change Password' }  ];

  return (
    <aside className="lg:col-span-3">
      <nav className="sticky top-32 space-y-2">
        <div className="p-8 bg-secondary rounded-[2rem] shadow-2xl">
          <ul className="space-y-4">
            {tabs.map((tab) => (
              <li key={tab.id}>
                <button
                  onClick={() => tab.id === 'logout' ? null : setActiveTab(tab.id)}
                  className={`w-full text-left px-6 py-4 rounded-xl text-[11px] font-bold uppercase tracking-[0.2em] transition-all duration-300 ${activeTab === tab.id
                      ? 'bg-primary text-secondary shadow-lg'
                      : 'text-background/60 hover:text-primary'
                    }`}
                >
                  {tab.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </nav>
    </aside>
  );
}
