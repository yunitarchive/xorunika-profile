import { Linkedin, Instagram, Twitter } from "lucide-react";

interface SocialLink {
  label: string;
  url: string;
}

const katalogSocialLinks: SocialLink[] = [
  {
    label: "Linkedin",
    url: "https://in.linkedin.com"
  },
  {
    label: "Instagram",
    url: "https://www.instagram.com"
  },
  {
    label: "Twitter",
    url: "https://x.com/"
  }
];

const Footer = () => {
  const getSocialIcon = (label: string) => {
    const iconProps = {
      size: 20,
      className: "text-lightGreen hover:text-lightTeal transition-colors duration-200"
    };

    switch (label.toLowerCase()) {
      case "linkedin":
        return <Linkedin {...iconProps} />;
      case "instagram":
        return <Instagram {...iconProps} />;
      case "twitter":
        return <Twitter {...iconProps} />;
      default:
        return null;
    }
  };

  return (
    <footer className="flex flex-col md:flex-row justify-between items-center p-4 px-8 bg-primary gap-4">
      <div className="flex items-center">
        <p className="text-lightGreen">
          Build with <span className="animate-pulse">⚡</span>
        </p>
      </div>
      
      <div className="flex items-center gap-6">
        {katalogSocialLinks.map((link, index) => (
          <a
            key={index}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:transform hover:scale-110 transition-transform duration-200"
            aria-label={link.label}
          >
            {getSocialIcon(link.label)}
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;