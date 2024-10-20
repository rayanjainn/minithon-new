import React, { useState } from "react";
import { Bell, Trash2, CheckCircle } from "lucide-react";

const Notification = ({
  id,
  title,
  message,
  time,
  isRead,
  onRead,
  onDelete,
}) => (
  <div
    className={`bg-white rounded-lg shadow-md p-4 mb-4 ${
      isRead ? "opacity-50" : ""
    }`}
  >
    <div className="flex justify-between items-start">
      <div className="flex-grow">
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-1">{message}</p>
        <p className="text-sm text-gray-500 mt-2">{time}</p>
      </div>
      <div className="flex space-x-2">
        {!isRead && (
          <button
            onClick={() => onRead(id)}
            className="text-green-600 hover:text-green-700"
          >
            <CheckCircle size={20} />
          </button>
        )}
        <button
          onClick={() => onDelete(id)}
          className="text-red-600 hover:text-red-700"
        >
          <Trash2 size={20} />
        </button>
      </div>
    </div>
  </div>
);

export default function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "New Eco Challenge",
      message: "Join our weekly recycling challenge!",
      time: "2 hours ago",
      isRead: false,
    },
    {
      id: 2,
      title: "Community Event",
      message: "Don't miss our upcoming tree planting event this Saturday.",
      time: "1 day ago",
      isRead: false,
    },
    {
      id: 3,
      title: "Achievement Unlocked",
      message: "Congratulations! You've earned the 'Green Thumb' badge.",
      time: "3 days ago",
      isRead: true,
    },
  ]);

  const handleReadNotification = (id) => {
    setNotifications(
      notifications.map((notif) =>
        notif.id === id ? { ...notif, isRead: true } : notif
      )
    );
  };

  const handleDeleteNotification = (id) => {
    setNotifications(notifications.filter((notif) => notif.id !== id));
  };

  return (
    <div className="min-h-screen bg-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <Bell className="mx-auto h-16 w-16 text-green-600" />
          <h1 className="mt-4 text-4xl font-extrabold text-gray-900">
            Notifications
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            Stay updated with your eco-journey progress and community events
          </p>
        </div>

        <div className="space-y-4">
          {notifications.length > 0 ? (
            notifications.map((notification) => (
              <Notification
                key={notification.id}
                {...notification}
                onRead={handleReadNotification}
                onDelete={handleDeleteNotification}
              />
            ))
          ) : (
            <div className="text-center text-gray-600 py-8">
              <p>No new notifications</p>
            </div>
          )}
        </div>

        {notifications.length > 0 && (
          <div className="mt-8 text-center">
            <button
              onClick={() => setNotifications([])}
              className="bg-red-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors duration-200"
            >
              Clear All Notifications
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
