import { redirect } from "next/navigation";

const TeacherLayout = ({ children }) => {
  const user = { name: "mukesh" };

  if (!user) {
    return redirect("/dashboard");
  }

  return <>{children}</>;
};

export default TeacherLayout;
