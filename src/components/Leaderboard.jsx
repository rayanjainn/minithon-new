import React, { useState } from "react";
import { Trophy, ArrowUp, ArrowDown } from "lucide-react";

const LeaderboardItem = ({ rank, name, score, change }) => (
  <div className="flex items-center justify-between p-4 bg-white rounded-lg shadow-md mb-4 hover:shadow-lg transition-shadow duration-200">
    <div className="flex items-center">
      <span className="text-2xl font-bold text-gray-500 w-12">{rank}</span>
      <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
        <span className="text-xl font-bold text-green-600">{name[0]}</span>
      </div>
      <span className="text-lg font-semibold">{name}</span>
    </div>
    <div className="flex items-center">
      <span className="text-xl font-bold text-green-600 mr-4">{score}</span>
      {change > 0 ? (
        <ArrowUp className="text-green-500" />
      ) : change < 0 ? (
        <ArrowDown className="text-red-500" />
      ) : null}
    </div>
  </div>
);

export default function LeaderBoard() {
  const [timeFrame, setTimeFrame] = useState("weekly");
  const [leaderboardData] = useState([
    { id: 1, name: "Alice Green", score: 1250, change: 2 },
    { id: 2, name: "Bob Eco", score: 1100, change: 1 },
    { id: 3, name: "Charlie Sustain", score: 950, change: -1 },
    { id: 4, name: "Diana Earth", score: 900, change: 0 },
    { id: 5, name: "Ethan Recycle", score: 850, change: 3 },
  ]);

  return (
    <div className="min-h-screen bg-green-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <Trophy className="mx-auto h-16 w-16 text-green-600" />
          <h1 className="mt-4 text-4xl font-extrabold text-gray-900">
            Eco Champions Leaderboard
          </h1>
          <p className="mt-2 text-lg text-gray-600">
            See how you stack up against other eco-warriors!
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-2xl font-bold text-gray-800">Top Performers</h2>
            <div className="flex space-x-2">
              {["weekly", "monthly", "all-time"].map((frame) => (
                <button
                  key={frame}
                  onClick={() => setTimeFrame(frame)}
                  className={`px-4 py-2 rounded-full text-sm font-medium ${
                    timeFrame === frame
                      ? "bg-green-600 text-white"
                      : "bg-green-100 text-green-600 hover:bg-green-200"
                  } transition-colors duration-200`}
                >
                  {frame.charAt(0).toUpperCase() + frame.slice(1)}
                </button>
              ))}
            </div>
          </div>

          <div className="space-y-4">
            {leaderboardData.map((user, index) => (
              <LeaderboardItem
                key={user.id}
                rank={index + 1}
                name={user.name}
                score={user.score}
                change={user.change}
              />
            ))}
          </div>
        </div>

        <div className="text-center">
          <button className="bg-green-600 text-white px-6 py-3 rounded-full text-lg font-semibold hover:bg-green-700 transition-colors duration-200">
            View Full Leaderboard
          </button>
        </div>
      </div>
    </div>
  );
}
