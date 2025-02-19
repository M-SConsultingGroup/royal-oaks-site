import { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const API_URL = `${window.location.origin}`;

const ContactForm = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isCalendarVisible, setIsCalendarVisible] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const today = new Date();

  const isDateAvailable = (date: Date) => {
    return date >= today;
  };

  const handleDateChange = (date: Date | null) => {
    if (date && isDateAvailable(date)) {
      setSelectedDate(date);
      setIsCalendarVisible(false);
    }
  };

  const toggleCalendar = () => {
    setIsCalendarVisible(!isCalendarVisible);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    
    // Validate form inputs except for the message field
    if (!name || !email || !phone || !selectedDate) {
      setError('Name, email, phone, and date are required.');
      return;
    }
    setError(''); // Clear any previous errors
  
    try {
      const response = await fetch(`${API_URL}/submit-form`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name,
          email,
          phone,
          message, // This can be empty
          date: selectedDate.toDateString(),
        }),
      });
  
      if (response.ok) {
        // Successful submission
        setSuccessMessage('Form submitted successfully!');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
        setSelectedDate(null);
      } else {
        const responseData = await response.json();
        setError(responseData.error || 'Failed to submit the form.');
      }
    } catch (error) {
      setError('Failed to communicate with the server.');
    }
  };
  
  return (
    <section id="contact" className="relative py-20 bg-button overflow-hidden" data-aos="fade-up">
      {/* Decorative Branch Images */}
      <img
        src="modified_branch.png"
        alt="Decorative Branch"
        className="absolute top-10 left-10 w-32 h-auto rotate-[-28deg] opacity-80 z-10 hidden lg:block shadow-none"
        data-aos="fade-right"
      />
      <img
        src="modified_branch.png"
        alt="Decorative Branch"
        className="absolute bottom-20 right-10 w-24 h-auto rotate-[15deg] opacity-80 z-10 hidden lg:block shadow-none"
        data-aos="fade-left"
      />
      <img
        src="modified_branch.png"
        alt="Decorative Branch"
        className="absolute top-20 right-20 w-28 h-auto rotate-[45deg] opacity-80 z-10 hidden lg:block shadow-none"
        data-aos="fade-right"
      />
      <img
        src="modified_branch.png"
        alt="Decorative Branch"
        className="absolute bottom-10 left-20 w-20 h-auto rotate-[-10deg] opacity-80 z-10 hidden lg:block shadow-none"
        data-aos="fade-left"
      />

      <div className="container mx-auto px-6">
        {/* Updated h2 with font-serif */}
        <h2 className="text-4xl font-bold text-center mb-8 text-white font-serif">Book a Visit</h2>

        {/* Display success or error message */}
        {successMessage && <div className="mb-4 text-green-500">{successMessage}</div>}
        {error && <div className="mb-4 text-red-500">{error}</div>}

        <form onSubmit={handleSubmit} className="max-w-4xl mx-auto bg-white p-8 shadow-2xl rounded-xl relative z-20">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="block text-secondary font-semibold mb-2 font-serif">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                placeholder="Your Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>

            {/* Email Field */}
            <div>
              <label htmlFor="email" className="block text-secondary font-semibold mb-2 font-serif">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                placeholder="Your Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            {/* Phone Number Field */}
            <div>
              <label htmlFor="phone" className="block text-secondary font-semibold mb-2 font-serif">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
                placeholder="Your Phone Number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            {/* Selected Date Field */}
            <div className="relative">
              <label htmlFor="selected-date" className="block text-secondary font-semibold mb-2 font-serif">
                Selected Date
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="selected-date"
                  className="w-full border rounded-lg px-4 py-2 bg-gray-100 cursor-not-allowed"
                  value={selectedDate ? selectedDate.toDateString() : "No Date Selected"}
                  readOnly
                />
                <button
                  type="button"
                  className="absolute right-2 top-2 bg-button text-white px-3 py-1 rounded-full"
                  onClick={toggleCalendar}
                >
                  {isCalendarVisible ? "Hide" : "Select Date"}
                </button>
              </div>

              <div
                className={`absolute right-0 top-full mt-2 z-50 bg-white shadow-lg rounded-lg p-4 transition-all duration-300 ${
                  isCalendarVisible ? "opacity-100 scale-100" : "opacity-0 scale-95 pointer-events-none"
                }`}
              >
                <Calendar
                  onChange={(date) => handleDateChange(date as Date | null)}
                  value={selectedDate}
                  tileDisabled={({ date }) => !isDateAvailable(date)}
                  className="react-calendar"
                />
              </div>
            </div>
          </div>

          {/* Message Field */}
          <div className="mt-6">
            <label htmlFor="message" className="block text-secondary font-semibold mb-2 font-serif">
              Any Comments, Questions, or Concerns!
            </label>
            <textarea
              id="message"
              rows={5}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition"
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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