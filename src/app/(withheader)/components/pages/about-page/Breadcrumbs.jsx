"use client";
import React from 'react';
import Link from 'next/link';
import { useTheme } from '@/redux/hooks';

const Breadcrumbs = () => {
  const { theme, toggleTheme, activeMenuIndex, setActiveMenuIndex } = useTheme();
  return (
    <div className="bg-accent-dark py-12 mb-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <h3 className="text-4xl font-serif font-bold text-secondary mb-4 tracking-tight">About Us</h3>
          <ul className="flex items-center space-x-3 text-sm font-medium text-text-muted">
            <li onClick={() => setActiveMenuIndex(0)}>
              <Link href="/" className="hover:text-primary transition-colors duration-300 uppercase tracking-widest">
                Home
              </Link>
            </li>
            <li className="text-primary font-bold">&gt;</li>
            <li className="uppercase tracking-widest">About Us</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Breadcrumbs;
