import type { Testimonial } from '../types';
import { Star } from 'lucide-react';

const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Johnson',
    content: 'Our Golden Retriever puppy from Elite Paws is absolutely perfect. The health testing and early socialization really shows in his temperament.',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    rating: 5,
    date: '2024-02-15',
  },
  {
    id: '2',
    name: 'Michael Chen',
    content: 'The breeding program here is exceptional. Our German Shepherd puppy is not only beautiful but also incredibly intelligent and well-adjusted.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    rating: 5,
    date: '2024-01-30',
  },
  {
    id: '3',
    name: 'Emily Rodriguez',
    content: 'The entire experience with Elite Paws was fantastic. They were transparent about their breeding practices and provided excellent support.',
    image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80',
    rating: 5,
    date: '2024-01-20',
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex space-x-1">
      {[...Array(5)].map((_, index) => (
        <Star
          key={index}
          className={`w-5 h-5 ${
            index < rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'
          }`}
        />
      ))}
    </div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="pt-24 pb-16 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
          What Our Clients Say
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 transition-transform hover:scale-105"
            >
              <div className="flex items-center mb-4">
                {testimonial.image && (
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                )}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h3>
                  <StarRating rating={testimonial.rating} />
                </div>
              </div>
              
              <blockquote className="text-gray-700 dark:text-gray-300 italic mb-4">
                "{testimonial.content}"
              </blockquote>
              
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {new Date(testimonial.date).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}