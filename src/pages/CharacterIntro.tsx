
import React from 'react';

function CharacterIntro() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white via-gray-100 to-gray-200 text-gray-800 py-12 px-6">
      <div className="container mx-auto text-center">
        {/* Page Title */}
        <h2 className="text-3xl font-semibold text-gray-900 mb-8">Character Introduction</h2>

        {/* Character 1: Gorilla */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Gorilla - The Guardian Warrior</h3>
          <img
            src="/path/to/gorilla-image.jpg" // Replace with your Gorilla image
            alt="Gorilla Character"
            className="w-64 h-64 mx-auto rounded-lg shadow-lg mb-4"
          />
          <p className="text-lg text-gray-700">
            Gorilla is known as the undefeated Guardian Warrior. His design is inspired by the fierce Aztec warriors,
            embodying the strength and determination of these ancient fighters. With unmatched combat skills, he has never
            suffered a defeat in battle. His armor and weapons reflect the fierce and proud culture of the Aztecs, making him
            a formidable and respected warrior in the world of "Rage of Gorilla."
          </p>
        </div>

        {/* Character 2: AaronPrince */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">AaronPrince - The Noble Fighter</h3>
          <img
            src="/path/to/aaronprince-image.jpg" // Replace with your AaronPrince image
            alt="AaronPrince Character"
            className="w-64 h-64 mx-auto rounded-lg shadow-lg mb-4"
          />
          <p className="text-lg text-gray-700">
            AaronPrince is inspired by the noble Frankish knights. He is elegant, noble, and excels both in wisdom and martial
            arts. Known for his unmatched intelligence and powerful combat skills, he is a versatile and graceful warrior who
            commands respect on and off the battlefield. His wisdom allows him to outsmart his enemies, while his strength
            ensures his dominance in physical combat.
          </p>
        </div>

        {/* Character 3: Vivian */}
        <div className="mb-12">
          <h3 className="text-2xl font-semibold text-gray-900 mb-4">Vivian - The Beloved Princess</h3>
          <img
            src="/path/to/vivian-image.jpg" // Replace with your Vivian image
            alt="Vivian Character"
            className="w-64 h-64 mx-auto rounded-lg shadow-lg mb-4"
          />
          <p className="text-lg text-gray-700">
            Vivian is inspired by the noble and graceful Frankish princesses. She is sweet and adorable, but beneath her
            gentle exterior lies a powerful warrior. Her exceptional combat abilities and deep connection with the people make
            her a beloved figure. Vivian's strength and charm have earned her the admiration of her kingdom, and her leadership
            qualities shine in times of adversity.
          </p>
        </div>
      </div>
    </div>
  )
}
export default CharacterIntro;
