"use client"
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

const ProfileInput = ({ label, type, placeholder, name, value, onChange, readOnly }) => (
  <div className="space-y-2">
    <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-1">
      {label}
    </label>
    <input
      name={name}
      type={type}
      value={value || ''}
      onChange={onChange}
      readOnly={readOnly}
      placeholder={placeholder}
      className={`w-full bg-accent-dark/30 border border-accent-dark/50 rounded-2xl px-6 py-4 text-sm focus:border-primary focus:outline-none transition-all placeholder:text-text-muted/30 text-secondary ${readOnly ? 'cursor-not-allowed opacity-70' : ''}`}
    />
  </div>
);


export default function DashboardProfile() {
  const token = useSelector((state) => state.login.token);
  let apiBaseUrl = process.env.NEXT_PUBLIC_BASEURL;
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    gender: 1
  });

  const getProfile = () => {
    axios.post(`${apiBaseUrl}auth/get-user`, {}, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        setProfile(res.data.userData);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile(prev => ({
      ...prev,
      [name]: name === 'gender' ? parseInt(value) : value
    }));
  };

  const updateProfile = (e) => {
    e.preventDefault();
    axios.post(`${apiBaseUrl}auth/update-profile`, profile, {
      headers: {
        Authorization: `Bearer ${token}`
      }
    })
      .then((res) => {
        if (res.data._status) {
          alert("Profile updated successfully!");
          getProfile();
        } else {
          alert(res.data._msg || "Update failed");
        }
      })
      .catch((err) => {
        console.error(err);
        alert("An error occurred during update.");
      });
  };

  useEffect(() => {
    if (token) getProfile();
  }, [token]);

  return (
    <div className="space-y-10 animate-fadeIn max-w-2xl">
      <h2 className="text-3xl font-serif font-bold text-secondary">Profile Information</h2>
      <form onSubmit={updateProfile} className="space-y-8">
        <div className="flex items-center gap-8 pb-8 border-b border-accent-dark">
          <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center text-primary text-4xl font-serif italic border-4 border-white shadow-xl">
            {profile.name?.charAt(0) || 'U'}
          </div>
          <div>
            <h4 className="text-xl font-serif font-bold text-secondary">{profile.name}</h4>
            <p className="text-[10px] font-bold uppercase tracking-widest text-text-muted">
              Member Since {profile.created_at ? new Date(profile.created_at).toLocaleDateString() : 'N/A'}
            </p>
          </div>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          <ProfileInput 
            label="Full Name" 
            name="name" 
            type="text" 
            value={profile.name} 
            onChange={handleChange} 
            placeholder="Your Name" 
          />
        </div>

        <div className="space-y-2">
          <label className="text-[10px] font-bold uppercase tracking-widest text-text-muted ml-1">
            gender
          </label>
          <div className="flex gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="1"
                checked={profile.gender === 1}
                onChange={handleChange}
                className="w-4 h-4 text-primary focus:ring-primary"
              />
              <span className="text-sm text-secondary">Male</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="radio"
                name="gender"
                value="2"
                checked={profile.gender === 2}
                onChange={handleChange}
                className="w-4 h-4 text-primary focus:ring-primary"
              />
              <span className="text-sm text-secondary">Female</span>
            </label>
          </div>
        </div>

        <ProfileInput 
          label="Email Address" 
          name="email" 
          type="email" 
          readOnly
          value={profile.email} 
          // onChange={handleChange} 
          placeholder="john@monsta.com" 
        />
        <ProfileInput 
          label="Phone Number" 
          name="phone" 
          type="tel" 
          value={profile.phone} 
          onChange={handleChange} 
          placeholder="+91 000 000 0000" 
        />
        
        <button type="submit" className="h-14 px-12 bg-secondary text-background text-[10px] font-bold uppercase tracking-[0.3em] rounded-full hover:bg-primary transition-all duration-500 shadow-xl">
          Save Profile Changes
        </button>
      </form>
    </div>

  );
}
