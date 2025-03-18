
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { setupRevealAnimations, testimonialData, faqData } from "@/lib/animations";
import VideoSection from "@/components/VideoSection";
import ProgressiveReveal from "@/components/ProgressiveReveal";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { ExternalLink, ArrowRight, Check } from "lucide-react";

const ThankYou = () => {
  const [userName, setUserName] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Set up intersection observer for reveal animations
    const cleanupAnimation = setupRevealAnimations();
    
    // Check if user has registered, if not redirect to home page
    const userData = localStorage.getItem("user");
    if (!userData) {
      navigate("/");
      return;
    }
    
    try {
      const parsedUser = JSON.parse(userData);
      if (parsedUser.name) {
        setUserName(parsedUser.name.split(" ")[0]);
      }
    } catch (e) {
      console.error("Error parsing user data", e);
    }
    
    return () => {
      // Clean up the observer when component unmounts
      cleanupAnimation();
    };
  }, [navigate]);

  const handleJoinClick = () => {
    window.open("https://go.e1ulife.com/ai-takeover?affid=aibitcoincreator", "_blank");
    // After opening external window, navigate to upsell page
    setTimeout(() => {
      navigate("/upsell");
    }, 300);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-btc-electric-blue/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-btc-gold/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container px-4 py-12 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Welcome Header */}
          <ProgressiveReveal delay={0} className="text-center mb-10">
            <h1 className="text-2xl md:text-4xl font-bold mb-4">
              Welcome{userName ? `, ${userName}` : ""}! <span className="text-btc-electric-blue">You're In!</span>
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Watch the video below to learn how you can start earning with AI Bitcoin Creator and Go E1U Life.
            </p>
          </ProgressiveReveal>
          
          {/* Video Section */}
          <ProgressiveReveal delay={500} className="mb-12">
            <VideoSection 
              videoId="rFsf9g20bcc" 
              title="Introducing Go E1U Life" 
              subtitle="E1Ulife requires only $30 to start. Duplicate your investment by inviting two friends who can do the same. Repeating this process may help you earn over $30,000 in 14 days."
              logoUrl="https://aibitcoincreator.com/images/E1UlifeLogo.png"
            />
          </ProgressiveReveal>
          
          {/* Call to Action Button */}
          <ProgressiveReveal delay={7000} className="flex justify-center mb-16">
            <Button 
              onClick={handleJoinClick}
              className="btn-secondary text-xl px-8 py-6 rounded-xl"
              size="lg"
            >
              <span>Join Now With Our Referral Link</span>
              <ExternalLink className="ml-2 h-5 w-5" />
            </Button>
          </ProgressiveReveal>
          
          {/* Key Points */}
          <ProgressiveReveal delay={5000} className="mb-16">
            <div className="glass-card rounded-xl p-8">
              <h2 className="text-2xl font-bold mb-6 text-center">
                <span className="heading-gradient">Automated Wealth Creation with AI & Bitcoin</span>
              </h2>
              <p className="text-lg text-center mb-8">
                <span className="font-medium text-btc-blue">AI Bitcoin Creator</span> combines cutting-edge automation with Bitcoin to unlock 
                <span className="font-medium text-btc-blue"> seamless passive income</span> like never before!
              </p>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold mb-4">Key Benefits:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-btc-electric-blue flex items-center justify-center mt-0.5">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div className="ml-3">
                        <span className="font-medium">AI-Driven Wealth Automation</span> – Let smart technology work for you!
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-btc-electric-blue flex items-center justify-center mt-0.5">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div className="ml-3">
                        <span className="font-medium">Instant Bitcoin Payouts</span> – No delays, no hassle, just real BTC!
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-btc-electric-blue flex items-center justify-center mt-0.5">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div className="ml-3">
                        <span className="font-medium">100% Secure & Transparent</span> – Built on cutting-edge blockchain tech.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-btc-electric-blue flex items-center justify-center mt-0.5">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div className="ml-3">
                        <span className="font-medium">No Experience? No Problem!</span> – Fully automated for beginners & pros alike.
                      </div>
                    </li>
                  </ul>
                </div>
                
                <div className="glass-card p-6">
                  <h3 className="text-xl font-bold mb-4">How to Get Started:</h3>
                  <ul className="space-y-4">
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-btc-gold flex items-center justify-center mt-0.5">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div className="ml-3">
                        Start with just <span className="font-medium">$30 in BTC</span> and watch the magic happen!
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-btc-gold flex items-center justify-center mt-0.5">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div className="ml-3">
                        Use your profits to fuel even bigger opportunities.
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-btc-gold flex items-center justify-center mt-0.5">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div className="ml-3">
                        Invite <span className="font-medium">2 friends within 48 hours</span> and potentially recoup your $30 within 72 hours!
                      </div>
                    </li>
                    <li className="flex items-start">
                      <div className="flex-shrink-0 h-6 w-6 rounded-full bg-btc-gold flex items-center justify-center mt-0.5">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <div className="ml-3">
                        Earn credits to unlock <span className="font-medium">powerful AI tools</span> to grow your business.
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              
              <div className="text-center mt-8">
                <p className="font-medium text-xl mb-6">
                  <span className="text-btc-electric-blue">Don't just watch the future unfold—profit from it!</span>
                </p>
                
                <Button 
                  onClick={handleJoinClick}
                  className="btn-secondary"
                  size="lg"
                >
                  Join Now With Our Referral Link <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>
            </div>
          </ProgressiveReveal>
          
          {/* Testimonials Section */}
          <ProgressiveReveal delay={5500} className="mb-16">
            <h2 className="text-2xl font-bold mb-6 text-center">What Our Top Members Are Saying</h2>
            <Testimonials testimonials={testimonialData} />
          </ProgressiveReveal>
          
          {/* FAQ Section */}
          <ProgressiveReveal delay={6000} className="mb-16">
            <FAQ items={faqData} />
          </ProgressiveReveal>
          
          {/* Contact Section */}
          <ProgressiveReveal delay={8000} className="mb-12 text-center">
            <h2 className="text-2xl font-bold mb-4">Need Help? Contact Us</h2>
            <p className="mb-6 text-gray-600">Our team is ready to assist you with any questions</p>
            
            <a 
              href="https://wa.me/27783699799" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-3 bg-[#25D366] text-white font-medium rounded-md hover:bg-[#128C7E] transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
              </svg>
              Chat with us on WhatsApp
            </a>
          </ProgressiveReveal>
          
          {/* Disclaimer */}
          <ProgressiveReveal delay={6000} className="glass-card p-6 rounded-xl mb-12">
            <h3 className="text-lg font-medium mb-2 text-btc-gold">Disclaimer</h3>
            <p className="text-sm text-gray-600">
              We can't guarantee you'll achieve the same results shown in our examples.
              Our success is based on large-scale marketing across thousands of members on multiple platforms.
              Real earnings require genuine effort, strategic promotion, and consistency.
            </p>
          </ProgressiveReveal>
        </div>
      </div>
    </div>
  );
};

export default ThankYou;
