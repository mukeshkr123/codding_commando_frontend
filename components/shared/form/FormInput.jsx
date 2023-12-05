import React from "react";

const FormInput = ({ label, placeholder, register, error }) => (
  <div className="mb-4">
    <input
      {...register}
      className={`w-full appearance-none border-b border-white bg-transparent px-3 py-2 leading-tight text-white placeholder:text-white focus:shadow-none focus:outline-none ${
        error ? "border-red-500" : ""
      }`}
      type="text"
      placeholder={placeholder}
    />
    {error && <p className="text-sm text-red-500">{error.message}</p>}
  </div>
);

export default FormInput;
