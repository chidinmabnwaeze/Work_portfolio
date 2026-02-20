import { PhoneCall, Mail, Linkedin } from "lucide-react";

// interface FooterProps {
//   title: string;
//   desc: string;
// //   menu: menu[];
//   links: string;
// }

export default function Footer() {
  const date = new Date();
  return (
    <>
      <main className="reveal flex flex-col md:flex-row justify-between bg-fuchsia-950 text-white p-6 md:p-20 gap-6">
        <section className="reveal text-center md:text-left">
          <h1 className="font-bold">CHIDINMA NWAEZE</h1>
          <p className="mt-2"></p>
        </section>
        <section className="reveal text-center md:text-left">
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
        <section className="text-center md:text-left">
          <h1 className="text-xl pb-2">Get In Touch</h1>
          <ul>
            <li className="flex items-center justify-center md:justify-start">
              <PhoneCall width={20} />
              <span className="px-3">08027966117</span>
            </li>
            <li className="flex items-center justify-center md:justify-start">
              <Mail width={20} />
              <span className="px-3">chidinmabnwaeze@gmail.com</span>
            </li>
          </ul>
          <div className="social pt-3">
            <a href="">
              <Linkedin />{" "}
            </a>
          </div>
        </section>
      </main>
      <div className="text-center p-3 bg-fuchsia-200">{`Copyright@${date.getFullYear()}`}</div>
    </>
  );
}
