import { LoginForm } from "@/components/login/login-form";
import Image from "next/image";

const LoginPage = () => {
  return (
    <section className="relative h-[700px] w-full bg-dark-purple text-white">
      <div className="flex h-full w-full flex-col lg:flex-row">
        <div
          className="order-2 h-1/2 w-full bg-contain bg-center bg-no-repeat lg:order-1 lg:h-full lg:w-2/3 lg:bg-bottom"
          style={{
            backgroundImage: 'url("/assets/images/background/login-img.png")',
          }}
        ></div>
        <div className="absolute flex h-full w-full flex-col items-center justify-center gap-8">
          <Image
            src="/assets/font-shadow/loginsvg.svg"
            alt="Login"
            height={100}
            width={180}
          />
          <LoginForm />
        </div>
        <div
          className="order-1 h-1/2 w-full bg-contain bg-center bg-no-repeat lg:order-2 lg:h-full lg:w-1/3 lg:bg-bottom"
          style={{
            backgroundImage: 'url("/assets/images/grid.png")',
            backgroundPosition: "bottom",
          }}
        ></div>
      </div>
    </section>
  );
};

export default LoginPage;
