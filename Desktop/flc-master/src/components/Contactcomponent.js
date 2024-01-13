import Link from "next/link";
import React, { useState } from "react";
import axios from "axios";
import ReactMarkdown from "react-markdown";
import JoinOurTeam from "./JoinOurTeam";
function Contactcomponent({ contact, footer }) {
  const ourOffice = footer.data.attributes;
  const [submissionStatus, setSubmissionStatus] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    message: "",
    email: "",
    phone:""
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post(`https://admin.flc-me.com/api/contact-uses`, {
        data: {
          name: formData.name,
          message: formData.message,
          email: formData.email,
          phone:formData.phone
        },
      });
      setSubmissionStatus("success");

      // Optionally, you can add logic to handle success or show a confirmation message
    } catch (error) {
      console.error("Error submitting form:", error.message);
      setSubmissionStatus("error");

      // Optionally, you can add logic to handle errors or show an error message
    }
  };

  return (
    <div>
      <div className="  p-4 md:mx-40 mt-40 mb-10 font-inter">
        <h1 className="text-4xl font-gothamBold mb-10">{contact.title}</h1>
        <div className=" xl:text-sm mr-20  mb-16 font-gothamMedium">
          <ReactMarkdown>{contact.description}</ReactMarkdown>
        </div>
        <div className="flex flex-col sm:flex-row gap-48">
          <div className="w-full sm:w-1/2 pr-4 ">
            <form className="flex flex-col" onSubmit={handleSubmit}>
              <div className="mb-7 text-gray-600 font-gothamMedium">
                <label htmlFor="help-text">How can we help?</label>
                <input
                  type="text"
                  required
                  id="help-text"
                  value={formData.message}
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                  className="block w-full mt-1 p-2 py-10 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-7 text-gray-600 font-gothamMedium">
                <label htmlFor="name">Name</label>
                <input
                  type="text"
                  required
                  id="name"
                  value={formData.name}
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                  className="block w-full mt-1 p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="mb-7 text-gray-600 font-gothamMedium">
                <label htmlFor="name">Phone Number</label>
                <input
                required
                  type="number"
                  id="phone"
                  value={formData.phone}
                  onChange={(e) =>
                    setFormData({ ...formData, phone: e.target.value })
                  }
                  className="block w-full mt-1 p-2 border border-gray-300 rounded"
                />
              </div>
              <label className=" text-gray-600 font-gothamMedium" htmlFor="company-email">
                Email
              </label>
              <input
              required
                type="email"
                id="company-email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="block w-full mt-1 p-2 border border-gray-300 rounded"
              />
              <div className=" mt-6 flex justify-end">
                <button
                  type="submit"
                  className=" bg-black text-white py-2  font-gothamMedium rounded mt-4 w-32"
                >
                  Submit
                </button>
              </div>
            </form>
            {submissionStatus === "success" && (
              <p className="text-green-500 font-gothamMedium">Form submitted successfully!</p>
            )}

            {submissionStatus === "error" && (
              <p className="text-red-500 font-gothamMedium">
                Error submitting form. Please try again.
              </p>
            )}
          </div>
          <div className="w-full sm:w-1/2 pl-4">
            <h2 className="text-xl xl:text-[20px] font-semibold font-gothamBold mb-14">
              our offices:
            </h2>
            <div className="mb-9">
              <h3 className="text-sm font-semibold font-gothamBold  text-gray-700  mb-4">
                {ourOffice && ourOffice.usa}:
              </h3>
              <p className=" w-[300px] text-sm font-gothamMedium text-gray-500">
                {ourOffice && ourOffice.uaeAddress}
              </p>
            </div>
            <div className="mb-9">
              <h3 className="text-sm font-semibold font-gothamBold text-gray-700  mb-4">
                {ourOffice && ourOffice.ksa}:
              </h3>
              <p className=" w-[300px] text-md font-gothamMedium text-gray-500">
                {ourOffice && ourOffice.ksaAddress}
              </p>
            </div>
            <div className="mb-6">
              <h3 className="text-sm font-semibold font-gothamBold text-gray-700  mb-4">
                {ourOffice && ourOffice.india}:
              </h3>
              <p className=" w-[300px] text-md font-gothamMedium text-gray-500">
                {ourOffice && ourOffice.indiaAddress}
              </p>
            </div>
          </div>
        </div>
      </div>
      <JoinOurTeam />
    </div>
  );
}

export default Contactcomponent;
