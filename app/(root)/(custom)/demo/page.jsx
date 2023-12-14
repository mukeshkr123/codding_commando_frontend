import DemoForm from "../../../../components/shared/form/demo-form";

const DemoPage = () => {
  return (
    <div
      className="relative max-h-[88vh] w-full bg-dark-purple  bg-center bg-no-repeat px-4 pb-16 pt-8"
      style={{
        backgroundImage: "url(/assets/images/background/demo-png.png)",
        backgroundPosition: "bottom",
        backgroundSize: "100% 60%",
      }}
    >
      <div
        className="absolute right-0 h-full w-1/2 bg-contain"
        style={{
          backgroundImage: 'url("/assets/images/grid.png")',
        }}
      />
      <DemoForm />
    </div>
  );
};

export default DemoPage;
