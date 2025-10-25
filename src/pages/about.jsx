import React from "react";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 text-center px-8 py-12">
      <h2 className="text-4xl font-extrabold text-orange-600 mb-8">About the Community Issue Tracker</h2>

      <div className="max-w-4xl text-gray-800 text-lg leading-relaxed space-y-6 text-justify bg-white p-10 rounded-2xl shadow-xl border border-orange-100">
        <p>
          The <span className="font-semibold text-orange-600">Community Issue Tracker</span> is a
          civic engagement platform built to give every resident a voice. It allows people to
          identify, report, and follow up on issues that affect their neighborhoods — from damaged
          roads and streetlight failures to overflowing waste bins and water leaks. Our goal is to
          make community problem-solving simple, transparent, and impactful.
        </p>

        <p>
          At its core, the platform acts as a bridge between citizens and local authorities. It
          provides a structured, user-friendly way for people to submit problems while allowing
          officials to review, prioritize, and resolve them efficiently. This open channel of
          communication fosters accountability, trust, and collaboration within communities.
        </p>

        <p>
          Beyond reporting, the platform also promotes awareness and participation. Residents can
          explore issues reported by others, see what’s being addressed, and get inspired to
          contribute. Together, these small efforts add up to meaningful improvements — cleaner
          streets, safer environments, and more responsive governance.
        </p>

        <p>
          As technology continues to evolve, we aim to make civic engagement smarter and more
          data-driven. Future updates will include personalized notifications, analytics dashboards
          for authorities, and community insight tools powered by AI — helping identify recurring
          problems and optimize resources for faster resolutions.
        </p>

        <p>
          Our mission is simple but powerful: to transform everyday frustrations into opportunities
          for collective action. By empowering people with the right tools, we can shape communities
          that care, act, and thrive together.
        </p>

        <p className="font-semibold text-orange-600 text-center mt-8">
          Together, we can make our surroundings brighter, cleaner, and safer — one issue at a time.
        </p>
      </div>
    </div>
  );
}
