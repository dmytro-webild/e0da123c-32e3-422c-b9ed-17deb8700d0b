import FooterSimpleMedia from '@/components/sections/footer/FooterSimpleMedia';
import NavbarFloatingLogo from '@/components/ui/NavbarFloatingLogo';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";
import { Send, Instagram, Phone, Mail, MapPin, ExternalLink } from "lucide-react";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#hero"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Services",
    "href": "#services"
  },
  {
    "name": "Team",
    "href": "#team"
  },
  {
    "name": "Partners",
    "href": "#partners"
  },
  {
    "name": "Contact",
    "href": "#contact"
  },
  {
    "name": "Features",
    "href": "#features"
  }
];

  return (
    <StyleProvider buttonVariant="default" siteBackground="noise" heroBackground="gradientBars">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarFloatingLogo
      logo="United Team"
      logoImageSrc="https://storage.googleapis.com/webild/users/user_3GRpdvQoJFjolu5kC3kYNdQAvbt/uploaded-1783951383443-xwfo2dy8.png"
      ctaButton={{
        text: "Contact Us",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <footer className="bg-[#0B0F19] py-16 border-t border-white/5">
          <div className="w-content-width mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
            {/* Brand & Social */}
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white">RFA Dispatching Team</h3>
              <p className="text-accent text-sm leading-relaxed">
                Premium dispatch services for carriers and drivers across the United States.
              </p>
              <div className="flex gap-4 pt-2">
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent hover:bg-white/10 hover:text-white transition-colors">
                  <Send className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent hover:bg-white/10 hover:text-white transition-colors">
                  <Instagram className="w-4 h-4" />
                </a>
                <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-accent hover:bg-white/10 hover:text-white transition-colors">
                  <Phone className="w-4 h-4" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold text-white/70 tracking-wider mb-6 uppercase">Quick Links</h4>
              <ul className="space-y-4">
                <li><a href="#hero" className="text-accent hover:text-white transition-colors">Home</a></li>
                <li><a href="#about" className="text-accent hover:text-white transition-colors">About</a></li>
                <li><a href="#services" className="text-accent hover:text-white transition-colors">What we do</a></li>
                <li><a href="#partners" className="text-accent hover:text-white transition-colors">Carrier</a></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="text-sm font-semibold text-white/70 tracking-wider mb-6 uppercase">Contact</h4>
              <ul className="space-y-6">
                <li className="flex items-start gap-3">
                  <span className="text-white font-medium mt-0.5">UZ</span>
                  <span className="text-accent">+998 99 479 11 00</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-white font-medium mt-0.5">US</span>
                  <span className="text-accent">+1 (562) 371 0006</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <a href="mailto:rustamamonov624@gmail.com" className="text-accent hover:text-white transition-colors">rustamamonov624@gmail.com</a>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                  <span className="text-accent">Nest One Business Center<br/>Tashkent, Uzbekistan</span>
                </li>
              </ul>
            </div>

            {/* Office Map */}
            <div>
              <h4 className="text-sm font-semibold text-white/70 tracking-wider mb-6 uppercase">Office</h4>
              <div className="relative rounded-xl overflow-hidden h-48 bg-white/5 border border-white/10 group">
                <img 
                  src="https://storage.googleapis.com/webild/users/user_3GRpdvQoJFjolu5kC3kYNdQAvbt/uploaded-1783955251392-sk2d9kuq.png" 
                  alt="Map location" 
                  className="w-full h-full object-cover opacity-50 group-hover:opacity-70 transition-opacity"
                />
                <a href="#" className="absolute top-4 left-4 bg-[#1a2332] text-blue-400 px-4 py-2 rounded-lg text-sm font-medium flex items-center gap-2 hover:bg-[#232f42] transition-colors border border-white/5">
                  Open in Maps
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </footer>
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
