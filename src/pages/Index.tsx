
import { useEffect } from "react";
import { ArrowRight } from "lucide-react";
import RegistrationForm from "@/components/RegistrationForm";
import { setupRevealAnimations } from "@/lib/animations";

const Index = () => {
  useEffect(() => {
    // Set up intersection observer for reveal animations
    const cleanupAnimation = setupRevealAnimations();
    
    return () => {
      // Clean up the observer when component unmounts
      cleanupAnimation();
    };
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      {/* Background elements */}
      <div className="fixed inset-0 z-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-btc-electric-blue/10 rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-btc-gold/10 rounded-full filter blur-3xl"></div>
      </div>
      
      <div className="relative z-10 container px-4 py-16 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-12">
            <div className="flex justify-center mb-6 reveal-animation active">
              <img 
                src="https://aibitcoincreator.com/images/logo.png" 
                alt="AI Bitcoin Creator" 
                className="h-24 md:h-28 object-contain"
              />
            </div>
            
            <h1 className="text-3xl md:text-5xl font-bold mb-6 reveal-animation active">
              <span className="heading-gradient">Unlock the Power of AI</span> &<br />
              <span className="subheading-gradient">Start Earning Bitcoin Today</span>
            </h1>
            
            <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto mb-8 reveal-animation active">
              Discover how <strong>AI Bitcoin Creator</strong> helps you easily generate Bitcoin with minimal effort, 
              using AI-powered automation tools, products, and services.
            </p>
            
            <div className="flex flex-wrap justify-center items-center gap-2 mb-12 reveal-animation active">
              <div className="flex items-center px-4 py-2 bg-white/80 rounded-full shadow-sm">
                <span className="text-btc-gold mr-2">•</span>
                <span className="text-sm font-medium">AI-Driven Automation</span>
              </div>
              
              <div className="flex items-center px-4 py-2 bg-white/80 rounded-full shadow-sm">
                <span className="text-btc-gold mr-2">•</span>
                <span className="text-sm font-medium">Instant BTC Payouts</span>
              </div>
              
              <div className="flex items-center px-4 py-2 bg-white/80 rounded-full shadow-sm">
                <span className="text-btc-gold mr-2">•</span>
                <span className="text-sm font-medium">No Experience Required</span>
              </div>
              
              <div className="flex items-center px-4 py-2 bg-white/80 rounded-full shadow-sm">
                <span className="text-btc-gold mr-2">•</span>
                <span className="text-sm font-medium">Start with just $30</span>
              </div>
            </div>
          </div>
          
          {/* Main Content */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left Column - Benefits */}
            <div className="space-y-8">
              <div className="reveal-animation">
                <h2 className="text-2xl font-bold mb-4">
                  Join the <span className="text-btc-electric-blue">AI Bitcoin Revolution</span>
                </h2>
                
                <p className="text-gray-600 mb-6">
                  AI Bitcoin Creator gives you exclusive access to cutting-edge tools and strategies 
                  that automate your income while the powerful AI does the heavy lifting.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-btc-electric-blue/20 flex items-center justify-center mt-1">
                      <ArrowRight className="h-3.5 w-3.5 text-btc-electric-blue" />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium">Duplicate Your Investment</h3>
                      <p className="text-sm text-gray-500">Start with just $30 and invite 2 friends who can do the same.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-btc-electric-blue/20 flex items-center justify-center mt-1">
                      <ArrowRight className="h-3.5 w-3.5 text-btc-electric-blue" />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium">AI Tools & Automation</h3>
                      <p className="text-sm text-gray-500">Access powerful AI marketing tools to grow your business efficiently.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-btc-electric-blue/20 flex items-center justify-center mt-1">
                      <ArrowRight className="h-3.5 w-3.5 text-btc-electric-blue" />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium">Bitcoin Payouts</h3>
                      <p className="text-sm text-gray-500">Receive payments directly in Bitcoin to your wallet.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <div className="flex-shrink-0 h-6 w-6 rounded-full bg-btc-electric-blue/20 flex items-center justify-center mt-1">
                      <ArrowRight className="h-3.5 w-3.5 text-btc-electric-blue" />
                    </div>
                    <div className="ml-3">
                      <h3 className="font-medium">Step-by-Step Guidance</h3>
                      <p className="text-sm text-gray-500">Complete support to help you succeed, even as a beginner.</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="glass-card p-6 reveal-animation">
                <h3 className="text-lg font-medium mb-4">What You'll Get As a Free Member:</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <span className="text-btc-gold mr-2">•</span>
                    <span>Complete Bitcoin Earning Blueprint</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-btc-gold mr-2">•</span>
                    <span>Access to Quick-Start Videos & Guides</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-btc-gold mr-2">•</span>
                    <span>Priority Support via WhatsApp</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-btc-gold mr-2">•</span>
                    <span>AI Marketing Strategy Templates</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-btc-gold mr-2">•</span>
                    <span>Crypto & Bitcoin Basics Training</span>
                  </li>
                </ul>
              </div>
            </div>
            
            {/* Right Column - Registration Form */}
            <div className="reveal-animation">
              <div className="mb-8 text-center">
                <div className="inline-block px-3 py-1 bg-btc-gold/10 text-btc-gold rounded-full text-sm font-medium mb-2">
                  Limited Time Offer
                </div>
                <h2 className="text-2xl font-bold mb-2">Register Now - 100% Free</h2>
                <p className="text-gray-500">Create your account in just 30 seconds</p>
              </div>
              
              <RegistrationForm />
            </div>
          </div>
          
          {/* Disclaimer */}
          <div className="mt-16 text-center text-sm text-gray-500 max-w-3xl mx-auto reveal-animation">
            <p>
              <strong>Disclaimer:</strong> We can't guarantee you'll achieve the same results shown in our examples.
              Our success is based on large-scale marketing across thousands of members on multiple platforms.
              Real earnings require genuine effort, strategic promotion, and consistency.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
