import React from "react";
import FormInput from "./FormInput";
import FormTextarea from "./TextArea";

const Form = ({ onSubmit, register, errors, title }) => (
  <form
    onSubmit={onSubmit}
    className="w-full rounded px-8 pb-8 pt-6 shadow-md xl:p-10"
  >
    <h1 className="mb-4 py-2 text-2xl font-bold text-white xl:text-4xl">
      {title}
    </h1>
    <div className="flex w-full flex-col lg:flex-row lg:gap-12">
      <div className="w-full lg:w-1/2">
        <FormInput
          label="First Name"
          placeholder="First Name"
          register={register("firstname")}
          error={errors.firstname}
        />
        <FormInput
          label="Last Name"
          placeholder="Last Name"
          register={register("lastname")}
          error={errors.lastname}
        />
        <FormInput
          label="Email"
          placeholder="Email"
          register={register("email")}
          error={errors.email}
        />
      </div>
      <div className="w-full lg:w-1/2">
        <FormInput
          label="Phone No"
          placeholder="Phone No"
          register={register("phone")}
          error={errors.phone}
        />
        <FormTextarea
          label="Message"
          placeholder="Message"
          register={register("message")}
          error={errors.message}
        />
        <div className="flex justify-end">
          <button
            className="rounded-3xl bg-bg_pink px-10 py-2 font-bold text-white transition-transform hover:scale-105 focus:border-blue-300 focus:shadow-none focus:outline-none focus:ring"
            type="submit"
            style={{ boxShadow: "1.5px 1.5px white" }}
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  </form>
);

export default Form;
