import React from "react";

/*  SVG Icons */
const FacebookIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M22 12.07C22 6.48 17.52 2 12 2S2 6.48 2 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.54V9.41c0-2.5 1.49-3.88 3.77-3.88 1.09 0 2.23.2 2.23.2v2.45h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.77l-.44 2.91h-2.33V22c4.78-.75 8.44-4.91 8.44-9.93z" />
  </svg>
);

const InstagramIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 
    0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm5 5a5 5 0 110 10 
    5 5 0 010-10zm6.5-.88a1.12 1.12 0 110 2.24 
    1.12 1.12 0 010-2.24zM12 9a3 3 0 100 6 
    3 3 0 000-6z" />
  </svg>
);

const XIcon = ({ size = 18 }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.244 2H21l-6.56 7.5L22 22h-6.828l-5.34-6.99L3.5 
    22H1l7.06-8.06L2 2h6.828l4.84 6.32L18.244 2zm-2.4 
    18h1.9L8.24 4H6.2l9.644 16z" />
  </svg>
);

/*  Footer Component */
const Footer = () => {
  return (
    <footer className="bg-[#0b0d13] text-white pt-14 pb-6" id="footer">
      <div className="max-w-6xl mx-auto px-5">
        
        {/* Top */}
        <div className="flex flex-col lg:flex-row justify-between gap-10 border-b border-white/10 pb-10">
          
          {/* Brand */}
          <div className="max-w-xs">
            <h2 className="text-2xl font-bold mb-2">DigiTools</h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Smart digital solutions to simplify your workflow. Build and manage everything easily.
            </p>
          </div>

          {/* Links */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 text-sm">
            
            <div>
              <h4 className="font-semibold mb-3">Tools</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Features</a></li>
                <li><a href="#" className="hover:text-white">Pricing</a></li>
                <li><a href="#" className="hover:text-white">Templates</a></li>
                <li><a href="#" className="hover:text-white">Updates</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Company</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">About</a></li>
                <li><a href="#" className="hover:text-white">Careers</a></li>
                <li><a href="#" className="hover:text-white">Blog</a></li>
                <li><a href="#" className="hover:text-white">Press</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-semibold mb-3">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Docs</a></li>
                <li><a href="#" className="hover:text-white">Help Center</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Community</a></li>
              </ul>
            </div>

            {/* Social */}
            <div>
              <h4 className="font-semibold mb-3">Connect</h4>
              <div className="flex gap-3">
                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                  <InstagramIcon size={16} />
                </a>
                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                  <FacebookIcon size={16} />
                </a>
                <a href="#" className="w-9 h-9 flex items-center justify-center rounded-full bg-white/10 hover:bg-white/20 transition">
                  <XIcon size={16} />
                </a>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-3 pt-6 text-xs md:text-sm text-gray-500">
          <p>© 2026 DigiTools. All rights reserved.</p>

          <div className="flex gap-5">
            <a href="#" className="hover:text-white">Privacy</a>
            <a href="#" className="hover:text-white">Terms</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;