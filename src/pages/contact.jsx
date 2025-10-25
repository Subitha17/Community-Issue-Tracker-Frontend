export default function Connect() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-orange-50 via-yellow-50 to-pink-50 px-6 py-16">
      <h2 className="text-4xl font-extrabold text-orange-600 mb-6">Connect With Us</h2>

      <p className="max-w-2xl text-center text-gray-700 text-lg mb-10 leading-relaxed">
        Have a question, suggestion, or want to collaborate with us?  
        The <strong>Community Issue Tracker Team</strong> would love to hear from you.  
        Whether you’re reporting a bug, sharing an idea, or seeking support — we’re always
        here to connect and help make your experience better.
      </p>

      <div className="max-w-lg w-full bg-white shadow-xl rounded-2xl p-8 space-y-5 text-center border border-orange-100">
        <p className="text-gray-800 text-lg">
          📧 <strong>Email:</strong> connect@civictracker.org
        </p>
        <p className="text-gray-800 text-lg">
          ☎️ <strong>Phone:</strong> +91 91234 56789
        </p>
        <p className="text-gray-800 text-lg">
          🌍 <strong>Website:</strong> www.civictracker.org
        </p>
        <p className="text-gray-800 text-lg">
          💬 <strong>Twitter:</strong> @civic_tracker
        </p>
        <p className="text-gray-800 text-lg">
          📸 <strong>Instagram:</strong> @civic_community
        </p>
      </div>

      <div className="mt-10 text-center max-w-2xl">
        <p className="text-gray-700 text-lg leading-relaxed">
          We’re passionate about building stronger, cleaner, and safer communities —  
          and your feedback helps us get there. Don’t hesitate to reach out — your voice
          truly matters.
        </p>
      </div>
    </div>
  );
}
