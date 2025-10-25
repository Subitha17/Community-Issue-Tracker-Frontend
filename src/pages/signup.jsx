export default function signup() {
  return (
    <div className="max-w-md mx-auto bg-white p-6 shadow-md rounded-lg">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <input className="w-full border p-2 mb-2" placeholder="Name" />
      <input className="w-full border p-2 mb-2" placeholder="Email" />
      <input className="w-full border p-2 mb-4" placeholder="Password" type="password" />
      <button className="bg-green-600 text-white px-4 py-2 rounded w-full">Sign Up</button>
    </div>
  );
}