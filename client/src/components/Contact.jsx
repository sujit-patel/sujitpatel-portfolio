import React from "react";

function Contact() {
  return (
    <div className="flex my-14 justify-center">
      <form className="w-1/2 space-y-5 border border-slate-500 px-5 py-4 rounded-md">
        <h1 className="text-4xl font-bold text-center py-3">Contact Me</h1>
        <label className="input input-bordered flex items-center gap-2 w-1/2">
          Name
          <input
            type="text"
            className="grow"
            required
            placeholder="Enter Your Name"
          />
        </label>
        <label className="input input-bordered flex items-center gap-2 w-1/2">
          Email
          <input
            type="text"
            className="grow"
            required
            placeholder="Enter Your Email"
          />
        </label>
        <div>
          <textarea
            required
            className="textarea textarea-bordered w-full"
            placeholder="Drop Your Messages"
          ></textarea>
        </div>
        <button className="btn w-full border-slate-500 text-pink-500 btn-wide">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Contact;
