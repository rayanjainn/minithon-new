import React, { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const DAYS = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

const Event = ({ title, time }) => (
  <div className="bg-green-100 rounded p-2 mb-2">
    <p className="font-semibold text-green-800">{title}</p>
    <p className="text-sm text-green-600">{time}</p>
  </div>
);

export default function Calender() {
  const [currentDate, setCurrentDate] = useState(new Date());

  const daysInMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth() + 1,
    0
  ).getDate();
  const firstDayOfMonth = new Date(
    currentDate.getFullYear(),
    currentDate.getMonth(),
    1
  ).getDay();

  const prevMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, 1)
    );
  };

  const nextMonth = () => {
    setCurrentDate(
      new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 1)
    );
  };

  return (
    <div className="min-h-screen bg-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-extrabold text-gray-900">
            Eco Events Calendar
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Stay updated with upcoming eco-friendly events and activities
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">
              {MONTHS[currentDate.getMonth()]} {currentDate.getFullYear()}
            </h2>
            <div className="flex space-x-2">
              <button
                onClick={prevMonth}
                className="p-2 rounded-full hover:bg-green-100"
              >
                <ChevronLeft className="text-green-600" />
              </button>
              <button
                onClick={nextMonth}
                className="p-2 rounded-full hover:bg-green-100"
              >
                <ChevronRight className="text-green-600" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-7 gap-2 mb-4">
            {DAYS.map((day) => (
              <div
                key={day}
                className="text-center font-semibold text-gray-600"
              >
                {day}
              </div>
            ))}
          </div>

          <div className="grid grid-cols-7 gap-2">
            {Array.from({ length: firstDayOfMonth }).map((_, index) => (
              <div
                key={`empty-${index}`}
                className="h-24 bg-gray-100 rounded"
              ></div>
            ))}
            {Array.from({ length: daysInMonth }).map((_, index) => (
              <div
                key={index}
                className="h-24 bg-white border border-gray-200 rounded p-2"
              >
                <div className="font-semibold mb-1">{index + 1}</div>
                {index === 14 && (
                  <Event title="Community Cleanup" time="10:00 AM" />
                )}
                {index === 22 && <Event title="Tree Planting" time="2:00 PM" />}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
