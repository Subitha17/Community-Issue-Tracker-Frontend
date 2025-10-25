import { useEffect, useState } from "react";

export default function ViewIssues() {
  const [issues, setIssues] = useState([]);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({
    title: "",
    description: "",
    category: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // ✅ Fetch all issues from backend
  const fetchIssues = async () => {
    try {
      setLoading(true);
      const res = await fetch("http://localhost:5000/api/issues");
      if (!res.ok) throw new Error("Failed to fetch issues");
      const data = await res.json();
      setIssues(data);
    } catch (err) {
      setError("⚠️ Failed to load issues");
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchIssues();
  }, []);

  // ✅ Delete an issue
  const handleDelete = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/issues/${id}`, {
        method: "DELETE",
      });
      if (!res.ok) throw new Error("Failed to delete issue");
      fetchIssues();
    } catch (err) {
      console.error("Delete error:", err);
      alert("Failed to delete issue!");
    }
  };

  // ✅ Start editing
  const startEdit = (issue) => {
    setEditingId(issue._id);
    setEditData({
      title: issue.title,
      description: issue.description,
      category: issue.category,
    });
  };

  // ✅ Save updated issue
  const handleUpdate = async (id) => {
    try {
      const res = await fetch(`http://localhost:5000/api/issues/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(editData),
      });

      if (!res.ok) throw new Error("Failed to update issue");
      setEditingId(null);
      fetchIssues();
    } catch (err) {
      console.error("Update error:", err);
      alert("Failed to update issue!");
    }
  };

  return (
    <div className="container py-10">
      <h2 className="text-3xl font-bold text-center mb-6 text-indigo-900">
        All Reported Issues
      </h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-600">{error}</p>}
      {issues.length === 0 && !loading && <p>No issues reported yet.</p>}

      <div className="issues-list">
        {issues.map((issue) => (
          <div key={issue._id} className="issue-card">
            {editingId === issue._id ? (
              <>
                <input
                  type="text"
                  value={editData.title}
                  onChange={(e) =>
                    setEditData({ ...editData, title: e.target.value })
                  }
                  placeholder="Title"
                />
                <textarea
                  value={editData.description}
                  onChange={(e) =>
                    setEditData({ ...editData, description: e.target.value })
                  }
                  placeholder="Description"
                />
                <input
                  type="text"
                  value={editData.category}
                  onChange={(e) =>
                    setEditData({ ...editData, category: e.target.value })
                  }
                  placeholder="Category"
                />
                <div className="buttons">
                  <button
                    onClick={() => handleUpdate(issue._id)}
                    className="bg-green-500 text-white px-3 py-1 rounded"
                  >
                    Save
                  </button>
                  <button
                    onClick={() => setEditingId(null)}
                    className="bg-gray-400 text-white px-3 py-1 rounded"
                  >
                    Cancel
                  </button>
                </div>
              </>
            ) : (
              <>
                <h3>{issue.title}</h3>
                <p>{issue.description}</p>
                <span className="category">
                  <strong>Category:</strong> {issue.category}
                </span>
                <div className="buttons">
                  <button
                    onClick={() => startEdit(issue)}
                    className="bg-blue-500 text-white px-3 py-1 rounded"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(issue._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded"
                  >
                    Delete
                  </button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
