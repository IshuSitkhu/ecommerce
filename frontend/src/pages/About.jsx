import React from "react";
import UserNavbar from "../components/UserNavbar";
import Footer from "../components/Footer";

const About = () => {
  return (
    <div>
      <UserNavbar />
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "40px 24px" }}>
        
        {/* Store Background Image */}
        <div
          style={{
            position: "relative",
            width: "100%",
            height: "400px",
            backgroundImage: "url('./images/fashion-store.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            borderRadius: "8px",
          }}
        >
          <div
            style={{
              backgroundColor: "rgba(0, 0, 0, 0.5)",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h1 style={{ color: "white", fontSize: "2.5rem", fontWeight: "bold" }}>About Us</h1>
          </div>
        </div>

        {/* Store Description */}
        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <h2 style={{ fontSize: "2.25rem", fontWeight: "600" }}>Welcome to TrendyWear</h2>
          <p style={{ color: "#4a4a4a", marginTop: "16px", maxWidth: "800px", margin: "0 auto" }}>
            TrendyWear is your go-to fashion destination for stylish clothing, footwear, and accessories. 
            We bring you the latest trends at affordable prices, ensuring that you always look your best.
          </p>
        </div>

        {/* Mission Section */}
        <div style={{ marginTop: "48px", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: "600" }}>Our Mission</h2>
          <p style={{ color: "#4a4a4a", marginTop: "16px", maxWidth: "600px", margin: "0 auto" }}>
            Our mission is to make fashion accessible to everyone by providing trendy, high-quality, and 
            affordable fashion pieces that help you express your unique style.
          </p>
        </div>

        {/* What We Offer */}
        <div style={{ marginTop: "48px", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: "600" }}>What We Offer</h2>
          <div style={{ display: "grid", gridTemplateColumns: "1fr", gap: "24px", marginTop: "24px" }}>
            <div style={{ padding: "24px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "8px", backgroundColor: "white" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600" }}>Latest Fashion Trends</h3>
              <p style={{ color: "#4a4a4a", marginTop: "12px" }}>
                Stay ahead with our carefully curated collection of stylish outfits.
              </p>
            </div>
            <div style={{ padding: "24px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "8px", backgroundColor: "white" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600" }}>Premium Quality</h3>
              <p style={{ color: "#4a4a4a", marginTop: "12px" }}>
                We ensure top-notch fabric and designs for lasting fashion statements.
              </p>
            </div>
            <div style={{ padding: "24px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "8px", backgroundColor: "white" }}>
              <h3 style={{ fontSize: "1.25rem", fontWeight: "600" }}>Fast & Secure Shopping</h3>
              <p style={{ color: "#4a4a4a", marginTop: "12px" }}>
                Enjoy a seamless shopping experience with safe payments and quick delivery.
              </p>
            </div>
          </div>
        </div>

        {/* Team Section */}
        <div style={{ marginTop: "48px", textAlign: "center" }}>
          <h2 style={{ fontSize: "1.75rem", fontWeight: "600" }}>Meet Our Team</h2>
          <div style={{ display: "flex", justifyContent: "center", gap: "24px", marginTop: "24px" }}>
            <div style={{ padding: "16px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "8px", backgroundColor: "white", textAlign: "center" }}>
              <img src="/images/team-member1.jpg" alt="Team Member" style={{ width: "96px", height: "96px", borderRadius: "50%", margin: "0 auto" }} />
              <h3 style={{ marginTop: "12px", fontSize: "1.125rem", fontWeight: "600" }}>Emily Johnson</h3>
              <p style={{ color: "#4a4a4a" }}>Founder & Creative Director</p>
            </div>
            <div style={{ padding: "16px", boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)", borderRadius: "8px", backgroundColor: "white", textAlign: "center" }}>
              <img src="/images/team-member2.jpg" alt="Team Member" style={{ width: "96px", height: "96px", borderRadius: "50%", margin: "0 auto" }} />
              <h3 style={{ marginTop: "12px", fontSize: "1.125rem", fontWeight: "600" }}>Michael Smith</h3>
              <p style={{ color: "#4a4a4a" }}>Head of Design</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
