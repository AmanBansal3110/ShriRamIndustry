import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import About from "./pages/About";
import Contact from "./pages/Contact";
import SignUp from "./pages/SignUp";
import SignIn from "./pages/SignIn";
import Loader from "./components/Loader"; // Add this line
import Footer from "./components/Footer"; // Add this line
import Cart from "./pages/Carts"; // Add this line
import Wishlist from "./pages/Wishlist"; // Add this line
import Search from "./pages/Search"; // Add this line

function App() {
  // loader state
  const [isLoading, setIsLoading] = useState(true);

  // Simulate data fetching with a timeout for the loader
  useEffect(() => {
    const fakeDataFetch = () => {
      setTimeout(() => {
        setIsLoading(false);
      }, 4000); // Preload for 4 seconds
    };

    fakeDataFetch();
  }, []);

  // If loading, show the Loader component
  if (isLoading) {
    return <Loader />;
  }
  
  // Once loading is complete, render the main application
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <div className="separator-line"></div> {/* Separator line added here */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/search" element={<Search />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/cart" element={<Cart/>} />
            <Route path="/products" element={<Products />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn />} />
          </Routes>
        </main>
        <div className="separator-line"></div> {/* Separator line added here */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
