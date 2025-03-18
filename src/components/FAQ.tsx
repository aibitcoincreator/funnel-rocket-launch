
import { useState, useEffect } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  className?: string;
  delay?: number;
}

const FAQ = ({ items, title = "Frequently Asked Questions", className = "", delay = 0 }: FAQProps) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className={`reveal-animation ${isVisible ? 'active' : ''} ${className}`}>
      {title && <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>}
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <div 
            key={index} 
            className={`rounded-lg transition-all duration-300 overflow-hidden ${
              openIndex === index ? 'glass-card shadow-lg' : 'bg-gray-50 hover:bg-gray-100'
            }`}
          >
            <button
              className="flex justify-between items-center w-full text-left px-6 py-4"
              onClick={() => toggleFAQ(index)}
              aria-expanded={openIndex === index}
            >
              <span className="font-medium">{item.question}</span>
              {openIndex === index ? (
                <ChevronUp className="h-5 w-5 flex-shrink-0 text-btc-electric-blue" />
              ) : (
                <ChevronDown className="h-5 w-5 flex-shrink-0" />
              )}
            </button>
            
            <div 
              className={`transition-all duration-300 ease-in-out overflow-hidden ${
                openIndex === index ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
              }`}
            >
              <div className="px-6 pb-4">
                <div className="h-px w-full bg-gray-200 mb-4"></div>
                <p className="text-gray-600">{item.answer}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
