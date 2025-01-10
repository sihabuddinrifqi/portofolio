import emailjs from "@emailjs/browser";
import React, { useRef } from "react";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    const formData = new FormData(form.current);
    const isFormValid = Array.from(formData).every(
      ([key, value]) => value.trim() !== ""
    );

    if (!isFormValid) {
      toast.error("Harap isi semua kolom formulir.", {
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }
    emailjs
      .sendForm(
        "service_xbtne9n",
        "template_a3izmpi",
        form.current,
        "l60FFXBWSR42nqNw5"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("email terkirim");
          form.current.reset();
          toast.success("Pesan telah terkirim", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        },
        (error) => {
          console.log(error.text);
          toast.error("Gagal mengirim pesan. Silakan coba lagi.", {
            position: "top-center",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
          });
        }
      );
  };
  return (
    <section className="bg-gray-100 lg:h-screen  ">
    <div className="lg:px-12 px-4 py-6 contact">
      <div
        data-aos="fade-up"
        data-aos-duration="600"
        className="mb-10  text-center"
      >
        <p className="text-xl text-headingcolor font-semibold ">Get In Touch</p>
        <h2 className="md:text-5xl text-4xl text-headingcolor font-bold">
          Contact me
        </h2>
        <p className="mt-3">Let's talk about questions</p>
      </div>
      <div className="md:w-2/3 mx-auto mb-20">
        <form
          data-aos="fade-up"
          data-aos-duration="800"
          ref={form}
          onSubmit={sendEmail}
        >
          <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
            <div className="sm:w-1/2 w-full">
              <label
                htmlFor="firstname"
                className="text-base text-headingcolor w-full"
              >
                First name
              </label>
              <input
                type="text"
                id="firstname"
                name="firstname"
                placeholder=" First name..."
                className="block border border-primary rounded-lg py-2 mt-2 w-full border-sky-600"
              />
            </div>
            <div className="sm:w-1/2 w-full">
              <label
                htmlFor="lastname"
                className="text-base text-headingcolor w-full"
              >
                Last name
              </label>
              <input
                type="text"
                id="lastname"
                name="lastname"
                placeholder=" Last name..."
                className="block border border-primary rounded-lg py-2 mt-2 w-full border-sky-600"
              />
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-8 items-center mb-8">
            <div className="sm:w-1/2 w-full">
              <label
                htmlFor="email"
                className="text-base text-headingcolor w-full"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder=" Email..."
                className="block border border-primary rounded-lg py-2 mt-2 w-full border-sky-600"
              />
            </div>
            <div className="sm:w-1/2 w-full">
              <label
                htmlFor="number"
                className="text-base text-headingcolor w-full"
              >
                Phone number
              </label>
              <input
                type="number"
                id="number"
                name="number"
                placeholder=" Phone number..."
                className="block border border-primary rounded-lg py-2 mt-2 w-full border-sky-600"
              />
            </div>
          </div>

          <div className="w-full mb-8">
            <label
              htmlFor="message"
              className="text-base text-headingcolor w-full"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              cols="30"
              rows="5"
              className="block border border-primary rounded-lg py-2 px-2 mt-2 w-full border-sky-600"
              placeholder="Type your message..."
            ></textarea>
          </div>
          <div data-aos="fade-up" className="w-full mb-8">
            <input type="checkbox" name="agree" id="agree" />
            <label
              htmlFor="message"
              className="text-base text-headingcolor w-full ml-3"
            >
              I accept the terms
            </label>
          </div>
          <div
            data-aos="zoom-in"
            data-aos-duration="1000"
            className="w-36 mx-auto border rounded-lg bg-sky-600 border-blue-500 active:bg-pink-800"
          >
            <input
              type="submit"
              value="Submit"
              className=" py-3  px-8 text-white font-medium rounded-b-md cursor-pointer inline-block w-full hover:bg-pink-500"
            />
          </div>
        </form>
      </div>
      <ToastContainer />
    </div>
    </section>
  );
};

export default Contact;
