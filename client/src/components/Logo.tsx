import { COMPANY_NAME } from "@/lib/constants";
import logoPath from "@assets/WhatsApp Image 2025-02-02 at 18.47.48.jpeg";

interface LogoProps {
  showText?: boolean;
}

const Logo = ({ showText = true }: LogoProps) => {
  return (
    <div className="flex items-center gap-2">
      <div className="h-10 w-10 overflow-hidden rounded-full">
        <img 
          src={logoPath} 
          alt={`${COMPANY_NAME} logo`} 
          className="h-full w-full object-cover"
        />
      </div>
      {showText && (
        <span className="font-bold text-xl text-primary">
          {COMPANY_NAME}
        </span>
      )}
    </div>
  );
};

export default Logo;