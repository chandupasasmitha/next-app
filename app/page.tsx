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
              src="/images/logo.png" //background image should be change
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

      {/* Main Content - Takes remaining height */}
      <main className="flex flex-grow flex-col md:flex-row">
        
        {/* Left Side - Image (50% on desktop) */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <div className="relative w-full h-[60vh] md:h-full">
            <Image 
              src="/images/TravelwishBg.png" 
              alt="Travelwish Background image" 
              fill 
              className="object-contain"
            />
          </div>
        </div>



        {/* Right Side - Accommodation Management */}
        <div className="w-full md:w-1/2 bg-gray-100 flex flex-col items-center justify-center p-4">
          {/* Accommodation Icon */}
          <div className="mb-6 bg-blue-100 p-3 rounded-full">
            <Home size={28} className="text-blue-800" />
          </div>

          {/* Four Action Boxes */}
          <div className="w-full max-w-md space-y-3">
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
      </main>
    </div>
  );
}