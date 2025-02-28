"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const LoginPage = () => {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields.");
      return;
    }

    if (email === "teste@teste.com" && password === "123456") {
      router.push("/admin");
    } else {
      setError("Invalid credentials.");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white-900 to-white">
      <div className="bg-white p-8 shadow-2xl rounded-2xl w-[400px]">
        {/* Título */}
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Welcome
        </h2>

        {/* Mensagem de erro */}
        {error && (
          <p className="text-red-500 text-center bg-red-100 py-2 rounded-md mb-4">
            {error}
          </p>
        )}

        {/* Formulário */}
        <form onSubmit={handleLogin} className="flex flex-col">
          <label className="text-sm font-medium text-gray-700">Email:</label>
          <input
            type="email"
            className="border border-gray-300 rounded-lg p-3 mb-3 focus:ring-2 focus:ring-blue-500 outline-none transition"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <label className="text-sm font-medium text-gray-700">Password:</label>
          <input
            type="password"
            className="border border-gray-300 rounded-lg p-3 mb-4 focus:ring-2 focus:ring-blue-500 outline-none transition"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-600 text-white font-bold py-3 rounded-lg hover:bg-blue-700 transition-all shadow-md"
          >
            Entrar
          </button>
        </form>

        {/* Rodapé */}
        <p className="text-center text-gray-500 text-sm mt-4">
        Forgot your password?{" "}
          <a href="#" className="text-blue-600 hover:underline">
            Retrieve it here
          </a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
