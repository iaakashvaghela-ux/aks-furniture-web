"use client";

import React, { useState } from 'react';
import DashboardBreadcrumbs from './DashboardBreadcrumbs';
import DashboardSidebar from './DashboardSidebar';
import DashboardOverview from './DashboardOverview';
import DashboardOrders from './DashboardOrders';
import DashboardAddresses from './DashboardAddresses';
import DashboardProfile from './DashboardProfile';
import DashboardSecurity from './DashboardSecurity';


export default function DashboardLayout() {
   const [activeTab, setActiveTab] = useState('dashboard');
  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
         <DashboardBreadcrumbs />
   
         <div className="container mx-auto px-6">
           <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
             <DashboardSidebar activeTab={activeTab} setActiveTab={setActiveTab} />
   
             <section className="lg:col-span-9 animate-fadeIn">
               <div className="bg-white dark:bg-accent-dark/20 p-8 md:p-12 rounded-[2.5rem] border border-accent-dark/50 shadow-xl min-h-[600px]">
                 {activeTab === 'dashboard' && <DashboardOverview setActiveTab={setActiveTab} />}
                 {activeTab === 'orders' && <DashboardOrders />}
                 {activeTab === 'address' && <DashboardAddresses />}
                 {activeTab === 'my-profile' && <DashboardProfile />}
                 {activeTab === 'change-password' && <DashboardSecurity />}
               </div>
             </section>
           </div>
         </div>
    </main>
  );
}
