'use client'
import { useState } from 'react'

const ContactSection = () => {
  const [email, setEmail] = useState('')
  const [status, setStatus] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    // Add your email handling logic here
    setStatus('Thanks! We will notify you when we launch.')
    setEmail('')
  }
//we could create a more dynamic form.
  ////need to intergrate authentication
  return (
    <section className="w-full py-24 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="relative rounded-2xl bg-inherit border border-white/10">
          <div className="absolute inset-0 bg-white/5 rounded-2xl" />
          <div className="relative">
            <div className="text-center max-w-2xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Stay Updated on Launch
              </h2>
              <p className="text-gray-700 mb-8">
                Be the first to know when we launch and get early access to our platform. 
                Join our waitlist for exclusive updates and features.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="max-w-md mx-auto">
              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="flex-1 px-6 py-3 rounded-full bg-white/80 border border-gray-200 
                           text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 
                           focus:ring-primary/50 transition-all duration-300"
                  required
                />
                <button
                  type="submit"
                  className="group relative px-8 py-3 text-black rounded-full 
                           overflow-hidden hover:scale-105 transition-all duration-300"
                >
                  <span className="relative z-10">Notify Me</span>
                  <div className="absolute inset-0 bg-gradient-to-r from-accent to-primary 
                                transform scale-x-0 group-hover:scale-x-100 
                                transition-transform duration-300" />
                </button>
              </div>
            </form>

            {status && (
              <p className="text-center mt-4 text-gray-700 animate-fade-in">
                {status}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
