import ContactForm from "../../../../components/shared/form/contact-form";

const ContactPage = () => {
  return (
    <div
      className="relative max-h-[88vh] w-full bg-dark-purple bg-center bg-no-repeat px-4 pb-16 pt-8 transition-all"
      style={{
        backgroundImage: "url(/assets/images/background/making-png.png)",
        backgroundPosition: "bottom",
        backgroundSize: "100% 35%",
      }}
    >
      <div
        className="absolute right-0 h-full w-1/2 bg-contain"
        style={{
          backgroundImage: 'url("/assets/images/grid.png")',
        }}
      />

      <ContactForm />
    </div>
  );
};

export default ContactPage;
