import { ArrowUpRight } from "lucide-react";
import contactImg from "../assets/images/5d20d864-9cde-452a-b136-733fd2bbc3c1-removebg-preview.png";

export default function Contact() {
  return (
    <main
      className="flex flex-col justify-center items-center my-15 min-h-screen bg-cover bg-center relative "
      style={{
        backgroundImage: `url(${contactImg})`,
      }}
    >
      <div className="absolute inset-0 bg-white/75"></div>
      <div className="relative z-10 min-w-2xl flex flex-col justify-center items-center">
        <p className="mt-10">Get in Touch</p>
        <h1 className="font-bold text-4xl">Contact</h1>

        <form
          action=""
          className="border border-gray-200 rounded-xl p-8 w-full my-8 bg-white"
        >
          <div className="flex flex-col gap-2 my-7">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              placeholder="Enter your full name"
              className="border border-gray-300 rounded p-4 focus-visible:bg-fuchsia-50 focus:border-fuchsia-200  focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-2 my-7">
            <label htmlFor="email">Email Address</label>
            <input
              type="text"
              placeholder="Enter your email address"
              className="border border-gray-300 rounded p-4 focus-visible:bg-fuchsia-50 focus:border-fuchsia-200  focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-2 my-7">
            <label htmlFor="name">Your Message</label>
            <textarea
              rows={4}
              placeholder="Send me a message"
              className="border border-gray-300 rounded p-4 focus-visible:bg-fuchsia-50 focus:border-fuchsia-200  focus:outline-0"
            />
          </div>

          <button className="flex justify-center gap-2 text-white bg-fuchsia-950 p-4 rounded w-full text-center hover:bg-white hover:text-fuchsia-950 hover:border border-fuchsia-950 cursor-pointer">
            Off to my Inbox
            <span>
              <ArrowUpRight width={20} />
            </span>
          </button>
        </form>
      </div>
    </main>
  );
}
