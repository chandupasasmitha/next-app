// pages/index.js
import Head from 'next/head';
import Image from 'next/image';
import { Home } from 'lucide-react';

export default function AccommodationPage() {
  return (
    <div className="flex flex-col h-screen overflow-hidden">
      {/* Navigation Bar */}
      <nav className="bg-white shadow-md p-2 w-full">
        <div className="container mx-auto flex justify-between items-center">
          <div className="flex items-center">
            <Image 
              src="/images/logo.png"
              alt="Travelwish Logo" 
              width={32} 
              height={32} 
            />
            <span className="ml-2 text-lg font-bold">Travelwish</span>
          </div>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-700 hover:text-blue-600">Home</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Explore</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">My Trips</a>
            <a href="#" className="text-gray-700 hover:text-blue-600">Profile</a>
          </div>
        </div>
      </nav>

      {/* Main Content with Full Width Background Image */}
      <main className="flex-grow relative">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image 
            src="/images/bg.png"
            alt="Luxury Accommodation" 
            layout="fill"
            objectFit="cover"
            priority
          />
          {/* Overlay for better text visibility */}
          
        </div>
        
        {/* Content on top of the background */}
        <div className="relative z-10 h-full flex flex-col items-center justify-center p-4">
          <div className="text-center text-white mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">Manage Your Properties</h1>
            <p className="text-lg">Access all your accommodation settings in one place</p>
          </div>
          
          {/* Accommodation Options Card */}
          <div className="bg-white bg-opacity-90 p-6 rounded-xl shadow-lg max-w-md w-full">
            {/* Accommodation Icon */}
            <div className="flex justify-center mb-6">
              <div className="bg-blue-100 p-3 rounded-full">
                <Home size={28} className="text-blue-800" />
              </div>
            </div>

            {/* Four Action Boxes */}
            <div className="space-y-3">
              <button className="w-full bg-blue-100 hover:bg-blue-200 text-blue-800 py-3 px-4 rounded-lg text-center transition-colors">
                Add New Accommodation
              </button>
              
              <button className="w-full bg-blue-100 hover:bg-blue-200 text-blue-800 py-3 px-4 rounded-lg text-center transition-colors">
                Update details
              </button>
              
              <button className="w-full bg-blue-100 hover:bg-blue-200 text-blue-800 py-3 px-4 rounded-lg text-center transition-colors">
                View bookings
              </button>
              
              <button className="w-full bg-blue-100 hover:bg-blue-200 text-blue-800 py-3 px-4 rounded-lg text-center transition-colors">
                View Payment history
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}