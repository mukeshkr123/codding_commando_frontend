import { createUploadthing } from "uploadthing/next";

const f = createUploadthing();

const handleAuth = () => {
  const userId = 123322; // TODO: Configure actual user authentication and authorization
  const isAuthorized = true; // TODO: Implement proper authorization check

  if (!userId || !isAuthorized) {
    throw new Error("Unauthorized");
  }

  return userId;
};

// Configuration for handling course image uploads
export const ourFileRouter = {
  courseImage: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
  })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  PaymentcourseImage: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
  })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  StrategyImageForm: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
  })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
  mentorImage: f({
    image: { maxFileSize: "4MB", maxFileCount: 1 },
  })
    .middleware(() => handleAuth())
    .onUploadComplete(() => {}),
};
