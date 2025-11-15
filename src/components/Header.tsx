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
      <div className="ml-6">
        {/* <img src="" alt="" /> */}
        <h1 className="text-2xl font-bold">{name}</h1>
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
