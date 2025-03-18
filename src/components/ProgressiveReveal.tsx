
import { ReactNode, useEffect, useState } from "react";

interface ProgressiveRevealProps {
  children: ReactNode;
  delay: number;
  className?: string;
  animation?: 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'slide-up' | 'scale-up';
}

const ProgressiveReveal = ({
  children,
  delay,
  className = "",
  animation = 'fade-in'
}: ProgressiveRevealProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <div 
      className={`opacity-0 ${isVisible ? `animate-${animation}` : ''} ${className}`}
      style={{ animationDelay: '100ms' }}
    >
      {children}
    </div>
  );
};

export default ProgressiveReveal;
