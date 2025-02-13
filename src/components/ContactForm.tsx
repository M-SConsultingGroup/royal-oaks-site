import React from "react";

interface ContactFormProps {
  selectedDate: Date | null;
}

const ContactForm: React.FC<ContactFormProps> = ({ selectedDate }) => {
  return (
    <section id="contact" className="py-20 bg-[#F8F3ED]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-[#8B7969] mb-12 uppercase tracking-wide">
          Book a Visit
        </h2>
        <form className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-3xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border rounded-lg px-4 py-2"
                placeholder="Your Name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border rounded-lg px-4 py-2"
                placeholder="Your Email"
              />
            </div>
            <div>
              <label htmlFor="number" className="block text-gray-700 font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="number"
                id="number"
                className="w-full border rounded-lg px-4 py-2"
                placeholder="Your Phone Number"
              />
            </div>
            <div>
              <label htmlFor="selected-date" className="block text-gray-700 font-semibold mb-2">
                Selected Date
              </label>
              <input
                type="text"
                id="selected-date"
                className="w-full border rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
                value={selectedDate ? selectedDate.toDateString() : "No Date Selected"}
                readOnly
              />
            </div>
          </div>
          <div className="mt-6">
            <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
              Any Comments, Questions or Concerns!
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full border rounded-lg px-4 py-2"
              placeholder="Your Message"
            ></textarea>
          </div>
          <button
            type="submit"
            className="mt-6 bg-[#8B7969] px-6 py-3 rounded-full text-white font-semibold hover:bg-[#6d5d50] transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;