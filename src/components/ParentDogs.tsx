import type { Parent } from '../types';

const PARENTS: Parent[] = [
  {
    id: '1',
    name: 'Duke',
    breed: 'Golden Retriever',
    age: '4 years',
    image: 'https://images.unsplash.com/photo-1633722715463-d30f4f325e24?auto=format&fit=crop&q=80',
    certifications: ['AKC Champion', 'OFA Hip Excellent', 'OFA Elbow Normal'],
    description: 'Duke is our premier stud with an exceptional temperament and multiple show championships.',
  },
  {
    id: '2',
    name: 'Sophie',
    breed: 'Golden Retriever',
    age: '3 years',
    image: 'https://images.unsplash.com/photo-1602241628512-459cdd3234fe?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&fit=crop&q=80',
    certifications: ['AKC Champion', 'OFA Hip Good', 'OFA Elbow Normal'],
    description: 'Sophie comes from champion bloodlines and has produced multiple award-winning puppies.',
  },
];

export function ParentDogs() {
  return (
    <section id="parent-dogs" className="pt-24 pb-16 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Our Parent Dogs
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {PARENTS.map((parent) => (
            <div
              key={parent.id}
              className="bg-gray-50 dark:bg-gray-700 rounded-lg overflow-hidden shadow-lg"
            >
              <div className="relative pb-[66.67%]">
                <img
                  src={parent.image}
                  alt={parent.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                  {parent.name}
                </h3>
                
                <div className="space-y-3 text-gray-700 dark:text-gray-300">
                  <p><span className="font-medium">Breed:</span> {parent.breed}</p>
                  <p><span className="font-medium">Age:</span> {parent.age}</p>
                  <p className="font-medium">Certifications:</p>
                  <ul className="list-disc list-inside pl-4">
                    {parent.certifications.map((cert, index) => (
                      <li key={index}>{cert}</li>
                    ))}
                  </ul>
                  <p className="mt-4">{parent.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}