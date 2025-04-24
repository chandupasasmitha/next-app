// app/Accomodation/accommodation.tsx
'use client'

import React, { useState, ChangeEvent, FormEvent } from 'react';
import './page.css';

interface FormData {
  providerName: string;
  accommodationName: string;
  address: string;
  contactNumber: string;
  email: string;
  propertyType: string;
  totalRooms: string;
  images: File[];
}

export default function Accommodation() {
  const [formData, setFormData] = useState<FormData>({
    providerName: '',
    accommodationName: '',
    address: '',
    contactNumber: '',
    email: '',
    propertyType: '',
    totalRooms: '',
    images: []
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleImageUpload = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const fileList = Array.from(e.target.files);
      setFormData(prevState => ({
        ...prevState,
        images: fileList
      }));
    }
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Here you would typically send the data to your backend
  };

  return (
    <div className="container bg-image">
      {/* Form Section - Now taking full width with background */}
      <div className="form-section full-width">
        <div className="form-container">
          <div className="form-header">
            <h1>YOUR DETAILS</h1>
            <div className="home-icon">
              <div className="home-icon-inner">
                <svg xmlns="http://www.w3.org/2000/svg" className="icon" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="providerName"
              placeholder="NAME (ACCOMMODATION PROVIDER)"
              value={formData.providerName}
              onChange={handleChange}
            />
            
            <input
              type="text"
              name="accommodationName"
              placeholder="ACCOMMODATION NAME"
              value={formData.accommodationName}
              onChange={handleChange}
            />
            
            <input
              type="text"
              name="address"
              placeholder="ACCOMMODATION ADDRESS"
              value={formData.address}
              onChange={handleChange}
            />
            
            <input
              type="tel"
              name="contactNumber"
              placeholder="CONTACT NUMBER"
              value={formData.contactNumber}
              onChange={handleChange}
            />
            
            <input
              type="email"
              name="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={handleChange}
            />
            
            <input
              type="text"
              name="propertyType"
              placeholder="PROPERTY TYPE"
              value={formData.propertyType}
              onChange={handleChange}
            />
            
            <input
              type="number"
              name="totalRooms"
              placeholder="TOTAL NUMBER OF ROOMS"
              value={formData.totalRooms}
              onChange={handleChange}
            />
            
            <div className="file-upload">
              <label htmlFor="images">
                <span>ADD IMAGES OF ACCOMMODATION</span>
                <svg xmlns="http://www.w3.org/2000/svg" className="upload-icon" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0l-4 4m4-4v12" />
                </svg>
              </label>
              <input
                type="file"
                id="images"
                name="images"
                multiple
                onChange={handleImageUpload}
              />
            </div>
            
            <div className="button-group">
              <button type="button" className="remove-btn">Remove</button>
              <button type="submit" className="submit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}