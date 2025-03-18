
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowRight, Check } from "lucide-react";

const RegistrationForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [whatsapp, setWhatsapp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [formStep, setFormStep] = useState(0);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // We'll use a basic integration as per requirements
      // In a real app, hook this up to Supabase
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1200));
      
      // Store in localStorage for now (for demo purposes)
      localStorage.setItem("user", JSON.stringify({ name, email, whatsapp }));
      
      // Show success toast
      toast({
        title: "Registration successful!",
        description: "Welcome to AI Bitcoin Creator. Redirecting you...",
      });
      
      // Redirect to thank you page after a short delay
      setTimeout(() => {
        navigate("/thank-you");
      }, 1000);
    } catch (error) {
      toast({
        title: "Registration failed",
        description: "Please try again later",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const nextStep = () => {
    if (formStep === 0 && !name) {
      toast({
        title: "Name required",
        description: "Please enter your name to continue",
        variant: "destructive",
      });
      return;
    }
    if (formStep === 1 && (!email || !email.includes('@'))) {
      toast({
        title: "Valid email required",
        description: "Please enter a valid email address",
        variant: "destructive",
      });
      return;
    }
    
    setFormStep(formStep + 1);
  };

  const renderFormStep = () => {
    switch (formStep) {
      case 0:
        return (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-xl font-medium">What's your name?</h3>
            <Input
              className="input-field text-lg h-14"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <Button 
              className="btn-primary w-full h-14 text-lg"
              onClick={nextStep}
              disabled={!name}
            >
              Next <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        );
      case 1:
        return (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-xl font-medium">Great! What's your email?</h3>
            <Input
              className="input-field text-lg h-14"
              placeholder="Your Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button 
              className="btn-primary w-full h-14 text-lg"
              onClick={nextStep}
              disabled={!email || !email.includes('@')}
            >
              Next <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        );
      case 2:
        return (
          <div className="space-y-4 animate-fade-in">
            <h3 className="text-xl font-medium">Last step! Your WhatsApp number?</h3>
            <Input
              className="input-field text-lg h-14"
              placeholder="WhatsApp Number (with country code)"
              value={whatsapp}
              onChange={(e) => setWhatsapp(e.target.value)}
            />
            <Button 
              className="btn-secondary w-full h-14 text-lg font-medium"
              onClick={handleSubmit}
              disabled={isLoading || !whatsapp}
            >
              {isLoading ? (
                "Processing..."
              ) : (
                <>
                  Get Instant Access <Check className="ml-2 h-5 w-5" />
                </>
              )}
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="glass-card rounded-2xl p-6 md:p-8 w-full max-w-md mx-auto shadow-xl">
      <div className="mb-6 flex justify-center">
        <div className="flex gap-2">
          <div className={`h-2.5 w-2.5 rounded-full ${formStep >= 0 ? 'bg-btc-electric-blue' : 'bg-gray-200'}`}></div>
          <div className={`h-2.5 w-2.5 rounded-full ${formStep >= 1 ? 'bg-btc-electric-blue' : 'bg-gray-200'}`}></div>
          <div className={`h-2.5 w-2.5 rounded-full ${formStep >= 2 ? 'bg-btc-electric-blue' : 'bg-gray-200'}`}></div>
        </div>
      </div>

      <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
        {renderFormStep()}
        
        <div className="text-center text-sm text-gray-500 mt-4">
          By registering, you agree to our Terms and Privacy Policy
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
