import { useState } from "react";

export default function ReportIssue() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!title.trim() || !description.trim() || !category.trim()) {
      alert("Please fill all fields before submitting.");
      return;
    }

    const issueData = { title, description, category };

    try {
      const response = await fetch("http://community-issue-tracker-frontend.vercel.app/api/issues", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(issueData),
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        console.error("Failed to submit issue");
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  if (submitted) {
    return (
      <div className="text-center mt-10">
        <h2 className="text-xl font-bold text-green-700">✅ Thank You!</h2>
        <p>Your issue has been submitted successfully and will be resolved soon.</p>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-6 shadow-md rounded-lg mt-10"
    >
      <h2 className="text-2xl font-bold mb-4 text-center">Report an Issue</h2>

      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter issue title"
        className="w-full border p-2 mb-4 rounded"
      />

      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="w-full border p-2 mb-4 rounded"
        placeholder="Describe the issue in detail..."
        rows={4}
      ></textarea>

      <select
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="w-full border p-2 mb-4 rounded"
      >
        <option value="">Select Category</option>
        <option value="Public">Public</option>
        <option value="Infrastructure">Infrastructure</option>
        <option value="Environment">Environment</option>
        <option value="Other">Other</option>
      </select>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded w-full"
      >
        Submit
      </button>
    </form>
  );
}
