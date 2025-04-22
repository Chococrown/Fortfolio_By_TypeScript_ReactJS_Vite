import { useEffect, useState } from "react";

import './styles_Header/Theme.css'

import sunIcon from './icons_Header/sun.png'
import moonIcon from './icons_Header/moon.png'


function Theme() {
    const [theme, setTheme] = useState("light");

    const toggleTheme = () => {
        const newTheme = theme === "light" ? "dark" : "light";
        setTheme(newTheme);
        localStorage.setItem("theme", newTheme);
        document.body.classList.toggle("dark", newTheme === "dark");
      };

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") || "light";
        setTheme(savedTheme);
        document.body.classList.toggle("dark", savedTheme === "dark");
      }, []);


      return <img
      src={theme === "light" ? moonIcon : sunIcon}
      alt="Toggle Theme"
      className="theme-icon"
      onClick={toggleTheme}
    />
    
}

export default Theme ;