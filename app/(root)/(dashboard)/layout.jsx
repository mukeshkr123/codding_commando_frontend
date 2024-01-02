import { Navbar } from "@/components/dashboard/sidebar/navbar";
import { Sidebar } from "@/components/dashboard/sidebar/sidebar";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

const DashboardLayout = ({ children }) => {
  return (
    <div className={(`h-full`, inter.className)}>
      <div className="fixed inset-y-0 z-50 h-[80px] w-full md:pl-56">
        <Navbar />
      </div>
      <div className="fixed inset-y-0 z-50 hidden h-full w-56 flex-col md:flex">
        <Sidebar />
      </div>
      <main className="h-full pt-[80px] md:pl-56">{children}</main>
    </div>
  );
};

export default DashboardLayout;
