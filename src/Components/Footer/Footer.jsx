import React, { useState } from "react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { MdCall, MdForwardToInbox } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import Swal from "sweetalert2";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      Swal.fire({
        title: "Please fill out all fields",
        icon: "warning",
        confirmButtonColor: "#331A15",
      });
      return;
    }

    Swal.fire({
      title: "Message Sent Successfully",
      icon: "success",
      confirmButtonColor: "#331A15",
    });

    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div>
      <footer className="md:h-[824px] h-auto footer sm:footer-horizontal px-24 mx-auto flex flex-col md:flex-row md:justify-between bg-[url('https://media-hosting.imagekit.io/abad3bb29b50413a/FooterBg.png?Expires=1841838654&Key-Pair-Id=K2ZIVPTIP2VGHC&Signature=eaK3Rjwcz9VlmJmGmzke9vTYl9PbSRJHR5Saq8~CN4If1E-Fvr4kb3MRr2~1iHLdwxSQ74Lkf~j7fXSglnBGNyFMzEJHLgtZ5eG-nDWJ-OQj-ggunOV4WAuZUvL65QBqKTzJ~7Np6uXyR6cF0h~p8ZZrfFMw5FGkwK9iQznvFYoWClgiiYLQkrcskKzhcB-W6qmcliFSPIcLsA6wvYtGjtty12RrKtXXvx0d-f~QOC7LXt6cqessoYs10QuQAKLsvTJ6sCIMKKFE58di-tQW7muUzG7~ZTLsSDmG5fX2im-D3s8nW4pqSCWa~BjxIO2ouPcbakZYMzbCiQXCOxnouQ__')] bg-cover bg-center">
        <aside>
          <img
            className="w-20 h-24 animate-bounce mt-32"
            src="https://i.postimg.cc/zDpXFNyj/logo1.png"
            alt="Logo"
          />
          <h3 className="footer-text leading-relaxed mt-6 mb-8">Espresso Emporium</h3>
          <p className="leading-relaxed mt-8">
            Always ready to be your friend. Come & Contact with us to share your
            <br /> memorable moments, to share with your best companion.
          </p>

          <div className="text-[#331A15] flex gap-5 mt-8">
            <FaFacebook size={35} />
            <FaTwitter size={35} />
            <FaInstagram size={35} />
            <FaLinkedin size={35} />
          </div>

          <h3 className="footer-text leading-relaxed my-8">Get in Touch</h3>

          <div className="space-y-4">
            <div className="text-[#331A15] flex gap-4 items-center">
              <MdCall size={30} />
              <p>+88 01533 333 333</p>
            </div>
            <div className="text-[#331A15] flex gap-4 items-center">
              <MdForwardToInbox size={30} />
              <p>info@gmail.com</p>
            </div>
            <div className="text-[#331A15] flex gap-4 items-center">
              <FaLocationDot size={30} />
              <p>72, Wall street, King Road, Dhaka</p>
            </div>
          </div>
        </aside>

        <form
          onSubmit={handleSubmit}
          className="fieldset rounded-box mt-5 md:mt-56 p-4 w-full max-w-md"
          noValidate
        >
          <legend className="fieldset-legend footer-text mb-8 leading-relaxed">
            Connect with Us
          </legend>

          <input
            name="name"
            type="text"
            value={formData.name}
            onChange={handleChange}
            className="w-full h-12 mb-4 border-none rounded focus:outline focus:outline-2 focus:outline-[#331A15] focus:border-[#331A15] focus:shadow-md focus:shadow-[#331A15]/20 bg-white px-4 text-[#1B1A1A99] placeholder:text-[#1B1A1A99] focus:placeholder-transparent transition-all duration-200"
            placeholder="Name"
          />

          <input
            name="email"
            type="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full h-12 mb-4 rounded focus:outline focus:outline-2 focus:outline-[#331A15] focus:border-[#331A15] focus:shadow-md focus:shadow-[#331A15]/20 bg-white px-4 text-[#1B1A1A99] placeholder:text-[#1B1A1A99] focus:placeholder-transparent transition-all duration-200"
            placeholder="Email"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full h-32 focus:outline focus:outline-2 focus:outline-[#331A15] focus:border-[#331A15] focus:shadow-md focus:shadow-[#331A15]/20 mb-4 rounded bg-white px-4 pt-4 text-[#1B1A1A99] placeholder:text-[#1B1A1A99] focus:placeholder-transparent transition-all duration-200 resize-none"
            placeholder="Message"
          />

          <button
            type="submit"
            className="text-[#331A15] w-36 h-12 flex justify-center hover:bg-[#331A15] hover:text-white items-center border-2 px-2 py-6 text-lg border-[#331A15] rounded-full mt-4"
          >
            Send Message
          </button>
        </form>
      </footer>

      <div
        className="bg-[url('https://i.postimg.cc/4dssp2Zq/24.jpg')] bg-cover bg-center h-16 flex items-center justify-center"
      >
        <p className="text-white rancho-regular text-sm md:text-base">
          © Copyright Espresso Emporium | All Rights Reserved
        </p>
      </div>
    </div>
  );
};

export default Footer;
