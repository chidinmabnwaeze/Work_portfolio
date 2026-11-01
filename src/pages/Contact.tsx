import { ArrowUpRight } from "lucide-react";
import { useState, type FormEvent } from "react";
import contactImg from "../assets/images/5d20d864-9cde-452a-b136-733fd2bbc3c1-removebg-preview.webp";

const FORM_ENDPOINT = "https://formsubmit.co/ajax/chidinmabnwaeze@gmail.com";

type FormStatus = "idle" | "sending" | "sent" | "error";

export default function Contact() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    setStatus("sending");

    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(Object.fromEntries(new FormData(form))),
      });
      const result = await response.json();
      // FormSubmit can return success as the string "true" or "false"
      if (!response.ok || String(result.success) !== "true") {
        throw new Error(result.message);
      }
      form.reset();
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  };

  return (
    <main
    id="contact"
      className="reveal flex flex-col justify-center items-center my-15 px-4 min-h-screen bg-cover bg-center relative "
      style={{
        backgroundImage: `url(${contactImg})`,
      }}
    >
      <div className="absolute inset-0 bg-white/75"></div>
      <div className="relative z-10 w-full max-w-2xl flex flex-col justify-center items-center">
        <p className="mt-10 text-gray-500">Get in Touch</p>
        <h1 className="font-bold text-4xl">Contact</h1>

        <form
          onSubmit={handleSubmit}
          className="border border-gray-200 rounded-xl p-5 sm:p-8 w-full my-8 bg-white"
        >
          <input type="hidden" name="_subject" value="New portfolio message" />
          {/* Honeypot: hidden from people, spam bots fill it in */}
          <input
            type="text"
            name="_honey"
            tabIndex={-1}
            autoComplete="off"
            aria-hidden="true"
            className="hidden"
          />
          <div className="flex flex-col gap-2 my-5 sm:my-7">
            <label htmlFor="name">Full Name</label>
            <input
              id="name"
              name="name"
              type="text"
              autoComplete="name"
              required
              placeholder="Enter your full name"
              className="border border-gray-300 rounded p-4 focus-visible:bg-fuchsia-50 focus:border-fuchsia-200  focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-2 my-5 sm:my-7">
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              placeholder="Enter your email address"
              className="border border-gray-300 rounded p-4 focus-visible:bg-fuchsia-50 focus:border-fuchsia-200  focus:outline-0"
            />
          </div>
          <div className="flex flex-col gap-2 my-5 sm:my-7">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              required
              placeholder="Send me a message"
              className="border border-gray-300 rounded p-4 focus-visible:bg-fuchsia-50 focus:border-fuchsia-200  focus:outline-0"
            />
          </div>

          <button
            type="submit"
            disabled={status === "sending"}
            className="flex justify-center gap-2 text-white bg-fuchsia-950 p-4 rounded w-full text-center hover:bg-white hover:text-fuchsia-950 hover:border border-fuchsia-950 cursor-pointer disabled:opacity-60 disabled:cursor-wait"
          >
            {status === "sending" ? "Sending..." : "Off to my Inbox"}
            <span>
              <ArrowUpRight width={20} />
            </span>
          </button>

          <p role="status" className="mt-4 text-center">
            {status === "sent" && (
              <span className="text-green-700">
                Thanks! Your message is on its way to my inbox.
              </span>
            )}
            {status === "error" && (
              <span className="text-red-700">
                Your message couldn't be sent. Please email me at{" "}
                <a href="mailto:chidinmabnwaeze@gmail.com" className="underline">
                  chidinmabnwaeze@gmail.com
                </a>
                .
              </span>
            )}
          </p>
        </form>
      </div>
    </main>
  );
}
