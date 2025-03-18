
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "@/components/ProductCard";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight } from "lucide-react";

const Upsell = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Check if user has registered, if not redirect to home page
    const userData = localStorage.getItem("user");
    if (!userData) {
      navigate("/");
    }
    
    // Set up animations for this page
    document.body.classList.add("upsell-page");
    
    // Clean up when unmounting
    return () => {
      document.body.classList.remove("upsell-page");
    };
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-btc-deep-blue to-black text-white overflow-hidden">
      {/* Animated background elements */}
      <div className="fixed inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-1/4 w-1/2 h-1/2 bg-btc-neon-blue/30 rounded-full filter blur-[100px] animate-pulse-glow"></div>
        <div className="absolute bottom-0 right-1/4 w-1/2 h-1/2 bg-btc-neon-pink/20 rounded-full filter blur-[100px] animate-pulse-glow" style={{ animationDelay: "1s" }}></div>
        <div className="absolute top-1/4 right-1/4 w-1/3 h-1/3 bg-btc-neon-green/20 rounded-full filter blur-[100px] animate-pulse-glow" style={{ animationDelay: "2s" }}></div>
        
        {/* Particles/Grid effect */}
        <div className="absolute inset-0 opacity-30" style={{ 
          backgroundImage: "radial-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px)", 
          backgroundSize: "30px 30px" 
        }}></div>
      </div>
      
      <div className="relative z-10 container px-4 py-16 mx-auto">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16 reveal-animation active">
            <div className="inline-block px-4 py-1.5 bg-btc-neon-blue/20 text-btc-neon-blue rounded-full text-sm font-medium mb-4 border border-btc-neon-blue/40 shadow-neon-soft">
              EXCLUSIVE OFFER
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-shadow-glow">
              <span className="text-btc-neon-blue">Supercharge</span> Your Bitcoin Earnings
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Want to accelerate your Bitcoin earnings? Add this powerful AI Mining solution to your toolkit and start generating BTC automatically!
            </p>
          </div>
          
          {/* Product Cards */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {/* E1ULife Card */}
            <div className="reveal-animation active">
              <ProductCard
                title="Go E1U Life"
                price="$30"
                description="Your essential starting point for AI-powered Bitcoin earnings."
                features={[
                  "Start with just $30 in BTC",
                  "Invite 2 friends within 48 hours",
                  "Potential to earn over $30,000 in 14 days",
                  "Includes AI marketing tools",
                  "24/7 support and community"
                ]}
                ctaText="Already Purchased!"
                ctaLink="#"
                logoUrl="https://aibitcoincreator.com/images/E1UlifeLogo.png"
                className="opacity-70 h-full"
              />
            </div>
            
            {/* MinerX Card */}
            <div className="reveal-animation active">
              <ProductCard
                title="AI Bitcoin MinerX"
                price="$100"
                description="Boost your Bitcoin earnings with our cutting-edge AI mining technology."
                features={[
                  "Earn $250+ in BTC through mining pools",
                  "Advanced AI optimization algorithms",
                  "No technical knowledge required",
                  "Energy-efficient mining solution",
                  "Complements your E1U Life subscription"
                ]}
                ctaText="Upgrade Now & Earn More BTC"
                ctaLink="https://minerx.tech/"
                logoUrl="https://aibitcoincreator.com/images/MinerXLogo.png"
                isNeon={true}
                className="transform scale-105 h-full shadow-neon"
              />
            </div>
          </div>
          
          {/* Info Section */}
          <div className="glass-dark rounded-2xl p-8 mb-16 reveal-animation active">
            <h2 className="text-2xl font-bold mb-6 text-btc-neon-blue text-shadow-glow">Why Add MinerX to Your Bitcoin Strategy?</h2>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/5 p-6 rounded-xl">
                <div className="text-btc-neon-blue text-xl font-bold mb-3">Passive Income</div>
                <p className="text-gray-300">MinerX works 24/7 to generate Bitcoin without requiring your constant attention.</p>
              </div>
              
              <div className="bg-white/5 p-6 rounded-xl">
                <div className="text-btc-neon-blue text-xl font-bold mb-3">AI Optimization</div>
                <p className="text-gray-300">Advanced algorithms maximize mining efficiency to generate more Bitcoin with less resources.</p>
              </div>
              
              <div className="bg-white/5 p-6 rounded-xl">
                <div className="text-btc-neon-blue text-xl font-bold mb-3">Perfect Complement</div>
                <p className="text-gray-300">Combines perfectly with E1U Life to create multiple streams of Bitcoin income.</p>
              </div>
            </div>
          </div>
          
          {/* Final CTA */}
          <div className="text-center reveal-animation active">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-shadow-glow">
              Ready to <span className="text-btc-neon-green">Maximize</span> Your Bitcoin Earnings?
            </h2>
            
            <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-10">
              <Button
                onClick={() => window.open("https://minerx.tech/", "_blank")}
                className="btn-neon text-lg px-8 py-6"
              >
                Upgrade to MinerX Now <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              
              <Button
                onClick={() => navigate("/thank-you")}
                variant="outline"
                className="border-gray-600 text-gray-300 hover:bg-gray-800"
              >
                <ArrowLeft className="mr-2 h-5 w-5" /> No Thanks, Return to Dashboard
              </Button>
            </div>
            
            <p className="text-gray-400 max-w-2xl mx-auto">
              MinerX uses cutting-edge technology to mine Bitcoin efficiently in shared mining pools. Results may vary based on market conditions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Upsell;
