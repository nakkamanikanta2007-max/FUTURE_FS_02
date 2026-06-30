import { useState } from "react";

export default function Login({ onLogin }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const login = (e) => {
    e.preventDefault();

    if (
      email === "admin@leadsphere.com" &&
      password === "admin123"
    ) {
      localStorage.setItem("loggedIn", "true");
      onLogin();
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <div className="min-h-screen bg-slate-900 flex justify-center items-center">

      <form
        onSubmit={login}
        className="bg-white p-10 rounded-2xl shadow-2xl w-96"
      >

        <h1 className="text-4xl font-bold text-center text-cyan-600">
          LeadSphere
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          CRM Pro Login
        </p>

        <input
          type="email"
          placeholder="Email"
          className="w-full border p-3 rounded-lg mb-4"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full border p-3 rounded-lg mb-6"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          className="w-full bg-cyan-500 hover:bg-cyan-600 text-white p-3 rounded-lg"
        >
          Login
        </button>

        <div className="mt-6 text-sm text-gray-500 text-center">
          Demo Login
          <br />
          admin@leadsphere.com
          <br />
          admin123
        </div>

      </form>

    </div>
  );
}