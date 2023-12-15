import React from "react";

const ContactForm = () => {
  return (
    <div
      className="flex min-h-screen flex-col bg-cover"
      style={{ backgroundImage: 'url("/bg-svg.svg")' }}
    >
      <div className="i flex  flex-col justify-between p-4 md:gap-36  md:p-8 lg:p-16">
        <div className="mb-8 text-start md:mb-0 md:text-left">
          <img src="/logo.png" alt="logo" className="w-16 md:w-32" />
          <p className="text-sm text-white md:text-lg">Cloudprism Solutions</p>
        </div>
        <div className="gap-24 md:flex">
          <div className="flex w-full max-w-2xl flex-col md:w-1/2">
            <h1 className="mb-2 text-2xl font-semibold text-[#18A8DF] md:mb-4 md:text-4xl">
              Get In Touch With Us!
            </h1>
            <p className="mb-4 text-lg text-white md:text-2xl">
              Let us know more about you!
            </p>
            <form className="flex flex-col gap-4">
              <div className="flex flex-col gap-4 font-medium text-white md:flex-row">
                <input
                  type="text"
                  className="w-full rounded-md bg-[#4C5C8C] p-2 md:w-1/2"
                  placeholder="First Name"
                />
                <input
                  type="text"
                  className="w-full rounded-md bg-[#4C5C8C] p-2 md:w-1/2"
                  placeholder="Last Name"
                />
              </div>
              <div className="flex flex-col gap-4 font-medium text-white md:flex-row">
                <input
                  type="text"
                  className="w-full rounded-md bg-[#4C5C8C] p-2 md:w-1/2"
                  placeholder="Email"
                />
                <input
                  type="text"
                  className="w-full rounded-md bg-[#4C5C8C] p-2 md:w-1/2"
                  placeholder="Phone no"
                />
              </div>
              <textarea
                rows="4"
                placeholder="Message"
                className="rounded-md bg-[#4C5C8C] p-2 font-medium text-white"
              ></textarea>
              <button
                type="submit"
                className="h-10 w-full rounded-md bg-[#18A8DF] font-semibold text-white md:w-36"
              >
                SUBMIT
              </button>
            </form>
          </div>
          <div className="mt-8 flex max-w-xs flex-col gap-4 md:ml-24 md:mt-0">
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl font-semibold text-[#18A8DF] md:text-4xl">
                Contact Information
              </h2>
              <p className="text-sm text-white md:text-base">
                Building Name: Gera Imperium Alpha, Block Sector: Vitthal Nagar,
                Kharadi, Pune, 411014
              </p>
              <p className="text-sm text-white md:text-base">
                Call us: +91 70045 35083
              </p>
              <p className="text-sm text-white md:text-base">
                Mail us: hello@cloudprism.in
              </p>
              <p className="text-sm text-white md:text-base">
                Website: www.cloudprism.in
              </p>
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-[#18A8DF] md:text-4xl">
                Follow Us
              </h2>
              <div className="mt-2 flex gap-2 text-sm text-white md:text-base">
                <a href="#">Linkdein</a>
                <a href="#">Instagram</a>
                <a href="#">Quora</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
