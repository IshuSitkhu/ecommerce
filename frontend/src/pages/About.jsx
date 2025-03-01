import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import React from "react";
import UserNavbar from "../components/UserNavbar";

const About = () => {
  return (
    <div>
        <UserNavbar/>
      <div className="container mx-auto py-16 my-8 px-6">
        {/* Store Background Image */}
        <div 
  className="relative w-full h-[400px] md:h-[450px] bg-cover bg-center rounded-lg"
  style={{ backgroundImage: "url('./images/fashion-store.jpeg')" }}>
  <div className="bg-black bg-opacity-50 h-full flex items-center justify-center">
    <h1 className="text-black text-4xl font-bold">About Us</h1>
  </div>
</div>


        {/* Store Description */}
        <div className="text-center mt-8">
          <h2 className="text-3xl font-semibold">Welcome to TrendyWear</h2>
          <p className="text-gray-700 mt-4 max-w-2xl mx-auto">
            TrendyWear is your go-to fashion destination for stylish clothing, footwear, and accessories. 
            We bring you the latest trends at affordable prices, ensuring that you always look your best.
          </p>
        </div>

        {/* Mission Section */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold">Our Mission</h2>
          <p className="text-gray-700 mt-4 max-w-xl mx-auto">
            Our mission is to make fashion accessible to everyone by providing trendy, high-quality, and 
            affordable fashion pieces that help you express your unique style.
          </p>
        </div>

        {/* What We Offer */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            <div className="p-6 shadow-md rounded-lg bg-white">
              <h3 className="text-xl font-semibold">Latest Fashion Trends</h3>
              <p className="text-gray-600 mt-2">Stay ahead with our carefully curated collection of stylish outfits.</p>
            </div>
            <div className="p-6 shadow-md rounded-lg bg-white">
              <h3 className="text-xl font-semibold">Premium Quality</h3>
              <p className="text-gray-600 mt-2">We ensure top-notch fabric and designs for lasting fashion statements.</p>
            </div>
            <div className="p-6 shadow-md rounded-lg bg-white">
              <h3 className="text-xl font-semibold">Fast & Secure Shopping</h3>
              <p className="text-gray-600 mt-2">Enjoy a seamless shopping experience with safe payments and quick delivery.</p>
            </div>
          </div>
        </div>

        {/* Team Section (Optional) */}
        <div className="mt-12 text-center">
          <h2 className="text-2xl font-semibold">Meet Our Team</h2>
          <div className="flex justify-center gap-6 mt-6">
            <div className="p-4 shadow-md rounded-lg bg-white text-center">
              <img src="/images/team-member1.jpg" alt="Team Member" className="w-24 h-24 rounded-full mx-auto"/>
              <h3 className="mt-2 text-lg font-semibold">Emily Johnson</h3>
              <p className="text-gray-600">Founder & Creative Director</p>
            </div>
            <div className="p-4 shadow-md rounded-lg bg-white text-center">
              <img src="/images/team-member2.jpg" alt="Team Member" className="w-24 h-24 rounded-full mx-auto"/>
              <h3 className="mt-2 text-lg font-semibold">Michael Smith</h3>
              <p className="text-gray-600">Head of Design</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
