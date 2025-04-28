// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import { Home } from 'lucide-react';

export default function AccommodationPage() {
  return (
    <div className="h-screen w-full relative">
      <Head>
        <title>Travelwish - Accommodation Management</title>
        <meta name="description" content="Manage your accommodations with Travelwish" />
      </Head>

      {/* Full page background image */}
      <div className="absolute inset-0 z-0">
        <Image 
          src="/images/bg.png"
          alt="Travel Background" 
          layout="fill"
          objectFit="cover"
          priority
        />
      </div>

      {/* Content overlay */}
      <div className="relative z-10 h-full flex flex-col md:flex-row">
        {/* Left Side - Logo */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8">
          <div className="w-32 h-32 relative mb-4">
            {/* <Image 
              src="/images/logo.png"
              alt="Travelwish Logo" 
              layout="fill"
              objectFit="contain"
            /> */}
          </div>
          {/* <h1 className="text-5xl font-bold text-black mb-2">Travelwish</h1>
          <p className="text-l   g text-black">Your Passport to Adventure</p> */}
        </div>

        {/* Right Side - Accommodation Management */}
        <div className="w-full md:w-1/2 flex flex-col items-center justify-center p-4 relative">
          {/* User Profile Icon in top right */}
          <div className="absolute top-4 right-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6 text-gray-600">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
              </svg>
            </div>
          </div>

          {/* Home Icon */}
          <div className="mb-10">
            <div className="bg-blue-100 p-4 rounded-full">
              <Home size={32} className="text-blue-800" />
            </div>
          </div>

          {/* Four Action Buttons */}
          <div className="w-full max-w-md space-y-4 px-4">
            <button className="w-full bg-blue-100 hover:bg-blue-200 text-blue-800 py-4 px-6 rounded-xl text-center text-lg font-medium transition-colors">
              Add New Accommodation
            </button>
            
            <button className="w-full bg-blue-100 hover:bg-blue-200 text-blue-800 py-4 px-6 rounded-xl text-center text-lg font-medium transition-colors">
              Update details
            </button>
            
            <button className="w-full bg-blue-100 hover:bg-blue-200 text-blue-800 py-4 px-6 rounded-xl text-center text-lg font-medium transition-colors">
              View bookings
            </button>
            
            <button className="w-full bg-blue-100 hover:bg-blue-200 text-blue-800 py-4 px-6 rounded-xl text-center text-lg font-medium transition-colors">
              View Payment history
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}