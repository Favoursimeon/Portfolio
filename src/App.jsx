import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";

function App() {
    const [isLoaded, setIsLoaded] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [redirect, setRedirect] = useState(false);

    // Automatically redirect after loading screen
    useEffect(() => {
        if (isLoaded) {
            setRedirect(true);
        }
    }, [isLoaded]);

    return (
        <>
            <Router basename="/portfolio">
                {!isLoaded && <LoadingScreen onComplete={() => setIsLoaded(true)} />}

                {isLoaded && (
                    <div className="min-h-screen transition-opacity duration-700 opacity-100 bg-black text-gray-100">
                        <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
                        <MobileMenu menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

                        <Routes>
                            <Route path="/" element={<Navigate to="/home" />} />
                            <Route path="/home" element={<Home />} />
                            <Route path="/about" element={<About />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/contact" element={<Contact />} />
                            {/* Fallback route for 404 errors */}
                            <Route path="*" element={<Navigate to="/home" />} />
                        </Routes>
                    </div>
                )}
            </Router>

        </>
    );
}

export default App;