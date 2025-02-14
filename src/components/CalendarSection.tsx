import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

interface CalendarSectionProps {
  onDateSelect: (date: Date | null) => void;
}

const CalendarSection: React.FC<CalendarSectionProps> = ({ onDateSelect }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);

  const today = new Date();
  const unavailableDates = ["2024-11-25", "2024-11-26", "2024-12-01"];

  const isDateAvailable = (date: Date) => {
    const formattedDate = date.toISOString().split("T")[0];
    return date >= today && !unavailableDates.includes(formattedDate);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    onDateSelect(date);
  };

  return (
    <section className="relative py-20 bg-primary" data-aos="fade-up">
      {/* Decorative Branch Images */}
      <img
        src="branch.png"
        alt="Decorative Branch"
        className="absolute top-10 left-10 w-32 h-auto rotate-[-28deg] opacity-80 z-10 hidden lg:block shadow-none"
        data-aos="fade-right"
      />
      <img
        src="branch.png"
        alt="Decorative Branch"
        className="absolute bottom-20 right-10 w-24 h-auto rotate-[15deg] opacity-80 z-10 hidden lg:block shadow-none"
        data-aos="fade-left"
      />
      <img
        src="branch.png"
        alt="Decorative Branch"
        className="absolute top-20 right-20 w-28 h-auto rotate-[45deg] opacity-80 z-10 hidden lg:block shadow-none"
        data-aos="fade-right"
      />
      <img
        src="branch.png"
        alt="Decorative Branch"
        className="absolute bottom-10 left-20 w-20 h-auto rotate-[-10deg] opacity-80 z-10 hidden lg:block shadow-none"
        data-aos="fade-left"
      />

      {/* Centered Calendar Section */}
      <div className="container mx-auto px-6 flex justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold mb-8 text-white">Check Availability</h2>
          <div className="max-w-lg mx-auto bg-white shadow-lg p-8 rounded-lg relative z-20">
            <Calendar
              onChange={(date) => handleDateChange(date as Date | null)}
              value={selectedDate}
              tileDisabled={({ date }) => !isDateAvailable(date)}
              className="calendar-custom"
            />
            <div className="mt-6">
              <h3 className="text-lg font-semibold">
                Selected Date:{" "}
                <span className="text-blue-500">
                  {selectedDate ? selectedDate.toDateString() : "None"}
                </span>
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CalendarSection;