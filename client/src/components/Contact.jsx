import React, { useState } from "react";
import emailjs from "emailjs-com";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        process.env.REACT_APP_EMAILJS_SERVICE_ID,
        process.env.REACT_APP_EMAILJS_TEMPLATE_ID,
        formData,
        process.env.REACT_APP_EMAILJS_PUBLIC_KEY
      )
      .then(
        (result) => {
          alert("Your message has been sent!");
          setFormData({ name: "", email: "", message: "" });
        },
        (error) => {
          alert("Failed to send your message. Please try again.");
          console.error("Error:", error);
        }
      );
  };

  return (
    <div className="flex my-14 justify-center">
      <form
        className="w-1/2 space-y-5 border border-slate-500 px-5 py-4 rounded-md"
        onSubmit={handleSubmit}
      >
        <h1 className="text-4xl font-bold text-center py-3">Contact Me</h1>
        <label className="input input-bordered flex items-center gap-2 w-1/2">
          Name
          <input
            type="text"
            name="name"
            className="grow"
            required
            placeholder="Enter Your Name"
            value={formData.name}
            onChange={handleChange}
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 w-1/2">
          Email
          <input
            type="text"
            name="email"
            className="grow"
            required
            placeholder="Enter Your Email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <div>
          <textarea
            name="message"
            required
            className="textarea textarea-bordered w-full"
            placeholder="Drop Your Messages"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>
        <button
          type="submit"
          className="btn w-full border-slate-500 text-pink-500 btn-wide"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
