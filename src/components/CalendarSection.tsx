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
    if (date && isDateAvailable(date)) {
      onDateSelect(date);
    }
  };

  return (
    <section className="flex items-center py-16 bg-gray-100">
      <div className="item-center container text-center">
        <h2 className="text-4xl font-bold mb-8">Check Availability</h2>
        <div className="max-w-lg mx-auto bg-white shadow-lg p-8 rounded-lg">
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
