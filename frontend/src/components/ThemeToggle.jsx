import { useState, useEffect } from "react";

function ThemeToggle() {
  const [darkmode, setDarkmode] = useState(false);

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkmode ? "dark" : "light");
    localStorage.setItem("theme", darkmode ? "dark" : "light");
  }, [darkmode]);

  useEffect(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
      setDarkmode(true);
    }
  }, []);

  return (
    <label className="cursor-pointer flex items-center space-x-4 border border-gray-400 rounded-md px-3 py-2">
        <span className="text-sm font-medium">
            {darkmode ? "🌙 Dark Mode" : "☀️ Light Mode"}
        </span>
      <input
        type="checkbox"
        checked={darkmode}
        onChange={(e) => setDarkmode(e.target.checked)}
        className="toggle border-orange-500 text-orange-500 bg-white checked:bg-gray-400 checked:text-black checked:border-gray-400"
      />
    </label>
  );
}

export default ThemeToggle;
