import axios from 'axios';
import React from 'react';
import { useSelector } from 'react-redux';
import { apiBaseUrl } from '../../../api-fetching/apiBaseUrl';

const SecurityInput = ({ label, type, placeholder, name }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-1">
      {label}
    </label>
    <input
      name={name}
      type={type}
      placeholder={placeholder}
      required
      className="w-full bg-accent-dark/30 border border-accent-dark/50 rounded-2xl px-6 py-4 text-sm focus:border-primary focus:outline-none transition-all placeholder:text-text-muted/30 text-secondary"
    />
  </div>
);

export default function DashboardSecurity() {
  const token = useSelector((state) => state.login.token);
  let apiUrl = apiBaseUrl();

  let changePassword = (e) => {
    e.preventDefault();
    const currentPassword = e.target.currentPassword.value;
    const newPassword = e.target.newPassword.value;
    const confirmPassword = e.target.confirmPassword.value;

    if (newPassword !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    axios.post(`${apiUrl}auth/change-password`, {
      currentPassword,
      newPassword
    }, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        if (res.data._status) {
          alert("Password updated successfully!");
          e.target.reset();
        } else {
          alert(res.data._msg || "Failed to update password.");
        }
      })
      .catch((err) => {
        console.error(err);
        alert(err.response?.data?._msg || "An error occurred while updating the password.");
      });
  }


  return (
    <div className="space-y-10 animate-fadeIn max-w-md">
      <h2 className="text-3xl font-serif font-bold text-secondary italic">Vault Security</h2>
      <form onSubmit={changePassword} className="space-y-6">
        <SecurityInput name="currentPassword" label="Current Password" type="password" placeholder="••••••••" />
        <SecurityInput name="newPassword" label="New Password" type="password" placeholder="••••••••" />
        <SecurityInput name="confirmPassword" label="Confirm New Password" type="password" placeholder="••••••••" />
        <button type="submit" className="w-full h-14 bg-secondary text-background text-[10px] font-bold uppercase tracking-[0.3em] rounded-xl hover:bg-primary transition-all duration-500 shadow-xl">
          Update Password
        </button>
      </form>
    </div>
  );
}
