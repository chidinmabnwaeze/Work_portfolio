import logo from "../assets/images/WhatsApp Image 2025-11-17 at 13.03.58_b066d80d.jpg";

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
    {title: "Projects", menuLink: "#projects" },
    { title: "Skills", menuLink: "#skills" },
    { title: "Experience", menuLink: "#experience" },
    { title: "Testimonials", menuLink: "#testimonials" },
    { title: "Volunteer", menuLink: "#volunteer" },
    { title: "Contact", menuLink: "#contact" },
  ];

  // scroll to section when clicked 
const handleMenuClick = (menuLink :string)=>{
  const section = document.querySelector(menuLink);
  if(section){
    section.scrollIntoView({behavior: "smooth"});
  }
}

  return (
    <main className="fixed w-full z-10 bg-white flex flex-col md:flex-row justify-between items-center shadow p-4 md:px-8 animate-fade-in">
      <div className="ml-2 flex items-center gap-4 transition-smooth">
        <img
          src={logo}
          alt="logo"
          className="w-12 h-12 md:w-16 md:h-16 object-cover rounded-full hover:scale-110 transition-smooth"
        />
        <h1 className="text-2xl font-bold text-fuchsia-950 transition-smooth hover:text-fuchsia-800">
          {name}
        </h1>
      </div>

      <nav className="m-2">
        {menu.map((item, index) => (
          <a
            key={index}
            href={item.menuLink}
            onClick={(e) => {
              e.preventDefault();
              handleMenuClick(item.menuLink);
            }}
            className="px-3 py-2 text-lg hover:text-fuchsia-950 inline-block transition-smooth hover:scale-105 relative group"
          >
            {item.title}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-fuchsia-950 group-hover:w-full transition-smooth"></span>
          </a>
        ))}
      </nav>
    </main>
  );
};

export default Header;
