import { useState } from 'react';
import type { Puppy } from '../types';

const PUPPIES: Puppy[] = [
  {
    id: '1',
    name: 'Luna',
    breed: 'Shih Tzu',
    age: '8 weeks',
    price: 2500,
    image: 'https://images.unsplash.com/photo-1610385874395-e75e493098b7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80',
    available: true,
    description: 'Luna is a playful and affectionate female Golden Retriever puppy. She comes from champion bloodlines and has excellent temperament.',
  },
  {
    id: '2',
    name: 'Max',
    breed: 'German Shepherd',
    age: '10 weeks',
    price: 2800,
    image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&q=80',
    available: true,
    description: 'Max is an intelligent and confident male German Shepherd puppy. He shows great potential for both family companionship and working roles.',
  },
  {
    id: '3',
    name: 'Bella',
    breed: 'Labrador Retriever',
    age: '9 weeks',
    price: 2300,
    image: 'https://images.unsplash.com/photo-1591160690555-5debfba289f0?auto=format&fit=crop&q=80',
    available: true,
    description: 'Bella is a sweet and gentle female Labrador puppy. She loves water and has a natural retrieving instinct.',
  },
];

export function AvailablePuppies() {
  const [selectedPuppy, setSelectedPuppy] = useState<Puppy | null>(null);

  return (
    <section id="available-puppies" className="pt-24 pb-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Available Puppies
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PUPPIES.map((puppy) => (
            <div
              key={puppy.id}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105"
            >
              <div className="relative pb-[66.67%]">
                <img
                  src={puppy.image}
                  alt={puppy.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                  {puppy.name}
                </h3>
                <div className="space-y-2 text-gray-700 dark:text-gray-300">
                  <p><span className="font-medium">Breed:</span> {puppy.breed}</p>
                  <p><span className="font-medium">Age:</span> {puppy.age}</p>
                  <p><span className="font-medium">Price:</span> ${puppy.price}</p>
                </div>
                <button
                  onClick={() => setSelectedPuppy(puppy)}
                  className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                >
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        {selectedPuppy && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
            <div className="bg-white dark:bg-gray-800 rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                    {selectedPuppy.name}
                  </h3>
                  <button
                    onClick={() => setSelectedPuppy(null)}
                    className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    ✕
                  </button>
                </div>
                <img
                  src={selectedPuppy.image}
                  alt={selectedPuppy.name}
                  className="w-full h-64 object-cover rounded-lg mb-4"
                />
                <div className="space-y-4 text-gray-700 dark:text-gray-300">
                  <p><span className="font-medium">Breed:</span> {selectedPuppy.breed}</p>
                  <p><span className="font-medium">Age:</span> {selectedPuppy.age}</p>
                  <p><span className="font-medium">Price:</span> ${selectedPuppy.price}</p>
                  <p>{selectedPuppy.description}</p>
                </div>
                <div className="mt-6 flex justify-end">
                  <button
                    onClick={() => setSelectedPuppy(null)}
                    className="bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-white font-semibold py-2 px-4 rounded-lg transition-colors"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}