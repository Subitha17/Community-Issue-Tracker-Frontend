import React from "react";
import { Lightbulb, MapPin, BarChart3 } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 flex flex-col items-center px-6 py-16">
      {/* 🏡 Welcome Section */}
      <div className="max-w-5xl bg-white shadow-2xl rounded-2xl p-10 mb-10 border border-orange-100 text-gray-800">
        <h1 className="text-4xl font-extrabold text-center text-orange-600 mb-6">
          Welcome to the Community Issue Tracker
        </h1>

        <p className="text-lg leading-relaxed text-center">
          The <strong>Community Issue Tracker</strong> is your one-stop hub for creating a cleaner,
          safer, and more responsive community. This dashboard allows you to manage your reports,
          track ongoing issues, and stay updated about your neighborhood’s progress — all in one
          convenient place.
        </p>
      </div>

      {/* ⚙️ Features Section */}
      <div className="max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Report an Issue */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl transition-all">
          <div className="flex justify-center mb-4 text-orange-600">
            <MapPin size={50} />
          </div>
          <h2 className="text-2xl font-semibold text-orange-600 mb-3 text-center">
            Report Issues
          </h2>
          <p className="text-gray-700 text-center">
            Found a problem in your area? Quickly report damaged roads, waste issues, or public
            hazards with just a few clicks. Every report helps make your neighborhood better.
          </p>
        </div>

        {/* Track Progress */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl transition-all">
          <div className="flex justify-center mb-4 text-pink-500">
            <BarChart3 size={50} />
          </div>
          <h2 className="text-2xl font-semibold text-pink-500 mb-3 text-center">
            Track Progress
          </h2>
          <p className="text-gray-700 text-center">
            Monitor the progress of your reported issues in real time. Stay informed as authorities
            review, assign, and resolve the cases you care about.
          </p>
        </div>

        {/* Collaborate */}
        <div className="bg-white p-8 rounded-2xl shadow-lg border border-orange-100 hover:shadow-xl transition-all">
          <div className="flex justify-center mb-4 text-yellow-500">
            <Lightbulb size={50} />
          </div>
          <h2 className="text-2xl font-semibold text-yellow-500 mb-3 text-center">
            Community Insights
          </h2>
          <p className="text-gray-700 text-center">
            Learn about common issues, see where improvements are needed, and collaborate with your
            neighbors to create real, lasting change.
          </p>
        </div>
      </div>

      {/* 💡 Final Section */}
      <div className="max-w-4xl bg-white shadow-xl rounded-2xl p-10 mt-16 border border-orange-100 text-center">
        <h3 className="text-3xl font-bold text-orange-600 mb-4">
          Together, We Can Make a Difference
        </h3>
        <p className="text-gray-700 text-lg leading-relaxed mb-8">
          Every report contributes to a stronger, more responsive community. Take a moment to share
          what needs fixing around you — and help us build a cleaner, safer, and better tomorrow.
        </p>
        <a
          href="/report"
          className="bg-gradient-to-r from-pink-500 to-orange-500 text-white px-8 py-3 rounded-full text-lg font-semibold shadow-md hover:shadow-lg hover:opacity-90 transition-all"
        >
          Report a New Issue
        </a>
      </div>
    </div>
  );
}
