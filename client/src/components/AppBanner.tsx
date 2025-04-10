import { useState } from "react";
import { Button } from "@/components/ui/button";
import { X, Smartphone } from "lucide-react";

const AppBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const closeBanner = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-secondary text-white p-4 shadow-lg z-40">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex items-center">
          <Smartphone className="h-6 w-6 mr-3" />
          <div>
            <p className="font-bold font-poppins">Get the OmiFoods App</p>
            <p className="text-sm opacity-80">Order faster and earn rewards</p>
          </div>
        </div>
        <div className="flex items-center space-x-3">
          <Button className="bg-white text-secondary hover:bg-opacity-90 px-4 py-2 rounded-lg text-sm font-medium">
            Download Now
          </Button>
          <Button variant="ghost" size="icon" onClick={closeBanner} aria-label="Close banner">
            <X className="h-4 w-4 text-white opacity-80 hover:opacity-100" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AppBanner;
