
import { useEffect, useState } from "react";

interface VideoSectionProps {
  videoId?: string;
  title: string;
  subtitle?: string;
  logoUrl?: string;
}

const VideoSection = ({ 
  videoId = "rFsf9g20bcc", 
  title, 
  subtitle,
  logoUrl
}: VideoSectionProps) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Trigger animation after component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 200);

    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className={`transition-all duration-700 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
      {logoUrl && (
        <div className="mb-6 flex justify-center">
          <img 
            src={logoUrl} 
            alt="Logo" 
            className="h-20 object-contain"
          />
        </div>
      )}
      
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">{title}</h2>
      
      {subtitle && (
        <p className="text-muted-foreground text-center mb-6 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
      
      <div className="rounded-xl overflow-hidden shadow-2xl relative aspect-video w-full max-w-4xl mx-auto">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute top-0 left-0 w-full h-full border-0"
          title="YouTube video player"
        ></iframe>
      </div>
    </div>
  );
};

export default VideoSection;
