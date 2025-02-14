import React from "react";

interface ContactFormProps {
  selectedDate: Date | null;
}

const ContactForm: React.FC<ContactFormProps> = ({ selectedDate }) => {
  return (
    <section id="contact" className="relative py-20 bg-white overflow-hidden">
      {/* Decorative Branch Images */}
      <img
        src="modified_branch.png"
        alt="Decorative Branch"
        className="absolute top-10 left-10 w-32 h-auto rotate-[-28deg] opacity-80 z-10 hidden lg:block shadow-none"
      />
      <img
        src="modified_branch.png"
        alt="Decorative Branch"
        className="absolute bottom-20 right-10 w-24 h-auto rotate-[15deg] opacity-80 z-10 hidden lg:block shadow-none"
      />
      <img
        src="modified_branch.png"
        alt="Decorative Branch"
        className="absolute top-20 right-20 w-28 h-auto rotate-[45deg] opacity-80 z-10 hidden lg:block shadow-none"
      />
      <img
        src="modified_branch.png"
        alt="Decorative Branch"
        className="absolute bottom-10 left-20 w-20 h-auto rotate-[-10deg] opacity-80 z-10 hidden lg:block shadow-none"
      />

      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8 text-secondary">Book a Visit</h2>
        <form className="max-w-4xl mx-auto bg-white p-8 shadow-2xl rounded-xl relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-secondary font-semibold mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                placeholder="Your Name"
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-secondary font-semibold mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                placeholder="Your Email"
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label htmlFor="phone" className="block text-secondary font-semibold mb-2">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                placeholder="Your Phone Number"
              />
            </div>

            {/* Selected Date Field */}
            <div>
              <label htmlFor="selected-date" className="block text-secondary font-semibold mb-2">
                Selected Date
              </label>
              <input
                type="text"
                id="selected-date"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 bg-gray-100 cursor-not-allowed focus:outline-none"
                value={selectedDate ? selectedDate.toDateString() : "No Date Selected"}
                readOnly
              />
            </div>
          </div>

          {/* Message Field */}
          <div className="mt-6">
            <label htmlFor="message" className="block text-secondary font-semibold mb-2">
              Any Comments, Questions, or Concerns!
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              placeholder="Your Message"
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-6 w-full bg-button px-6 py-3 rounded-full text-white font-semibold hover:bg-buttonShadow transition transform hover:scale-105"
          >
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;