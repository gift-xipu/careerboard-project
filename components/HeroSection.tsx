'use client'
// import { useRouter } from 'next/navigation'
import Navbar from './Navbar'
import { FaArrowRight } from 'react-icons/fa6'
import GenerationStep from './Steps'
import ContactSection from './ContactSection'
// Using Next.js router for navigation

   // To navigate programmatically
export default function HeroSection() {
    // const router = useRouter();
  return (
    <div className="bg-inherit">
    <Navbar/>
        <div className="hero min-h-screen">
        <div className="hero-content text-center">
            <div className="max-w-md">
                <h1 className="text-5xl font-bold text-gray-900">Welcome to Your Future</h1>
                <p className="py-6 text-gray-900">
                    Unlock your potential with our job board designed to connect you with the best opportunities.
                    Whether you are seeking your first job or making a career change, we provide the tools you need 
                    to succeed, from resume building to personalized job matches.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-8">
              <button className="group relative px-8 py-3 bg-white text-black rounded-full overflow-hidden hover:scale-105 transition-all duration-300">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                </button>
                
                <button className="group flex items-center gap-2 px-8 py-3 text-black border border-white/10 rounded-full hover:bg-white/10 transition-all duration-300">
                  Learn More
                  <FaArrowRight className="group-hover:translate-x-1 transition-transform duration-300" />
                </button>
            </div>
            </div>
        </div>
    </div>
    <GenerationStep/>
    <ContactSection/>
    </div>  
  )
}
