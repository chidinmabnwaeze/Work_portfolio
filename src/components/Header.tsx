import logo from "../assets/images/WhatsApp Image 2025-11-17 at 13.03.58_b066d80d.jpg"

type HeaderType = {
  name: string;
};
interface MenuProps {
  title: string;
  url: string;
}

const Header = ({ name }: HeaderType) => {
  const menu: MenuProps[] = [
    { title: "Home", url: "/" },
    { title: "About", url: "/about" },
    { title: "Contact", url: "/contact" },
  ];
  return (
    <main className="flex justify-between items-center shadow p-4">
      <div className="ml-6 flex items-center gap-4">
        <img src={logo}alt="logo" className="w-16 h-16 object-cover rounded-full" />
        <h1 className="text-2xl font-bold text-fuchsia-950">{name}</h1>
      </div>

      <nav className="m-5">
        {menu.map((item, index) => (
          <a
            key={index}
            href={item.url}
            className="p-6 text-lg hover:text-fuchsia-950"
          >
            {item.title}
          </a>
        ))}
      </nav>
    </main>
  );
};

export default Header;
