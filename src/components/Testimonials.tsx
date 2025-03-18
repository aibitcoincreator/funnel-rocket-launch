
import { useEffect, useState } from "react";
import { ArrowLeft, ArrowRight, Quote } from "lucide-react";

interface Testimonial {
  text: string;
  author: string;
}

interface TestimonialsProps {
  testimonials: Testimonial[];
  autoPlay?: boolean;
  interval?: number;
  className?: string;
  delay?: number;
}

const Testimonials = ({ 
  testimonials, 
  autoPlay = true, 
  interval = 5000,
  className = "",
  delay = 0
}: TestimonialsProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    // For the initial reveal animation
    const revealTimer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    // For auto-rotating testimonials
    let slideTimer: NodeJS.Timeout | null = null;
    
    if (autoPlay && testimonials.length > 1) {
      slideTimer = setInterval(() => {
        nextSlide();
      }, interval);
    }

    return () => {
      clearTimeout(revealTimer);
      if (slideTimer) clearInterval(slideTimer);
    };
  }, [autoPlay, interval, testimonials.length, delay]);

  const nextSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  const prevSlide = () => {
    if (isTransitioning) return;
    
    setIsTransitioning(true);
    
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
      );
      setIsTransitioning(false);
    }, 300);
  };

  if (testimonials.length === 0) return null;

  return (
    <div className={`reveal-animation ${isVisible ? 'active' : ''} ${className}`}>
      <div className="relative glass-card rounded-xl overflow-hidden p-6 md:p-10">
        <div className="absolute top-6 left-8">
          <Quote className="h-8 w-8 text-btc-gold opacity-40" />
        </div>
        
        <div className={`transition-opacity duration-300 ${isTransitioning ? 'opacity-0' : 'opacity-100'}`}>
          <div className="text-lg md:text-xl mb-6 pt-6 px-2">
            {testimonials[currentIndex].text}
          </div>
          
          <div className="font-semibold">
            — {testimonials[currentIndex].author}
          </div>
        </div>
        
        {testimonials.length > 1 && (
          <div className="flex justify-center mt-6 gap-4">
            <button 
              onClick={prevSlide}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Previous testimonial"
            >
              <ArrowLeft className="h-5 w-5" />
            </button>
            
            <div className="flex items-center gap-1.5">
              {testimonials.map((_, index) => (
                <div 
                  key={index}
                  className={`h-2 w-2 rounded-full transition-colors ${
                    index === currentIndex ? 'bg-btc-gold' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextSlide}
              className="p-2 rounded-full hover:bg-gray-100 transition-colors"
              aria-label="Next testimonial"
            >
              <ArrowRight className="h-5 w-5" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Testimonials;
