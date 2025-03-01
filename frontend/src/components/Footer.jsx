import React from 'react'

const Footer = () => {
  return (
   
    <footer className="bg-gray-800 text-white p-6 mt-16">
      <div className="container mx-auto flex justify-between">
        <p>&copy; 2025 Fashion Store. All Rights Reserved.</p>
        <ul className="flex space-x-6">
          <li className="hover:underline cursor-pointer">Privacy Policy</li>
          <li className="hover:underline cursor-pointer">Terms & Conditions</li>
          <li className="hover:underline cursor-pointer">Contact Us</li>
        </ul>
      </div>
    </footer>

  )
}

export default Footer
