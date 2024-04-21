import React, { useState } from "react";
import {
  IFormData,
  IFormInputProps,
  IFormSelectProps,
} from "../interfaces/FormSection";

// Array of countries for the select input
const countries: string[] = [
  "Afghanistan",
  "Aland Islands",
  "Albania",
  "Algeria",
  "American Samoa",
  "Andorra",
  "Angola",
  "Anguilla",
  "Antarctica",
  "Antigua and Barbuda",
];

// FormSection component definition
const FormSection: React.FC = () => {
  // State for form data
  const [formData, setFormData] = useState<IFormData>({
    name: "",
    country: "",
    streamProfile: "",
    email: "",
    website: "",
  });

  // Function to handle input change
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ): void => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Function to handle form submission
  const handleSubmit = (): void => {
    // Do something with form data, for example, submit it to a server
    console.log(formData);
  };

  return (
    // Container for the form section
    <div className="text-black py-2 bg-white/40">
      <div className="h-full w-full flex items-center justify-center py-5">
        <div className="bg-[#F9F9F9] w-11/12 md:w-1/2 flex justify-center p-4 md:p-8 shadow-lg">
          <form
            onSubmit={handleSubmit}
            className="w-full max-w-4xl mx-auto flex flex-col gap-3"
          >
            {/* Form inputs */}
            <FormInput
              label="Name"
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="Your Community Name"
            />
            <FormSelect
              label="Country"
              name="country"
              options={countries}
              value={formData.country}
              onChange={handleInputChange}
            />
            <FormInput
              label="Stream Profile"
              type="text"
              name="streamProfile"
              value={formData.streamProfile}
              onChange={handleInputChange}
              placeholder="https://streamcommunity.com/id/"
            />
            <FormInput
              label="Email"
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              placeholder="Contact Email"
            />
            <FormInput
              label="Website"
              type="text"
              name="website"
              value={formData.website}
              onChange={handleInputChange}
              placeholder="Community Website"
            />
            {/* Submit button */}
            <div className="flex flex-col gap-1">
              <button
                type="submit"
                className="w-full p-3 py-1 border border-gray-300 bg-[#7289D9] rounded text-white font-semibold"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

// FormInput component definition
const FormInput: React.FC<IFormInputProps> = ({
  label,
  type,
  name,
  value,
  onChange,
  placeholder,
}) => (
  <div className="flex flex-col gap-1">
    {/* Input label */}
    <label htmlFor={name} className="text-black font-semibold text-sm">
      {label}
    </label>
    {/* Input field */}
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="w-full p-3 py-2 border border-gray-300 rounded text-sm"
    />
  </div>
);

// FormSelect component definition
const FormSelect: React.FC<IFormSelectProps> = ({
  label,
  name,
  options,
  value,
  onChange,
}) => (
  <div className="flex flex-col gap-1 w-full md:w-1/2">
    {/* Select label */}
    <label htmlFor={name} className="text-black font-semibold text-sm">
      {label}
    </label>
    {/* Select input */}
    <select
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      className="w-full p-2 py-1 border border-gray-300 text-black rounded text-sm"
    >
      {/* Options */}
      {options.map((option) => (
        <option key={option} value={option}>
          {option}
        </option>
      ))}
    </select>
  </div>
);

export default FormSection; // Exporting FormSection component
