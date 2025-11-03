import React from 'react';

// Data structure to hold the navigation links
const footerSections = [
    { 
        title: "Shop and Learn", 
        links: ["Store", "Mac", "iPad", "iPhone", "Watch", "AirPods", "TV & Home", "AirTag", "Accessories", "Gift Cards"] 
    },
    { 
        title: "Account", 
        links: ["Manage Your Apple Account", "Apple Store Account", "iCloud.com"] 
    },
    { 
        title: "Apple Store", 
        links: ["Find a Store", "Genius Bar", "Today at Apple", "Group Reservations", "Apple Camp", "Apple Trade In", "Ways to Buy", "Recycling Programme", "Order Status", "Shopping Help"] 
    },
    { 
        title: "For Business", 
        links: ["Apple and Business", "Shop for Business"] 
    },
    { 
        title: "Apple Values", 
        links: ["Accessibility", "Education", "Environment", "Privacy", "Supply Chain Innovation"] 
    },
    { 
        title: "For Education", 
        links: ["Apple and Education", "Shop for Education", "Shop for University"] 
    },
    { 
        title: "For Healthcare", 
        links: ["Apple and Healthcare"] 
    },
    { 
        title: "For Government", 
        links: ["Apple and Government"] 
    },
    { 
        title: "About Apple", 
        links: ["Newsroom", "Apple Leadership", "Career Opportunities", "Investors", "Ethics & Compliance", "Events", "Contact Apple"] 
    },
    { 
        title: "Apple Wallet", 
        links: ["Wallet"] 
    },
];

const Footer = () => {
  return (
    <footer className="bg-gray-50 text-gray-700 text-xs py-8 px-4 md:px-10">
      <div className="max-w-7xl mx-auto mb-6 border-b border-gray-300 pb-6">
        <p className="mb-2">
          Testing conducted by Apple in July 2025 using AirPods Pro 3 paired with iPhone 16 with pre-release AirPods firmware and iOS 26. Noise reduction was tested in accordance with IEC 60268-24. Comparison made against the best-selling wireless in-ear headphones commercially available at the time of testing. Performance depends on device settings, environment and many other factors.
        </p>
        <p className="mb-2">A subscription is required for Apple TV+.</p>
        <p>Features are subject to change. Some features, applications and services may not be available in all regions or all languages.</p>
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-5 gap-y-6 md:gap-x-4">
        {footerSections.map((section, index) => (
          <div key={index} className={
            index === 0 ? "col-span-1" :
            index === 1 ? "col-span-1 md:row-start-1 md:col-start-2" :
            index === 3 ? "col-span-1 md:row-start-1 md:col-start-4" :
            index === 5 ? "col-span-1 md:row-start-2 md:col-start-4" :
            index === 8 ? "col-span-1 md:row-start-1 md:col-start-5" :
            "col-span-1"
          }>
            <SectionLinks title={section.title} links={section.links} />
          </div>
        ))}
      </div>
    
      <div className="max-w-7xl mx-auto mt-6 pt-4 border-t border-gray-300">
      </div>
    </footer>
  );
};

const SectionLinks = ({ title, links }) => {
  return (
    <div className="space-y-1">
      <h3 className="font-semibold text-gray-900 mb-1">{title}</h3>
      {links.map((link, index) => (
        <a 
          key={index} 
          href="#" 
          className="block text-gray-700 hover:text-gray-900 transition duration-150"
        >
          {link}
        </a>
      ))}
    </div>
  );
};

export default Footer;