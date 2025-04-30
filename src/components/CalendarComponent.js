import React, { useState } from 'react';
import Calendar from 'react-calendar';// Import default styles
import './calender-style.css'; // Custom styles for the calendar  

const CalendarComponent = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (newDate) => {
    setDate(newDate);
    // Add logic for handling the selected date, like showing tasks for that date.
  };

  return (
    <div className="calendar-container">
      <h3>Productivity Calendar</h3>
      <Calendar
        onChange={handleDateChange}
        value={date}
        tileClassName="calendar-tile"
      />
    </div>
  );
};

export default CalendarComponent;
