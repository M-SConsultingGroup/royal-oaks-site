import React, { useState } from "react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "@/styles/calendarStyles.css";

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
    if (date && isDateAvailable(date)) {
      onDateSelect(date);
    }
  };

  return (
    <section className="py-20 bg-[#F8F3ED]">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-5xl font-bold text-[#8B7969] mb-12 uppercase tracking-wide">
          Check Availability
        </h2>
        <div className="max-w-lg mx-auto bg-white shadow-lg p-8 rounded-3xl">
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
    </section>
  );
};

export default CalendarSection;