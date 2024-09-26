import React from "react";

export default function FormContact() {
  return (
    <div className="bg-white rounded-sm p-7 h-full flex flex-col justify-between">
      <h2 className="text-xl font-semibold mb-4 p-2">SAY SOMETHING</h2>
      <form action="#" method="POST" className="flex-grow flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Name *"
              required
              className="mt-1 p-2 border-b border-slate-300 text-slate-500 focus:outline-none"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Email *"
              required
              className="mt-1 p-2 border-b border-slate-300 text-slate-500 focus:outline-none"
            />
          </div>
        </div>

        <div className="flex flex-col mt-4">
          <input
            type="text"
            id="subject"
            name="subject"
            placeholder="Subject *"
            required
            className="mt-1 p-2 border-b border-slate-300 text-slate-500 focus:outline-none"
          />
        </div>

        <div className="flex flex-col mt-4">
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Your message *"
            required
            className="mt-1 p-2 border-b border-slate-300 text-slate-500 focus:outline-none"
          ></textarea>
        </div>

        <div className="mt-auto flex justify-end">
          <button
            type="submit"
            className="mt-6 bg-teal-600 text-white px-5 py-3 text-sm rounded-sm hover:bg-teal-700 transition-colors duration-300"
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
}
