import { PhoneCall } from "lucide-react";

interface FooterProps {
  title: string;
  desc: string;
  menu: menu[];
  links: string;
}

export default function Footer<FooterProps>() {
  const date = new Date();
  return (
    <>
      <main className="flex justify-between bg-fuchsia-950 text-white p-20 ">
        <section>
          <h1>CHIDINMA NWAEZE</h1>
          <p></p>
        </section>
        <section>
          <h1 className="text-xl pb-2">Quick Links</h1>
          <ul>
            <li>
              <a href="/home">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </section>
        <section>
          <h1 className="text-xl pb-2">Get In Touch</h1>
          <ul>
            <li>
              <img src="" alt="" />
              <span>Phone Number</span>08027966117
            </li>
            <li>
              <img src="" alt="" />
              <span>Phone Number</span>08027966117
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </section>
      </main>
      <div className="text-center p-3 bg-fuchsia-200">{`Copyright@${date.getFullYear()}`}</div>
    </>
  );
}
