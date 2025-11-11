import { Link } from "react-router-dom";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Index() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0E0D0D] to-[#1a1919] text-white overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-[#0E0D0D]/95 backdrop-blur-sm px-6 md:px-24 py-6 border-b border-white/5">
        <div className="flex items-center justify-between max-w-[1152px] mx-auto">
          <div className="text-[17px] uppercase tracking-wider font-semibold" style={{ fontVariant: "all-small-caps" }}>
            bylit
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8 text-[14px] uppercase font-normal letter-spacing" style={{ fontVariant: "all-small-caps" }}>
            <button onClick={() => scrollToSection("home")} className="hover:text-red-600 transition-colors duration-300 relative group">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection("about")} className="hover:text-red-600 transition-colors duration-300 relative group">
              About
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection("portfolio")} className="hover:text-red-600 transition-colors duration-300 relative group">
              Projects
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </button>
            <button onClick={() => scrollToSection("contact")} className="hover:text-red-600 transition-colors duration-300 relative group">
              Contact
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <div className={`flex flex-col gap-[4px] transition-all duration-300`}>
              <div className={`w-4 h-[1px] bg-white transition-all duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
              <div className={`w-4 h-[1px] bg-white transition-all duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></div>
              <div className={`w-4 h-[1px] bg-white transition-all duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-6 pb-4 flex flex-col gap-4 text-[14px] uppercase animate-in fade-in slide-in-from-top-2 duration-300" style={{ fontVariant: "all-small-caps" }}>
            <button onClick={() => scrollToSection("home")} className="text-left hover:text-red-600 transition-colors duration-300">Home</button>
            <button onClick={() => scrollToSection("about")} className="text-left hover:text-red-600 transition-colors duration-300">About</button>
            <button onClick={() => scrollToSection("portfolio")} className="text-left hover:text-red-600 transition-colors duration-300">Projects</button>
            <button onClick={() => scrollToSection("contact")} className="text-left hover:text-red-600 transition-colors duration-300">Contact</button>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center px-6 md:px-24 pt-32 md:pt-24">
        <div className="max-w-[1152px] w-full mx-auto">
          <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
            <div className="animate-in fade-in slide-in-from-left-8 duration-1000">
              <h1 className="text-[50px] md:text-[94px] font-extrabold leading-[86.9%] mb-8 md:mb-0 text-center md:text-left text-red-600">
                @BYLIT
              </h1>
              <p className="hidden md:block text-white/70 text-lg mt-8 leading-relaxed">
                Creative Direction & Photography
              </p>
            </div>
            <div className="flex justify-center md:justify-end relative group animate-in fade-in slide-in-from-right-8 duration-1000 delay-200">
              <div className="relative">
                <img
                  src="/ivan.jpg"
                  alt="Portrait"
                  className="w-full max-w-[500px] md:max-w-[550px] h-auto transform -rotate-[3.422deg] transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="absolute top-[40%] right-[10%] hidden md:block">
                <svg width="42" height="42" viewBox="0 0 42 42" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-pulse">
                  <circle cx="21" cy="21" r="19.5913" stroke="white" strokeWidth="2"/>
                </svg>
              </div>
            </div>
          </div>
        </div>

        {/* Down Arrow */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg width="34" height="20" viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.75623 1.75623L16.9988 16.9988L32.2415 1.75623" stroke="white" strokeWidth="3.51244" strokeLinecap="round"/>
          </svg>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative min-h-screen flex items-center justify-center px-6 md:px-24 py-24">
        <div className="max-w-[949px] mx-auto">
          <div className="relative">
            <div className="absolute -top-20 -left-20 w-72 h-72 bg-red-600/5 rounded-full blur-3xl"></div>
            <p className="text-[30px] md:text-[65px] font-normal leading-[91.9%] tracking-[-1.05px] md:tracking-[-2.275px] text-center relative z-10 animate-in fade-in duration-1000">
              I'm <span className="text-red-600 font-semibold">Ivan Achao</span>, a photographer and design artist based in Panama. I'm passionate about capturing moments and creating visual stories.
            </p>
          </div>
        </div>

        {/* Down Arrow */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg width="34" height="20" viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.75623 1.75623L16.9988 16.9988L32.2415 1.75623" stroke="white" strokeWidth="3.51244" strokeLinecap="round"/>
          </svg>
        </div>
      </section>

      {/* Portfolio Section */}
      <section id="portfolio" className="relative px-6 md:px-24 py-24">
        <div className="max-w-[1152px] mx-auto">
          <h2 className="text-[52px] md:text-[65px] font-medium leading-[91.9%] tracking-[-1.805px] md:tracking-[-2.275px] text-center mb-16 md:mb-24 animate-in fade-in duration-1000">
            PORTFOLIO
          </h2>

          <div className="space-y-16 md:space-y-24">
            {/* Image 1 */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-6 md:gap-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
              <div className="w-full md:w-auto overflow-hidden rounded-sm group">
                <img
                  src="/6S5A5103.jpg"
                  alt="Portfolio item 1"
                  className="w-full max-w-[315px] md:max-w-[735px] h-auto transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col gap-3 md:min-w-[250px]">
                <button
                  onClick={() => scrollToSection("portfolio")}
                  className="text-[20px] md:text-[32px] font-medium uppercase tracking-wider whitespace-nowrap hover:text-red-600 transition-colors duration-300 text-left"
                >
                  DIESEL
                </button>
                <p className="text-[12px] md:text-[16px] text-red-600 font-extrabold leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }}>
                  Editorial shot in a vintage garage denim-on-denim
                </p>
              </div>
            </div>

            {/* Image 2 */}
            <div className="flex flex-col md:flex-row justify-center md:justify-start items-center gap-6 md:gap-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
              <div className="w-full md:w-auto overflow-hidden rounded-sm group">
                <video
                  src="/DOS-90.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full max-w-[234px] md:max-w-[612px] h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col gap-3 md:min-w-[300px]">
                <div className="text-[20px] md:text-[32px] font-medium uppercase tracking-wider whitespace-nowrap">
                  DOSNOVENTA
                </div>
                <p className="text-[16px] md:text-[18px] text-red-600 font-extrabold leading-relaxed" style={{ fontFamily: 'Arial, sans-serif' }}>
                  High Performance Urban Bikes.
                  <br></br>
                  Los Angeles edition
                </p>
              </div>
            </div>

            {/* Image 3 */}
            <div className="flex flex-col md:flex-row justify-center md:justify-end items-center gap-6 md:gap-12 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
              <div className="flex flex-col gap-2 md:text-right order-2 md:order-1">
                <div className="text-[24px] md:text-[40px] font-normal uppercase tracking-wide text-white leading-tight">
                  GOLDEN ANGELS
                </div>
                <div className="text-[18px] md:text-[28px] font-extrabold uppercase tracking-wider text-red-600 leading-tight" style={{ fontFamily: 'Arial, sans-serif' }}>
                  RACING TEAM COLLECTION.
                </div>
              </div>
              <div className="w-full md:w-auto overflow-hidden rounded-sm group order-1 md:order-2">
                <video
                  src="/s.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="w-full max-w-[310px] md:max-w-[612px] h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
            </div>

            {/* Image 4 */}
            <div className="flex flex-col items-center gap-6 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-300">
              <div className="w-full overflow-hidden rounded-sm group">
                <img
                  src="/caballos_07.jpg"
                  alt="Portfolio item 4"
                  className="w-full max-w-[280px] md:max-w-[750px] h-auto mx-auto transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="flex flex-col gap-2 items-center">
                <div className="text-[20px] md:text-[32px] font-medium uppercase tracking-wider text-center">
                  DIESEL
                </div>
                <p className="text-[16px] md:text-[24px] text-red-600 max-w-[400px] font-extrabold text-center" style={{ fontFamily: 'Arial, sans-serif' }}>
                  Million and Horses
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Down Arrow */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg width="34" height="20" viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.75623 1.75623L16.9988 16.9988L32.2415 1.75623" stroke="white" strokeWidth="3.51244" strokeLinecap="round"/>
          </svg>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative px-6 md:px-24 py-24">
        <div className="max-w-[1152px] mx-auto">
          <h2 className="text-[52px] md:text-[65px] font-medium leading-[91.9%] tracking-[-1.805px] md:tracking-[-0.65px] text-center mb-12 md:mb-20 animate-in fade-in duration-1000">
            CONTACT
          </h2>

          <div className="text-center mb-12 md:mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-100">
            <a
              href="mailto:contact@yourwebsite.com"
              className="text-[28px] md:text-[40px] font-normal leading-[91.9%] tracking-[-1.05px] md:tracking-[-1.4px] uppercase hover:text-red-600 transition-colors duration-300 group relative inline-block"
              style={{ fontVariant: "all-small-caps" }}
            >
              contact@yourwebsite.com
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 md:gap-6 mb-16 animate-in fade-in slide-in-from-bottom-4 duration-1000 delay-200">
            <a href="#" className="text-[16px] md:text-[20px] font-semibold leading-[91.9%] tracking-[-0.7px] md:tracking-[-0.875px] text-[#BCBCBC] uppercase hover:text-white transition-all duration-300 relative group px-3 py-2 rounded-sm hover:bg-white/5" style={{ fontVariant: "all-small-caps" }}>
              Linkedin
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <span className="text-white/20 hidden md:inline">•</span>
            <a href="#" className="text-[16px] md:text-[20px] font-semibold leading-[91.9%] tracking-[-0.7px] md:tracking-[-0.875px] text-[#BCBCBC] uppercase hover:text-white transition-all duration-300 relative group px-3 py-2 rounded-sm hover:bg-white/5" style={{ fontVariant: "all-small-caps" }}>
              Dribbble
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <span className="text-white/20 hidden md:inline">•</span>
            <a href="#" className="text-[16px] md:text-[20px] font-semibold leading-[91.9%] tracking-[-0.7px] md:tracking-[-0.875px] text-[#BCBCBC] uppercase hover:text-white transition-all duration-300 relative group px-3 py-2 rounded-sm hover:bg-white/5" style={{ fontVariant: "all-small-caps" }}>
              Behance
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <span className="text-white/20 hidden md:inline">•</span>
            <a href="#" className="text-[16px] md:text-[20px] font-semibold leading-[91.9%] tracking-[-0.7px] md:tracking-[-0.875px] text-[#BCBCBC] uppercase hover:text-white transition-all duration-300 relative group px-3 py-2 rounded-sm hover:bg-white/5" style={{ fontVariant: "all-small-caps" }}>
              Twitter
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </a>
            <span className="text-white/20 hidden md:inline">•</span>
            <a href="#" className="text-[16px] md:text-[20px] font-semibold leading-[91.9%] tracking-[-0.7px] md:tracking-[-0.875px] text-[#BCBCBC] uppercase hover:text-white transition-all duration-300 relative group px-3 py-2 rounded-sm hover:bg-white/5" style={{ fontVariant: "all-small-caps" }}>
              Instagram
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-red-600 group-hover:w-full transition-all duration-300"></span>
            </a>
          </div>
        </div>

        {/* Down Arrow */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg width="34" height="20" viewBox="0 0 34 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.75623 1.75635L16.9988 16.999L32.2415 1.75635" stroke="white" strokeWidth="3.51244" strokeLinecap="round"/>
          </svg>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-t from-white to-[#F5F5F5] text-black px-6 md:px-24 py-12 md:py-16 border-t border-black/10">
        <div className="max-w-[1152px] mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <div className="text-[12px] md:text-[24px] font-semibold md:font-normal leading-[86.9%] uppercase" style={{ fontVariant: "all-small-caps" }}>
                Ivan Achao
              </div>
              <div className="text-[10px] md:text-[14px] text-black/60 mt-2">
                Photographer & Creative Director
              </div>
            </div>
            <div className="flex items-center gap-6 md:gap-8 text-[12px] md:text-[16px] font-medium md:font-normal leading-[91.9%] md:leading-[86.9%] uppercase" style={{ fontVariant: "all-small-caps" }}>
              <Link to="#" className="text-black/70 hover:text-black transition-colors duration-300 relative group">
                Privacy Policy
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300"></span>
              </Link>
              <span className="text-black/20">•</span>
              <Link to="#" className="text-black/70 hover:text-black transition-colors duration-300 relative group">
                Terms and Conditions
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-black group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>
          </div>
          <div className="mt-8 md:mt-12 pt-8 md:pt-12 border-t border-black/10 text-center text-[10px] md:text-[12px] text-black/50">
            <p>© 2024 Ivan Achao. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
