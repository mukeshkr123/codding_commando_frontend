import { Syne } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import Providers from "../GlobalRedux/provider";
import ToastProvider from "../components/providers/toast-providers";

const syne = Syne({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata = {
  title: "Codding Commando",
  description: "A Learning management web app",
  icons: {
    icon: ["/favicon.ico?v=4"],
    apple: ["/apple-touch-icon.png?v=4"],
    shortcut: ["/apple-touch-icon.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <>
      <body className={syne.className}>
        <Providers>
          <ToastProvider />
          <main>{children}</main>
        </Providers>
      </body>
      <Script src="https://checkout.razorpay.com/v1/checkout.js" />
    </>
  );
}
