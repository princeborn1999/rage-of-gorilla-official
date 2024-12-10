
import React from 'react';
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="bg-gradient-to-b from-red-900 via-red-700 to-red-500">
          <header className="bg-transparent text-white py-6 px-4">
            <div className="container mx-auto flex flex-col items-center">
            <h1 className="text-4xl font-bold text-amber-300 mb-4">Rage of Gorilla</h1>
            
            <nav className="flex justify-center space-x-6">
                <Link
                    to="/manga-chapter"
                    className="text-xl text-amber-200 hover:text-amber-100 transition-colors"
                >
                Manga Chapter
                </Link>
                <Link
                    to="/character-intro"
                    className="text-xl text-amber-200 hover:text-amber-100 transition-colors"
                    >
                    Character Intro
                </Link>
                <Link
                    to="/author-intro"
                    className="text-xl text-amber-200 hover:text-amber-100 transition-colors"
                    >
                    Author Intro
                </Link>
            </nav>
            </div>
        </header>
    </div>
  );
}

export default Header;
