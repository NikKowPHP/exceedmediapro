"use client";
import { ChevronDownIcon } from "lucide-react";
import { useState } from "react";

export const Form = () => {
  const [formData, setFormData] = useState({
    Name: "",
    Email: "",
    Message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form data:", formData);

    // Simulate form submission (replace with your actual submission logic)
    try {
      // const response = await fetch('/api/submit', { // Replace '/api/submit' with your API endpoint
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(formData),
      // });

      // if (response.ok) {
      //   console.log('Form submitted successfully!');
      //   // Optionally reset the form
      //   setFormData({
      //     First: '',
      //     Last: '',
      //     Email: '',
      //     Location: '',
      //   });
      // } else {
      //   console.error('Form submission failed.');
      // }
      await new Promise((resolve) => setTimeout(resolve, 1000));
      console.log("Form submitted successfully!");
      setFormData({
        Name: "",
        Email: "",
        Message: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <div className=" p-[25px] w-full max-w-md mx-auto">
    
      <form className="space-y-6 " onSubmit={handleSubmit}>
        <div className="flex flex-col md:flex-row gap-[20px]">
          <label className="block md:w-1/2 ">
            <p className="text-white  mb-2">Name</p>
            <input
              type="text"
              required
              name="Name"
              placeholder="Maks Chamlukov"
              className=" appearance-none border border-borderColor-primary rounded-lg w-full py-2 px-3 text-gray-700 bg-[#ffffff0f]  leading-tight focus:outline-none focus:border-gray-300"
              value={formData.Name}
              onChange={handleChange}
            />
          </label>
        </div>
        <label className="block">
          <p className="text-white  mb-2">Email</p>
          <input
            type="email"
            required
            name="Email"
            placeholder="jane@example.com"
            className=" appearance-none border border-borderColor-primary rounded-lg w-full py-2 px-3 bg-[#ffffff0f]  text-subtitle leading-tight focus:outline-none focus:border-gray-700"
            value={formData.Email}
            onChange={handleChange}
          />
        </label>
        <label className="block">
          <p className="text-white  mb-2">Message</p>
          <textarea
            name="Message"
            placeholder="Hi i'm reaching out to you because..."
            required
            className="appearance-none border border-borderColor-primary rounded-lg w-full py-2 px-3 bg-[#ffffff0f] text-subtitle leading-tight min-h-[100px]  focus:outline-none focus:border-gray-300"
            value={formData.Message}
            onChange={handleChange}
          />
        </label>
        <button
          type="submit"
          className="bg-action hover:bg-gray-900 rounded-lg  w-full py-2 px-4  focus:outline-none focus:border-gray-300"
        >
          Submit
        </button>
      </form>
    </div>
  );
};
