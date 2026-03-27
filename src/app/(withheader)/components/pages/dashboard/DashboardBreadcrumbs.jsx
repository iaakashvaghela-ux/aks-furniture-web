import React from 'react';
import Link from 'next/link';

export default function DashboardBreadcrumbs() {
  return (
    <div className="bg-accent-dark/30 py-12 mb-16">
      <div className="container mx-auto px-6">
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-secondary italic">My Dashboard</h1>
          <ul className="flex items-center justify-center gap-4 text-[10px] font-bold uppercase tracking-[0.3em] text-text-muted">
            <li><Link href="/" className="hover:text-primary transition-colors">Home</Link></li>
            <li>&gt;</li>
            <li className="text-secondary">Dashboard</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
