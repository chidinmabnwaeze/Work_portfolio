import { MenuIcon, X } from "lucide-react";
import logo from "../assets/images/WhatsApp Image 2025-11-17 at 13.03.58_b066d80d.webp";
import { useState } from "react";

type HeaderType = {
  name: string;
};
interface MenuProps {
  title: string;
  menuLink: string;
}

const Header = ({ name }: HeaderType) => {
  const menu: MenuProps[] = [
    { title: "Home", menuLink: "#home" },
    { title: "About", menuLink: "#about" },
    { title: "Projects", menuLink: "#projects" },
    { title: "Skills", menuLink: "#skills" },
    { title: "Experience", menuLink: "#experience" },
    { title: "Testimonials", menuLink: "#testimonials" },
    { title: "Volunteer", menuLink: "#volunteer" },
    { title: "Contact", menuLink: "#contact" },
  ];

  // scroll to section when clicked
  const handleMenuClick = (menuLink: string) => {
    const section = document.querySelector(menuLink);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [menuOpen, setOpen] = useState(false);
  const toggleMenu = () => {
    setOpen((prev) => !prev);
  };

  // const toggleMenu = ()=>{
  //   // toggle menu on mobile view
  //   const menu = document.querySelector(".nav");
  //  menu?.addEventListener("click", ()=> {menu.classList.toggle(".show")})
  // }

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white flex justify-between items-center shadow px-4 md:px-8 h-20 md:h-24 animate-fade-in">
      <div className="ml-2 flex items-center gap-4 transition-smooth">
        <img
          src={logo}
          alt="logo"
          className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full hover:scale-110 transition-smooth"
        />
        <h1 className="text-2xl font-bold whitespace-nowrap text-fuchsia-950 transition-smooth hover:text-fuchsia-800">
          {name}
        </h1>
      </div>

      <button
        type="button"
        className="lg:hidden flex items-center justify-center w-11 h-11 text-gray-700 cursor-pointer transition-smooth hover:text-fuchsia-950"
        onClick={toggleMenu}
        aria-expanded={menuOpen}
        aria-controls="main-nav"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? <X className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
      </button>

      <nav
        id="main-nav"
        className={`${menuOpen ? "flex" : "hidden"} absolute top-full left-0 w-full flex-col bg-white shadow max-h-[calc(100dvh-var(--header-height))] overflow-y-auto lg:static lg:flex lg:flex-row lg:w-auto lg:max-h-none lg:overflow-visible lg:shadow-none lg:gap-1 xl:gap-4`}
      >
        {menu.map((item, index) => (
          <a
            key={index}
            href={item.menuLink}
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick(item.menuLink);
              setOpen(false);
            }}
            className="px-6 py-3 lg:px-2 lg:py-2 xl:px-3 text-lg lg:text-base xl:text-lg whitespace-nowrap hover:text-fuchsia-950 block transition-smooth hover:scale-105 relative group"
          >
            {item.title}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fuchsia-950 group-hover:w-full transition-smooth"></span>
          </a>
        ))}
      </nav>
    </header>
  );
};

export default Header;
