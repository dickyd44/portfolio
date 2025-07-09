import { useEmailStore } from "@/src/store/email";

export default function FormContact() {
  const { form, sendEmail } = useEmailStore();

  return (
    <div className="bg-white dark:bg-gray-800 rounded-sm p-7 h-full flex flex-col justify-between">
      <h2 className="text-xl font-semibold mb-4 p-2">SAY SOMETHING</h2>
      <form ref={form} onSubmit={sendEmail} className="flex-grow flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="flex flex-col">
            <input
              type="text"
              id="name"
              name="from_name"
              placeholder="Name *"
              required
              className="mt-1 p-2 border-b border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 bg-transparent focus:outline-none focus:border-galaxy_core dark:focus:border-galaxy"
            />
          </div>
          <div className="flex flex-col">
            <input
              type="email"
              id="email"
              name="reply_to"
              placeholder="Email *"
              required
              className="mt-1 p-2 border-b border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 bg-transparent focus:outline-none focus:border-galaxy_core dark:focus:border-galaxy"
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
            className="mt-1 p-2 border-b border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 bg-transparent focus:outline-none focus:border-galaxy_core dark:focus:border-galaxy"
          />
        </div>

        <div className="flex flex-col mt-4">
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Your message *"
            required
            className="mt-1 p-2 border-b border-slate-300 dark:border-slate-600 text-slate-500 dark:text-slate-400 bg-transparent focus:outline-none focus:border-galaxy_core dark:focus:border-galaxy resize-none"
          ></textarea>
        </div>

        <div className="mt-auto flex justify-end">
          <button
            type="submit"
            className="mt-6 bg-galaxy_core text-white px-5 py-3 text-sm rounded-sm hover:bg-galaxy_dark transition-colors duration-300"
          >
            SEND MESSAGE
          </button>
        </div>
      </form>
    </div>
  );
}
