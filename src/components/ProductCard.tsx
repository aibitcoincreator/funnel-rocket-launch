
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProductCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  ctaText: string;
  ctaLink: string;
  className?: string;
  isNeon?: boolean;
  logoUrl?: string;
  delay?: number;
}

const ProductCard = ({
  title,
  price,
  description,
  features,
  ctaText,
  ctaLink,
  className = "",
  isNeon = false,
  logoUrl,
  delay = 0
}: ProductCardProps) => {
  const handleCtaClick = () => {
    window.open(ctaLink, "_blank");
  };

  return (
    <div 
      className={`reveal-animation ${isNeon ? 'glass-dark neon-border' : 'glass-card'} rounded-xl overflow-hidden ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      <div className="p-6 md:p-8">
        {logoUrl && (
          <div className="flex justify-center mb-6">
            <img src={logoUrl} alt={title} className="h-16 object-contain" />
          </div>
        )}
        
        <h3 className={`text-xl md:text-2xl font-bold mb-2 ${isNeon ? 'text-white text-shadow-glow' : ''}`}>
          {title}
        </h3>
        
        <div className={`text-3xl md:text-4xl font-bold mb-4 ${isNeon ? 'text-btc-neon-blue' : 'subheading-gradient'}`}>
          {price}
        </div>
        
        <p className={`mb-6 ${isNeon ? 'text-gray-300' : 'text-gray-600'}`}>
          {description}
        </p>
        
        <ul className="space-y-3 mb-8">
          {features.map((feature, index) => (
            <li key={index} className={`flex items-start ${isNeon ? 'text-gray-200' : 'text-gray-700'}`}>
              <span className={`mr-2 mt-1 text-xl ${isNeon ? 'text-btc-neon-blue' : 'text-btc-gold'}`}>•</span>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Button
          onClick={handleCtaClick}
          className={isNeon ? 'btn-neon w-full' : 'btn-secondary w-full'}
        >
          {ctaText} <ArrowRight className="ml-2 h-5 w-5" />
        </Button>
      </div>
    </div>
  );
};

export default ProductCard;
