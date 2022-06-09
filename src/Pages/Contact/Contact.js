import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Footer from "../Footer/Footer";

export const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_vkc3x0m",
        "template_70hexy6",
        form.current,
        "nitDBC3noJAOffNQE"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("message sent");
          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <section id="contact" className="my-12">
      <h2 className="text-2xl text-base-100 mb-4">Contact for me</h2>

      <div className="py-6 bg-neutral w-full rounded-lg">
        <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-3">
          <input
            required
            type="text"
            placeholder="Type your name"
            class="input input-bordered input-info"
            name="user_name"
          />

          <input
            required
            type="email"
            placeholder="Type your Email"
            class="input input-bordered input-info"
            name="user_email"
          />

          <textarea
            required
            className="textarea textarea-info"
            placeholder="Message"
            name="message"
          />
          <div className="md:flex justify-between items-center">
            <input
              className="btn btn-primary w-48"
              type="submit"
              value="Send"
            />
            <p className="text-base-100">
              * I promise the confidentiality of your personal information
            </p>
          </div>
        </form>
      </div>
      <Footer></Footer>
    </section>
  );
};
