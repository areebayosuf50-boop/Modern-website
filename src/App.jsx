import React, { useState, useEffect, useMemo } from 'react';

// Inline replacement icons to eliminate lucide-react dependency
const SunIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364-6.364l-.707.707M6.343 17.657l-.707.707m0-12.728l.707.707m11.314 11.314l.707.707M12 8a4 4 0 100 8 4 4 0 000-8z" />
  </svg>
);

const MoonIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z" />
  </svg>
);

const MenuIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const XIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
  </svg>
);

const ArrowRightIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M14 5l7 7m0 0l-7 7m7-7H3" />
  </svg>
);

const CheckCircleIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

const MailIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const PhoneIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
  </svg>
);

const MapPinIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

const SendIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
  </svg>
);

const ExternalLinkIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

const ChevronLeftIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRightIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
  </svg>
);

const StarIcon = ({ className }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

const CodeIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
  </svg>
);

const PaletteIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9 9-4.03 9-9c0-.46-.04-.92-.1-1.36-.08-.55-.54-.96-1.1-.96h-1.68c-.61 0-1.13-.39-1.32-.97-.24-.7-.91-1.21-1.71-1.21H12c-.55 0-1-.45-1-1V4.8c0-.62-.48-1.13-1.09-1.18C9.6 3.55 9.3 3 9 3H7zm1 4a1 1 0 110-2 1 1 0 010 2zm-4 4a1 1 0 110-2 1 1 0 010 2zm1.5 4a1 1 0 100-2 1 1 0 000 2zm4.5 0a1 1 0 100-2 1 1 0 000 2z" />
  </svg>
);

const ShieldIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
  </svg>
);

const AwardIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M12 8c1.657 0 3-1.343 3-3S13.657 2 12 2 9 3.343 9 5s1.343 3 3 3zm0 0v10m0 0a4 4 0 01-4-4m4 4a4 4 0 004-4" />
  </svg>
);

const SparklesIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L18 12l-6.857 2.286L9 21l-2.286-6.857L0 12l6.857-2.286L9 3z" />
  </svg>
);

const CheckIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
  </svg>
);

const GlobeIcon = ({ className }) => (
  <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
    <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
  </svg>
);

// High quality placeholder mock data for portfolio items
const PORTFOLIO_ITEMS = [
  {
    id: 1,
    title: "E-Commerce Re-architecture",
    category: "web",
    desc: "A headless commerce engine powered by React and modern API designs, boasting 350ms loading times.",
    img: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&auto=format&fit=crop&q=80",
    client: "StoreFront Inc.",
    date: "Jan 2026",
    tags: ["React", "Tailwind", "NextJS", "GraphQL"]
  },
  {
    id: 2,
    title: "Fintech Mobile Wallet",
    category: "mobile",
    desc: "Secure mobile banking and micro-lending solution with biometric authentication and real-time transaction graphs.",
    img: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&auto=format&fit=crop&q=80",
    client: "ApexCapital",
    date: "Mar 2026",
    tags: ["React Native", "TypeScript", "Node.js", "Redis"]
  },
  {
    id: 3,
    title: "SaaS Analytics Dashboard",
    category: "design",
    desc: "A UX refresh of a complex enterprise analytics portal, focusing on data density, modern charting, and clarity.",
    img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&auto=format&fit=crop&q=80",
    client: "DataStream Corp",
    date: "Nov 2025",
    tags: ["Figma", "Design System", "Prototyping", "User Testing"]
  },
  {
    id: 4,
    title: "SaaS Landing Page System",
    category: "web",
    desc: "Dynamic marketing framework with high accessibility score and visual optimization for search marketing.",
    img: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=600&auto=format&fit=crop&q=80",
    client: "CloudSync Ltd",
    date: "Feb 2026",
    tags: ["React", "Framer Engine", "Tailwind CSS"]
  },
  {
    id: 5,
    title: "Health Tech Patient Tracker",
    category: "mobile",
    desc: "Patient care coordination app supporting telemetry integration and real-time clinical alerts.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&auto=format&fit=crop&q=80",
    client: "MediLife Solutions",
    date: "Dec 2025",
    tags: ["SwiftUI", "Kotlin", "React Native", "HIPAA"]
  },
  {
    id: 6,
    title: "Smart Home UI System",
    category: "design",
    desc: "Interactive wall-tablet dashboard and watch interfaces controlling localized smart arrays and grid efficiency.",
    img: "https://images.unsplash.com/photo-1558002038-1055907df827?w=600&auto=format&fit=crop&q=80",
    client: "Nexis Home",
    date: "Oct 2025",
    tags: ["UI/UX", "Material Spec", "Figma", "Microinteractions"]
  }
];

// Curated professional Testimonials
const TESTIMONIALS = [
  {
    id: 1,
    name: "Sarah Jenkins",
    role: "VP of Product at StoreFront",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop&q=80",
    quote: "Working with this team was an absolute game-changer for our platform. They brought high technical expertise combined with stellar aesthetic sensibilities. Our metrics jumped by 40% immediately following launch.",
    stars: 5
  },
  {
    id: 2,
    name: "Marcus Chen",
    role: "Engineering Director at ApexCapital",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&auto=format&fit=crop&q=80",
    quote: "The team's execution was spotless. They understood the complexities of a regulated financial framework and produced an interface that is beautiful, secure, and intuitive. Highly recommended.",
    stars: 5
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Creative Director at DesignStudio",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&auto=format&fit=crop&q=80",
    quote: "Their responsiveness, dedication, and attention to detail during the design system alignment phase saved us weeks of redundant development. True professionals of the highest order.",
    stars: 5
  }
];

// Comprehensive corporate services
const SERVICES = [
  {
    id: 1,
    icon: CodeIcon,
    title: "Full-Stack Web Development",
    desc: "Engineering highly scalable, SEO-optimized, and lightning-fast web architectures utilizing React, Next.js, Node.js, and serverless technology structures.",
    features: ["Responsive Architecture", "Headless CMS Integrations", "Optimized Web Vitals", "Custom API Orchestration"]
  },
  {
    id: 2,
    icon: PaletteIcon,
    title: "Premium UI/UX Design",
    desc: "Crafting modern design systems and interfaces with a heavy focus on user empathy, accessibility (WCAG), and premium visual interactions.",
    features: ["Interactive Prototyping", "User Research & Auditing", "Component Design Systems", "Visual Brand Systems"]
  },
  {
    id: 3,
    icon: GlobeIcon,
    title: "Cross-Platform Mobile Apps",
    desc: "Publishing unified applications to both iOS and Android natively using React Native, reducing time-to-market while keeping high fidelity.",
    features: ["Single Codebase Efficiency", "Offline-First Strategies", "Push Notification Hubs", "Native Device Integrations"]
  },
  {
    id: 4,
    icon: ShieldIcon,
    title: "Optimization & Security Audits",
    desc: "Strengthening current digital architectures to eliminate security bottlenecks, optimize SQL pipelines, and skyrocket cumulative layout shifts.",
    features: ["Deep Network Profiling", "Vulnerability Auditing", "Automated Performance Tests", "React Render-Cycle Squashing"]
  }
];

// Elegant Toast alert replacement
const CustomToast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(onClose, 5000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className={`fixed bottom-5 right-5 z-50 flex items-center gap-3 px-5 py-4 rounded-xl shadow-2xl transition-all duration-300 transform translate-y-0 border text-sm max-w-sm ${
      type === 'success' 
        ? 'bg-emerald-50 text-emerald-900 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-50 dark:border-emerald-850' 
        : 'bg-rose-50 text-rose-900 border-rose-200 dark:bg-rose-950 dark:text-rose-50 dark:border-rose-850'
    }`}>
      {type === 'success' ? (
        <CheckCircleIcon className="h-5 w-5 text-emerald-500 shrink-0" />
      ) : (
        <XIcon className="h-5 w-5 text-rose-500 shrink-0" />
      )}
      <p className="font-medium">{message}</p>
      <button onClick={onClose} className="ml-auto hover:opacity-75 transition-opacity">
        <XIcon className="h-4 w-4" />
      </button>
    </div>
  );
};

export default function App() {
  // Theme state: default to 'light' (with toggler support)
  const [theme, setTheme] = useState('light');
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [toast, setToast] = useState(null);

  // Smooth-scroll tracking & updating active nav links based on position
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'portfolio', 'testimonials', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Theme effect toggler
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type });
  };

  const handleSmoothScroll = (e, targetId) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className={`min-h-screen font-sans transition-colors duration-300 ${
      theme === 'dark' ? 'bg-[#0b0f19] text-slate-100' : 'bg-[#fafcfe] text-slate-800'
    }`}>
      {/* Dynamic Toast Element */}
      {toast && (
        <CustomToast 
          message={toast.message} 
          type={toast.type} 
          onClose={() => setToast(null)} 
        />
      )}

      {/* STICKY HEADER NAVIGATION */}
      <Header 
        theme={theme} 
        toggleTheme={toggleTheme} 
        activeSection={activeSection} 
        handleSmoothScroll={handleSmoothScroll}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />

      {/* HERO SECTION */}
      <Hero theme={theme} handleSmoothScroll={handleSmoothScroll} />

      {/* ABOUT SECTION */}
      <About theme={theme} />

      {/* SERVICES SECTION */}
      <Services theme={theme} />

      {/* PORTFOLIO SECTION */}
      <Portfolio theme={theme} showToast={showToast} />

      {/* TESTIMONIALS SECTION */}
      <Testimonials theme={theme} />

      {/* CONTACT SECTION */}
      <Contact theme={theme} showToast={showToast} />

      {/* FOOTER SECTION */}
      <Footer handleSmoothScroll={handleSmoothScroll} />
    </div>
  );
}

function Header({ theme, toggleTheme, activeSection, handleSmoothScroll, isMobileMenuOpen, setIsMobileMenuOpen }) {
  const navLinks = [
    { label: 'Home', id: 'home' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Portfolio', id: 'portfolio' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 backdrop-blur-md border-b ${
      theme === 'dark' 
        ? 'bg-[#0b0f19]/95 border-slate-850 shadow-md shadow-slate-950/20' 
        : 'bg-white/95 border-slate-100 shadow-md shadow-slate-100/30'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo with Gradient Text (Violet to Cyan) */}
          <div className="flex-shrink-0 flex items-center gap-2">
            <span className="h-10 w-10 rounded-xl bg-gradient-to-tr from-violet-600 to-cyan-500 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-violet-500/20">
              N
            </span>
            <span className="font-extrabold text-xl tracking-tight bg-gradient-to-r from-violet-600 via-cyan-500 to-violet-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-cyan-400 dark:to-cyan-300">
              NEXUS
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeSection === link.id
                    ? 'text-violet-600 dark:text-cyan-400 bg-violet-50/50 dark:bg-slate-900 font-bold'
                    : 'text-slate-600 hover:text-violet-600 dark:text-slate-300 dark:hover:text-cyan-400 hover:bg-slate-50 dark:hover:bg-slate-800/30'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Theme Switcher & Actions & CTA button */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className={`p-2.5 rounded-xl border transition-all duration-300 ${
                theme === 'dark'
                  ? 'border-slate-800 bg-slate-900/50 text-amber-400 hover:bg-slate-800 hover:text-amber-300'
                  : 'border-slate-200 bg-slate-50 text-violet-600 hover:bg-slate-100'
              }`}
              title={theme === 'dark' ? "Switch to Light Mode" : "Switch to Dark Mode"}
            >
              {theme === 'dark' ? <SunIcon className="h-5 w-5 animate-pulse" /> : <MoonIcon className="h-5 w-5" />}
            </button>
            
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-xl text-sm font-semibold text-white bg-violet-600 hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600 shadow-md shadow-violet-500/10 hover:shadow-lg hover:shadow-violet-500/25 active:scale-95 transition-all duration-300"
            >
              Hire Us
            </a>
          </div>

          {/* Mobile Menu & Theme Toggles */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className={`p-2 rounded-lg border transition-all duration-300 ${
                theme === 'dark' ? 'border-slate-800 text-amber-400' : 'border-slate-200 text-violet-600'
              }`}
            >
              {theme === 'dark' ? <SunIcon className="h-5 w-5" /> : <MoonIcon className="h-5 w-5" />}
            </button>

            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`p-2 rounded-lg border focus:outline-none transition-all duration-300 ${
                theme === 'dark' ? 'border-slate-800 text-slate-200 hover:bg-slate-800' : 'border-slate-200 text-slate-800 hover:bg-slate-50'
              }`}
            >
              {isMobileMenuOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* MOBILE DRAWER */}
      {isMobileMenuOpen && (
        <div className={`md:hidden px-4 pt-2 pb-6 border-b transition-all duration-300 ${
          theme === 'dark' ? 'bg-[#0b0f19] border-slate-800' : 'bg-white border-slate-100'
        }`}>
          <div className="space-y-1.5">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={`#${link.id}`}
                onClick={(e) => handleSmoothScroll(e, link.id)}
                className={`block px-4 py-3 rounded-xl text-base font-semibold transition-all duration-200 ${
                  activeSection === link.id
                    ? 'text-violet-600 dark:text-cyan-400 bg-violet-50/50 dark:bg-slate-900 font-bold'
                    : 'text-slate-600 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <div className="mt-4 pt-4 border-t border-slate-200 dark:border-slate-800">
            <a
              href="#contact"
              onClick={(e) => handleSmoothScroll(e, 'contact')}
              className="block w-full text-center px-4 py-3 rounded-xl text-base font-semibold text-white bg-violet-600 hover:bg-violet-700 dark:bg-violet-500 text-center shadow-lg transition-colors"
            >
              Hire Us
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}

function Hero({ theme, handleSmoothScroll }) {
  return (
    <section id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-36 overflow-hidden">
      
      {/* Dynamic Ambient Blur Background Elements */}
      <div className="absolute top-1/4 left-1/10 w-72 h-72 rounded-full bg-violet-500/10 dark:bg-violet-500/5 blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/10 w-96 h-96 rounded-full bg-cyan-500/10 dark:bg-cyan-500/5 blur-3xl pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Hero Pitch */}
          <div className="lg:col-span-7 text-left space-y-6">
            
            {/* Tagline / Indicator */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-violet-200 bg-violet-50/60 dark:bg-slate-900 dark:border-violet-850/80">
              <SparklesIcon className="h-4 w-4 text-violet-600 dark:text-cyan-400 animate-pulse" />
              <span className="text-xs font-semibold uppercase tracking-wider text-violet-700 dark:text-cyan-300">
                Pioneering Digital Architectures
              </span>
            </div>

            {/* Main Punchy Typography */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1]">
              <span className="block text-slate-900 dark:text-white">
                We Engineer
              </span>
              <span className="block mt-1 bg-gradient-to-r from-violet-600 via-cyan-500 to-violet-500 bg-clip-text text-transparent dark:from-violet-400 dark:via-cyan-400 dark:to-cyan-300">
                High-Impact Systems
              </span>
              <span className="block text-slate-900 dark:text-white">
                for Tomorrow's Tech.
              </span>
            </h1>

            {/* Friendly Subheading */}
            <p className="max-w-xl text-lg sm:text-xl text-slate-600 dark:text-slate-400 leading-relaxed font-light">
              Nexus is an elite engineering and design consultancy. We combine technical rigor with deep user empathy to build software systems that elevate market positions.
            </p>

            {/* Micro-Features Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm pt-2">
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-violet-100 dark:bg-slate-900 flex items-center justify-center">
                  <CheckIcon className="h-3 w-3 text-violet-600 dark:text-cyan-400" />
                </div>
                <span className="font-semibold text-slate-700 dark:text-slate-300">100% Mobile Fluidity</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-violet-100 dark:bg-slate-900 flex items-center justify-center">
                  <CheckIcon className="h-3 w-3 text-violet-600 dark:text-cyan-400" />
                </div>
                <span className="font-semibold text-slate-700 dark:text-slate-300">Dark Mode Ready out-of-box</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-violet-100 dark:bg-slate-900 flex items-center justify-center">
                  <CheckIcon className="h-3 w-3 text-violet-600 dark:text-cyan-400" />
                </div>
                <span className="font-semibold text-slate-700 dark:text-slate-300">Optimized SEO Architecture</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="h-5 w-5 rounded-full bg-violet-100 dark:bg-slate-900 flex items-center justify-center">
                  <CheckIcon className="h-3 w-3 text-violet-600 dark:text-cyan-400" />
                </div>
                <span className="font-semibold text-slate-700 dark:text-slate-300">Clean, Modular Codebase</span>
              </div>
            </div>

            {/* Interactive Call to Action buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <a
                href="#portfolio"
                onClick={(e) => handleSmoothScroll(e, 'portfolio')}
                className="inline-flex items-center justify-center px-8 py-4 rounded-2xl text-base font-semibold text-white bg-violet-600 hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600 shadow-xl shadow-violet-600/10 hover:shadow-violet-600/25 active:scale-95 transition-all duration-300 group"
              >
                Explore Work
                <ArrowRightIcon className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
              </a>

              <a
                href="#contact"
                onClick={(e) => handleSmoothScroll(e, 'contact')}
                className={`inline-flex items-center justify-center px-8 py-4 rounded-2xl text-base font-semibold border transition-all duration-300 ${
                  theme === 'dark'
                    ? 'border-slate-800 bg-slate-900/50 hover:bg-slate-800/80 text-slate-200 hover:text-white'
                    : 'border-slate-200 bg-white hover:bg-slate-50 text-slate-700 hover:text-slate-900 shadow-sm'
                }`}
              >
                Schedule Consultation
              </a>
            </div>

          </div>

          {/* Right Hero Graphics Simulation */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-[420px] aspect-square rounded-[2rem] bg-gradient-to-tr from-violet-500/20 via-cyan-500/10 to-emerald-500/5 p-4 border border-violet-100/30 dark:border-violet-500/10 shadow-2xl">
              
              {/* Center Main Frame Mockup */}
              <div className="h-full w-full rounded-[1.7rem] bg-slate-900/90 dark:bg-slate-950 border border-slate-800 flex flex-col overflow-hidden relative shadow-inner">
                {/* Simulated UI Window Bar */}
                <div className="bg-slate-900 border-b border-slate-800 px-4 py-3 flex items-center gap-2">
                  <div className="h-3.5 w-3.5 rounded-full bg-rose-500" />
                  <div className="h-3.5 w-3.5 rounded-full bg-amber-500" />
                  <div className="h-3.5 w-3.5 rounded-full bg-emerald-500" />
                  <div className="h-4 w-40 ml-2 rounded bg-slate-800 flex items-center justify-center text-[10px] text-slate-500">
                    nexus-architecture-core.js
                  </div>
                </div>

                {/* Simulated Terminal / Code editor */}
                <div className="p-5 flex-1 font-mono text-xs text-slate-400 space-y-3 overflow-y-auto leading-relaxed">
                  <p className="text-cyan-400 font-bold">// Initializing main service loop...</p>
                  <p className="text-slate-500">import <span className="text-violet-400">{"{ optimizePerformance }"}</span> from <span className="text-cyan-300">"nexus-core"</span>;</p>
                  
                  <div className="bg-slate-800/50 p-3 rounded-lg border border-slate-700/50 text-slate-300 space-y-1">
                    <p className="text-[11px]"><span className="text-violet-400">const</span> config = <span className="text-amber-300">{"{"}</span></p>
                    <p className="pl-4 text-[11px]">framework: <span className="text-cyan-300">"React 19"</span>,</p>
                    <p className="pl-4 text-[11px]">responsive: <span className="text-violet-400">true</span>,</p>
                    <p className="pl-4 text-[11px]">darkMode: <span className="text-cyan-400">"Class/Context"</span>,</p>
                    <p className="pl-4 text-[11px]">accessibility: <span className="text-violet-300">"WCAG 2.2 AA"</span></p>
                    <p className="text-[11px]"><span className="text-amber-300">{"}"}</span>;</p>
                  </div>
                  
                  <p className="text-slate-500">const clientStatus = "ONLINE_READY";</p>
                  <p className="text-cyan-400 font-semibold animate-pulse">✓ System optimized inside 200ms!</p>
                </div>
              </div>

              {/* Floating Decorative Badges */}
              <div className="absolute -top-4 -right-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 shadow-xl flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-cyan-100 dark:bg-slate-800 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
                  <AwardIcon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white">Top Developer</h4>
                  <p className="text-[10px] text-slate-500">2026 Honors</p>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 p-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 shadow-xl flex items-center gap-3">
                <div className="h-10 w-10 rounded-xl bg-emerald-100 dark:bg-slate-800 flex items-center justify-center text-emerald-600 dark:text-emerald-400">
                  <CheckCircleIcon className="h-5 w-5" />
                </div>
                <div>
                  <h4 className="font-bold text-xs text-slate-900 dark:text-white">Active Deployments</h4>
                  <p className="text-[10px] text-slate-500">100% SLA uptime</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

function About({ theme }) {
  const [activeTab, setActiveTab] = useState('mission');

  const tabs = {
    mission: {
      title: "Our Mission",
      body: "We exist to remove obstacles between complex engineering requirements and intuitive design. Every business possesses incredible potential, but legacy platforms often restrict scaling capacity. Our mission is to engineer modular, clean, scalable code architecture that looks stunning and acts robustly.",
      features: [
        "Uncompromising standards on product velocity",
        "Design systems rooted in modern accessibility guidelines",
        "Empowerment of client tech teams through code hygiene"
      ]
    },
    values: {
      title: "Core Values",
      body: "Our principles shape our daily decisions and ensure the software we deliver lives up to enterprise expectations. We do not skip tests, ignore performance regressions, or choose aesthetics over raw usability.",
      features: [
        "Transparency: Clear, daily build reporting updates",
        "Rigor: Heavy automated regression checking",
        "Inclusivity: Design centered around varying accessibility speeds"
      ]
    },
    experience: {
      title: "Our Trajectory",
      body: "Over the years, our engineers and product managers have launched applications for pre-seed startups, non-profits, and multinational market leaders alike.",
      features: [
        "Over 80+ successful desktop & mobile app launches",
        "Global team operating asynchronously with pristine sync",
        "10+ design systems utilized by internal teams of 500+ developers"
      ]
    }
  };

  return (
    <section id="about" className={`py-20 lg:py-28 ${
      theme === 'dark' ? 'bg-[#101524]' : 'bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-cyan-400">
            About Our Firm
          </h4>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Engineering Precision, Inspired Design
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We are not just agency partners—we serve as an integrated tactical task force dedicated to coding stellar digital experiences.
          </p>
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Grid Column: Detailed Stats Info */}
          <div className="lg:col-span-5 space-y-6">
            <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
              We focus on metrics that impact bottom lines.
            </h3>
            <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
              Our workflows bypass design fluff to implement lightning-fast server configurations, performant UI/UX frameworks, and maintainable, clean component structures.
            </p>

            {/* Fast Stats Blocks */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <span className="block text-3xl font-extrabold text-violet-600 dark:text-cyan-400">80+</span>
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Launches Completed</span>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <span className="block text-3xl font-extrabold text-violet-600 dark:text-cyan-400">99.9%</span>
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Uptime Reliability</span>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <span className="block text-3xl font-extrabold text-violet-600 dark:text-cyan-400">20+</span>
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Global Creators</span>
              </div>
              <div className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 shadow-sm hover:shadow-md transition-shadow">
                <span className="block text-3xl font-extrabold text-violet-600 dark:text-cyan-400">4.9/5</span>
                <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider">Client Reviews</span>
              </div>
            </div>
          </div>

          {/* Right Grid Column: Tabbed Information Details */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-2xl shadow-xl overflow-hidden">
              
              {/* Tab Selector Headers */}
              <div className="flex border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40">
                {Object.keys(tabs).map((tabKey) => (
                  <button
                    key={tabKey}
                    onClick={() => setActiveTab(tabKey)}
                    className={`flex-1 py-4 text-center text-sm font-bold transition-all duration-300 border-b-2 capitalize ${
                      activeTab === tabKey
                        ? 'text-violet-600 dark:text-cyan-400 border-violet-600 dark:border-cyan-400 bg-white dark:bg-slate-900'
                        : 'text-slate-500 dark:text-slate-400 border-transparent hover:text-violet-600 dark:hover:text-cyan-400 hover:bg-slate-100/30 dark:hover:bg-slate-800/20'
                    }`}
                  >
                    {tabs[tabKey].title}
                  </button>
                ))}
              </div>

              {/* Tab Display Pane */}
              <div className="p-6 sm:p-8 space-y-6">
                <p className="text-slate-600 dark:text-slate-400 leading-relaxed text-base">
                  {tabs[activeTab].body}
                </p>

                {/* Bullet Features Checklist */}
                <div className="space-y-3 pt-2 border-t border-slate-100 dark:border-slate-800">
                  <h4 className="font-bold text-sm text-slate-800 dark:text-slate-200 uppercase tracking-wider">
                    Core Focus Points:
                  </h4>
                  {tabs[activeTab].features.map((feature, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <div className="h-5 w-5 rounded-full bg-violet-50 dark:bg-slate-850 flex items-center justify-center shrink-0 mt-0.5">
                        <CheckCircleIcon className="h-3.5 w-3.5 text-violet-600 dark:text-cyan-400" />
                      </div>
                      <span className="text-slate-700 dark:text-slate-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

function Services({ theme }) {
  return (
    <section id="services" className="py-20 lg:py-28 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-cyan-400">
            Our Offerings
          </h4>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            State-of-the-Art Solutions
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400">
            We deliver fully tailored systems that allow businesses to reach target goals.
          </p>
        </div>

        {/* Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((srv) => {
            const IconComponent = srv.icon;
            return (
              <div 
                key={srv.id}
                className="group p-6 sm:p-8 rounded-2xl border bg-white dark:bg-slate-900 border-slate-200/60 dark:border-slate-800 shadow-sm hover:shadow-xl hover:-translate-y-1 hover:border-violet-200 dark:hover:border-violet-800/80 transition-all duration-300 flex flex-col justify-between"
              >
                <div className="space-y-5">
                  
                  {/* Icon Block with animated colored background */}
                  <div className="h-14 w-14 rounded-2xl bg-violet-50 dark:bg-slate-850 flex items-center justify-center text-violet-600 dark:text-cyan-400 group-hover:bg-violet-600 group-hover:text-white transition-all duration-300 shadow-sm">
                    <IconComponent className="h-7 w-7 transition-transform duration-300 group-hover:scale-110" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-cyan-400 transition-colors duration-200">
                    {srv.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed font-light">
                    {srv.desc}
                  </p>

                  {/* Bullet features inside card */}
                  <div className="pt-3 border-t border-slate-100 dark:border-slate-800 space-y-2">
                    {srv.features.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs font-semibold text-slate-600 dark:text-slate-400">
                        <CheckIcon className="h-3.5 w-3.5 text-cyan-500" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                </div>

                <div className="pt-6">
                  <a
                    href="#contact"
                    className="inline-flex items-center text-xs font-bold uppercase tracking-wider text-violet-600 dark:text-cyan-400 group-hover:text-violet-700 dark:group-hover:text-cyan-300 hover:underline"
                  >
                    Consult on this service
                    <ArrowRightIcon className="ml-1.5 h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}

function Portfolio({ theme, showToast }) {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  // Memoized filter sorting
  const filteredItems = useMemo(() => {
    if (activeFilter === 'all') return PORTFOLIO_ITEMS;
    return PORTFOLIO_ITEMS.filter(item => item.category === activeFilter);
  }, [activeFilter]);

  return (
    <section id="portfolio" className={`py-20 lg:py-28 ${
      theme === 'dark' ? 'bg-[#101524]' : 'bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="text-left space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-cyan-400">
              Our Gallery
            </h4>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
              Pristine Technical Deployments
            </h2>
            <p className="max-w-xl text-sm sm:text-base text-slate-600 dark:text-slate-400">
              Take an interactive tour inside recently released apps that merge clean data streams with dynamic modern layouts.
            </p>
          </div>

          {/* Filtering Toggles */}
          <div className="flex flex-wrap items-center gap-2">
            {[
              { label: 'All Projects', value: 'all' },
              { label: 'Web Applications', value: 'web' },
              { label: 'Mobile Platforms', value: 'mobile' },
              { label: 'UI/UX Prototypes', value: 'design' }
            ].map((btn) => (
              <button
                key={btn.value}
                onClick={() => setActiveFilter(btn.value)}
                className={`px-4 py-2 rounded-xl text-xs font-bold tracking-wider transition-all duration-300 ${
                  activeFilter === btn.value
                    ? 'bg-violet-600 text-white shadow-md shadow-violet-600/15'
                    : 'bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-600 dark:text-slate-300 hover:border-slate-300 dark:hover:border-slate-700 hover:bg-slate-50 dark:hover:bg-slate-800/40'
                }`}
              >
                {btn.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Dynamic Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 transition-all duration-500">
          {filteredItems.map((project) => (
            <div 
              key={project.id}
              className="group bg-white dark:bg-slate-900 rounded-2xl border border-slate-200/60 dark:border-slate-800 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300"
            >
              
              {/* Image Frame with Overlay Hover */}
              <div className="relative aspect-[4/3] overflow-hidden bg-slate-100 dark:bg-slate-850">
                <img 
                  src={project.img} 
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                  loading="lazy"
                />
                
                {/* Visual Accent Layer Hover */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                  <button 
                    onClick={() => setSelectedProject(project)}
                    className="flex items-center justify-center gap-2 w-full py-3 rounded-xl bg-white text-slate-900 font-bold text-sm shadow-lg hover:bg-slate-50 active:scale-95 transition-all"
                  >
                    View Project Case Study
                    <ExternalLinkIcon className="h-4 w-4" />
                  </button>
                </div>

                {/* Tag Category Bubble */}
                <span className="absolute top-4 left-4 px-3.5 py-1.5 rounded-lg bg-slate-900/80 text-white font-bold text-[10px] uppercase tracking-wider backdrop-blur-sm">
                  {project.category}
                </span>
              </div>

              {/* Text Info Container */}
              <div className="p-6 space-y-4">
                <h3 className="font-bold text-lg text-slate-900 dark:text-white group-hover:text-violet-600 dark:group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-xs text-slate-500 dark:text-slate-400 line-clamp-2 leading-relaxed">
                  {project.desc}
                </p>

                {/* Tech Badges List */}
                <div className="flex flex-wrap gap-1.5 pt-2">
                  {project.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-[10px] font-bold px-2.5 py-1 rounded bg-slate-100 dark:bg-slate-850 text-slate-600 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Dynamic Lightbox Dialog Modal */}
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
            <div className="w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl overflow-hidden shadow-2xl border border-slate-200 dark:border-slate-800">
              
              <div className="relative aspect-[16/10] bg-slate-100 dark:bg-slate-850">
                <img src={selectedProject.img} alt={selectedProject.title} className="w-full h-full object-cover" />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2.5 rounded-full bg-slate-900/80 text-white hover:bg-slate-900 shadow-md backdrop-blur-sm transition-colors"
                >
                  <XIcon className="h-5 w-5" />
                </button>
              </div>

              <div className="p-6 sm:p-8 space-y-5">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <span className="text-xs font-extrabold uppercase tracking-wider text-violet-600 dark:text-cyan-400">
                      {selectedProject.category} deployment
                    </span>
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white mt-1">
                      {selectedProject.title}
                    </h3>
                  </div>
                  <button 
                    onClick={() => {
                      showToast(`Project inquiry for ${selectedProject.title} requested!`);
                      setSelectedProject(null);
                    }}
                    className="px-6 py-3 rounded-xl bg-violet-600 text-white font-bold text-sm shadow-lg hover:bg-violet-700 transition-colors"
                  >
                    Discuss Similar Project
                  </button>
                </div>

                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                  {selectedProject.desc} This deployment required high architectural coordination to align visual assets, state structures, and API feeds without introducing payload weight or screen lag.
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase">Client Account</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{selectedProject.client}</span>
                  </div>
                  <div>
                    <span className="block text-[10px] font-bold text-slate-400 uppercase">Release Date</span>
                    <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">{selectedProject.date}</span>
                  </div>
                  <div className="col-span-2 sm:col-span-1">
                    <span className="block text-[10px] font-bold text-slate-400 uppercase">Technologies Utilized</span>
                    <span className="text-xs font-semibold text-slate-800 dark:text-slate-200">{selectedProject.tags.join(', ')}</span>
                  </div>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}

function Testimonials({ theme }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prev => prev === 0 ? TESTIMONIALS.length - 1 : prev - 1);
  };

  const handleNext = () => {
    setCurrentIndex(prev => prev === TESTIMONIALS.length - 1 ? 0 : prev + 1);
  };

  const activeTestimonial = TESTIMONIALS[currentIndex];

  return (
    <section id="testimonials" className="py-20 lg:py-28 relative overflow-hidden">
      
      {/* Visual Accent BG */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-violet-500/5 dark:bg-violet-500/2 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
        
        {/* Header Block */}
        <div className="text-center mb-12 space-y-4">
          <h4 className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-cyan-400">
            Trust Indicators
          </h4>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
            Endorsed by Tech Authorities
          </h2>
        </div>

        {/* Carousel Container */}
        <div className="relative bg-white dark:bg-slate-900 rounded-3xl border border-slate-200/60 dark:border-slate-800 p-8 sm:p-12 shadow-xl">
          
          {/* Main Slide content */}
          <div className="space-y-6 text-center">
            
            {/* Stars Review Indicator */}
            <div className="flex justify-center gap-1">
              {[...Array(activeTestimonial.stars)].map((_, i) => (
                <StarIcon key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
              ))}
            </div>

            {/* Blockquote Quote content */}
            <blockquote className="text-lg sm:text-xl font-light text-slate-700 dark:text-slate-300 italic leading-relaxed">
              "{activeTestimonial.quote}"
            </blockquote>

            {/* Author details profile */}
            <div className="flex flex-col items-center gap-2 pt-4">
              <img 
                src={activeTestimonial.avatar} 
                alt={activeTestimonial.name}
                className="h-14 w-14 rounded-full border-2 border-violet-600 object-cover shadow-lg"
              />
              <div className="text-center">
                <h4 className="font-bold text-base text-slate-900 dark:text-white">
                  {activeTestimonial.name}
                </h4>
                <p className="text-xs font-semibold text-slate-500 dark:text-cyan-400 mt-0.5">
                  {activeTestimonial.role}
                </p>
              </div>
            </div>

          </div>

          {/* Manual Arrow Controls */}
          <div className="flex justify-between items-center mt-8 pt-6 border-t border-slate-100 dark:border-slate-800">
            
            {/* Carousel Index Page Dot indicators */}
            <div className="flex gap-2">
              {TESTIMONIALS.map((item, idx) => (
                <button
                  key={item.id}
                  onClick={() => setCurrentIndex(idx)}
                  className={`h-2.5 rounded-full transition-all duration-300 ${
                    currentIndex === idx ? 'w-8 bg-violet-600' : 'w-2.5 bg-slate-200 dark:bg-slate-800'
                  }`}
                  aria-label={`Slide target index ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex gap-2">
              <button
                onClick={handlePrev}
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeftIcon className="h-5 w-5" />
              </button>
              <button
                onClick={handleNext}
                className="p-3 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-50 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-300 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRightIcon className="h-5 w-5" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

function Contact({ theme, showToast }) {
  // Client state parameters
  const [formData, setFormData] = useState({ name: '', email: '', subject: 'consultation', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Verification handling logic
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear targeted error as user types
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    let tempErrors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!formData.name.trim()) tempErrors.name = "First/last name is required.";
    if (!formData.email.trim()) {
      tempErrors.email = "Email details are required.";
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Please supply a valid email format.";
    }
    if (!formData.message.trim()) {
      tempErrors.message = "Message text body is required.";
    } else if (formData.message.trim().length < 15) {
      tempErrors.message = "Message body must consist of at least 15 characters.";
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleFormSubmission = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      showToast("Please correct submission validation errors before sending.", "error");
      return;
    }

    setIsSubmitting(true);

    // Simulate reliable API server-ping
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      showToast("Thank you! Your consult inquiry was successfully received.");
      setFormData({ name: '', email: '', subject: 'consultation', message: '' });
    }, 1800);
  };

  return (
    <section id="contact" className={`py-20 lg:py-28 ${
      theme === 'dark' ? 'bg-[#101524]' : 'bg-slate-50'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Layout Column Separation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Contact coordinates */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-violet-600 dark:text-cyan-400">
                Contact Desk
              </h4>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
                Initiate Your Digital Ascent
              </h2>
              <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 leading-relaxed">
                Have an initiative or dynamic system that requires premium design, optimization audits, or complete cross-platform deployment? Contact us below.
              </p>
            </div>

            {/* Coordinate items */}
            <div className="space-y-4 pt-4">
              
              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-violet-50 dark:bg-slate-850 text-violet-600 dark:text-cyan-400 flex items-center justify-center shrink-0 shadow-sm">
                  <MailIcon className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Direct Email Desk</span>
                  <a href="mailto:inquiries@nexusengineering.com" className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-violet-600 dark:hover:text-cyan-400 hover:underline">
                    inquiries@nexusengineering.com
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-violet-50 dark:bg-slate-850 text-violet-600 dark:text-cyan-400 flex items-center justify-center shrink-0 shadow-sm">
                  <PhoneIcon className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Telephony Link</span>
                  <a href="tel:+15550198000" className="text-sm font-semibold text-slate-800 dark:text-slate-200 hover:text-violet-600 dark:hover:text-cyan-400 hover:underline">
                    +1 (555) 019-8000
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="h-12 w-12 rounded-xl bg-violet-50 dark:bg-slate-850 text-violet-600 dark:text-cyan-400 flex items-center justify-center shrink-0 shadow-sm">
                  <MapPinIcon className="h-5 w-5" />
                </div>
                <div>
                  <span className="block text-[10px] font-bold text-slate-400 uppercase tracking-wider">Operational Hub</span>
                  <span className="text-sm font-semibold text-slate-800 dark:text-slate-200">
                    600 Pine Street, San Francisco, CA 94108
                  </span>
                </div>
              </div>

            </div>

            {/* SLA response metric */}
            <div className="p-4 rounded-xl border border-violet-100 dark:border-violet-950 bg-violet-50/30 dark:bg-slate-900/40 text-xs text-violet-800 dark:text-cyan-300">
              <span className="font-bold uppercase tracking-wider block mb-1">Response Guarantee:</span>
              Nexus account leads review and supply consultation windows to inbound validation queries within exactly <strong className="font-extrabold text-violet-600 dark:text-cyan-400">4 business hours</strong>.
            </div>

          </div>

          {/* Right Column: Contact dynamic form */}
          <div className="lg:col-span-7">
            <div className="bg-white dark:bg-slate-900 border border-slate-200/60 dark:border-slate-800 rounded-2xl shadow-xl p-6 sm:p-8 relative overflow-hidden">
              
              {isSuccess ? (
                /* Success screen state */
                <div className="text-center py-12 space-y-6">
                  <div className="h-20 w-20 rounded-full bg-emerald-50 dark:bg-emerald-950 flex items-center justify-center mx-auto text-emerald-600 dark:text-emerald-400 shadow-lg">
                    <CheckCircleIcon className="h-10 w-10" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-2xl font-extrabold text-slate-900 dark:text-white">
                      Transmission Confirmed!
                    </h3>
                    <p className="max-w-md mx-auto text-sm text-slate-500 dark:text-slate-400">
                      We've dispatched your credentials and brief summary directly to our operations room. A technical coordinator will follow up shortly.
                    </p>
                  </div>
                  <button
                    onClick={() => setIsSuccess(false)}
                    className="inline-flex items-center justify-center px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm transition-colors"
                  >
                    Reset Form Space
                  </button>
                </div>
              ) : (
                /* Main interactive form layout */
                <form onSubmit={handleFormSubmission} className="space-y-6">
                  
                  {/* Name field */}
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                      Your Identity / Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all ${
                        errors.name 
                          ? 'border-rose-300 dark:border-rose-900 ring-1 ring-rose-300' 
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                      placeholder="e.g. Christopher Nolan"
                      disabled={isSubmitting}
                    />
                    {errors.name && (
                      <p className="text-xs text-rose-500 font-semibold">{errors.name}</p>
                    )}
                  </div>

                  {/* Email & Subject details Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    
                    <div className="space-y-2">
                      <label htmlFor="email" className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                        Secure Email address
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all ${
                          errors.email 
                            ? 'border-rose-300 dark:border-rose-900 ring-1 ring-rose-300' 
                            : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                        }`}
                        placeholder="e.g. christopher@nolan.com"
                        disabled={isSubmitting}
                      />
                      {errors.email && (
                        <p className="text-xs text-rose-500 font-semibold">{errors.email}</p>
                      )}
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="subject" className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                        Consult Category
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={formData.subject}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all cursor-pointer"
                        disabled={isSubmitting}
                      >
                        <option value="consultation">Full Scale Consulting</option>
                        <option value="development">Full-Stack Engineering</option>
                        <option value="uiux">System UI/UX Design</option>
                        <option value="optimization">Code Optimization / Audit</option>
                      </select>
                    </div>

                  </div>

                  {/* Message body field */}
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-xs font-bold text-slate-600 dark:text-slate-400 uppercase tracking-wider">
                      Operational Objectives Summary
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows="5"
                      value={formData.message}
                      onChange={handleInputChange}
                      className={`w-full px-4 py-3 rounded-xl border bg-slate-50 dark:bg-slate-950 text-sm focus:outline-none focus:ring-2 focus:ring-violet-500/50 transition-all ${
                        errors.message 
                          ? 'border-rose-300 dark:border-rose-900 ring-1 ring-rose-300' 
                          : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                      }`}
                      placeholder="Describe your timeline, structural obstacles, target platform configurations, and overall vision details..."
                      disabled={isSubmitting}
                    />
                    {errors.message && (
                      <p className="text-xs text-rose-500 font-semibold">{errors.message}</p>
                    )}
                  </div>

                  {/* Submission triggers */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl text-base font-bold text-white bg-violet-600 hover:bg-violet-700 dark:bg-violet-500 dark:hover:bg-violet-600 shadow-xl shadow-violet-600/15 hover:shadow-violet-600/35 active:scale-98 transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <span className="flex items-center gap-2">
                        {/* Inline loading spinner */}
                        <svg className="animate-spin h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                        Constructing Safe Pipeline...
                      </span>
                    ) : (
                      <>
                        Request Immediate Consultation
                        <SendIcon className="h-4.5 w-4.5" />
                      </>
                    )}
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

function Footer({ handleSmoothScroll }) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 text-slate-450 pt-16 pb-8 border-t border-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main upper footer grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          
          {/* Logo Brand summary col */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <span className="h-10 w-10 rounded-xl bg-violet-600 flex items-center justify-center text-white font-bold text-xl shadow-lg shadow-violet-500/20">
                N
              </span>
              <span className="font-extrabold text-xl tracking-tight text-white">
                NEXUS
              </span>
            </div>
            <p className="text-sm font-light leading-relaxed max-w-sm text-slate-400">
              Premium software consult and design agency delivering fully optimized architectures, secure multi-platform systems, and modern component systems.
            </p>
          </div>

          {/* Quicklinks col */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-bold text-xs text-slate-200 uppercase tracking-widest">
              Quick Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              {[
                { label: 'Home Screen', id: 'home' },
                { label: 'Our Mission & Stats', id: 'about' },
                { label: 'Services Catalogue', id: 'services' },
                { label: 'Featured Portfolio', id: 'portfolio' },
                { label: 'Client Testimonials', id: 'testimonials' },
              ].map((link) => (
                <li key={link.id}>
                  <a 
                    href={`#${link.id}`}
                    onClick={(e) => handleSmoothScroll(e, link.id)}
                    className="hover:text-white transition-colors duration-200 flex items-center gap-1.5 text-slate-400"
                  >
                    <ArrowRightIcon className="h-3.5 w-3.5 text-cyan-500" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Core tech stack highlights col */}
          <div className="md:col-span-2 space-y-4">
            <h4 className="font-bold text-xs text-slate-200 uppercase tracking-widest">
              Platform Focus
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold text-slate-400">
              <li>React & Next.js Ecosystems</li>
              <li>React Native & iOS Deployments</li>
              <li>Node, TypeScript, GraphQL</li>
              <li>Tailwind & Custom Design Systems</li>
              <li>Vercel & AWS Serverless Pipelines</li>
            </ul>
          </div>

          {/* Social connections newsletter signup */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-bold text-xs text-slate-200 uppercase tracking-widest">
              Stay in the Loop
            </h4>
            <p className="text-xs font-light text-slate-400">
              Receive a monthly bulletin covering code patterns, clean architecture setups, and design metrics.
            </p>
            
            {/* Minimal inline signup bar */}
            <div className="flex gap-1.5 p-1 rounded-xl bg-slate-900 border border-slate-800">
              <input 
                type="email" 
                placeholder="your@email.com"
                className="bg-transparent text-xs text-white px-3 py-2 w-full focus:outline-none"
              />
              <button 
                onClick={() => alert("Newsletter subscription system connected successfully!")}
                className="px-3.5 py-2 rounded-lg bg-violet-600 hover:bg-violet-700 text-white font-bold text-xs transition-colors shadow"
              >
                Join
              </button>
            </div>
          </div>

        </div>

        {/* Lower footer copyright details */}
        <div className="pt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-semibold text-slate-500">
          <p>© {currentYear} Nexus Consultancy. Built for optimal speed, fluidity, and light/dark theme balance.</p>
          <div className="flex gap-6">
            <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <a href="#about" onClick={(e) => handleSmoothScroll(e, 'about')} className="hover:text-slate-300 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
