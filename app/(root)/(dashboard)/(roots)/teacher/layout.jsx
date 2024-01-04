import ProtectedTeacher from "@/components/protected-teacher";
import { redirect } from "next/navigation";

const TeacherLayout = ({ children }) => {
  const user = { name: "mukesh" };

  if (!user) {
    return redirect("/dashboard");
  }

  return (
    <>
      <ProtectedTeacher>{children}</ProtectedTeacher>
    </>
  );
};

export default TeacherLayout;
