import React from "react";

interface ContactFormProps {
  selectedDate: Date | null;
}

const ContactForm: React.FC<ContactFormProps> = ({ selectedDate }) => {
  return (
    <section id="contact" className="py-16 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-8">Book a Visit</h2>
        <form className="max-w-4xl mx-auto bg-white p-8 shadow-lg rounded-lg">
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
              <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="number"
                id="number"
                className="w-full border rounded-lg px-4 py-2"
                placeholder="Your Email"
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
            className="mt-6 bg-blue-500 px-6 py-3 rounded-full text-white font-semibold hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;
