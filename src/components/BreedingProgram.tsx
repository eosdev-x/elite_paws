export function BreedingProgram() {
  return (
    <section id="breeding-program" className="pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          Our Breeding Program
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative h-[400px] rounded-lg overflow-hidden">
            <img
              src="https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&q=80"
              alt="Dog breeding program"
              className="absolute inset-0 w-full h-full object-cover"
            />
          </div>
          
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Health Testing
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                All our breeding dogs undergo comprehensive health screenings including hip and elbow evaluations, genetic testing, and regular veterinary check-ups.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Champion Bloodlines
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Our breeding program focuses on maintaining and improving breed standards with carefully selected champion bloodlines.
              </p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Early Socialization
              </h3>
              <p className="text-gray-700 dark:text-gray-300">
                Puppies receive extensive socialization from birth, ensuring well-adjusted and confident companions for their future families.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}