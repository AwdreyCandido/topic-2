"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import TextInput from "@/src/ui/inputs/TextInput";

interface LoginData {
  email: string | null;
  password: string | null;
}

const Login = () => {
  const [loginData, setLoginData] = useState({} as LoginData);
  const router = useRouter()

  const handleLoginForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setLoginData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = () => {
    localStorage.setItem("loginData", JSON.stringify(loginData));

    router.replace('/dashboard/')
  };

  return (
    <div className="min-h-screen flex text-gray items-center justify-center px-4 text-white duration-300 bg-background">
      <div className="w-full max-w-lg bg-white backdrop-blur-lg backdrop-saturate-20  shadow-xl rounded-2xl p-6 space-y-4">
        <div className="flex flex-col text-gray items-center space-y-2 mb-8">
          <h1 className="text-heading font-semibold text-center">
            Topic
          </h1>
          <p className="text-small  text-center">
            Your Minimal Flashcards App
          </p>
        </div>

        <TextInput
          id="email"
          name="email"
          type="email"
          label="E-mail"
          placeholder="seu@email.com"
          value={loginData.email || ""}
          onChange={handleLoginForm}
          className="text-gray"
        />

        <TextInput
          id="password"
          name="password"
          type="password"
          label="Senha"
          placeholder="••••••••"
          value={loginData.password || ""}
          onChange={handleLoginForm}
          className="text-gray"
        />

        <div className="flex items-center space-x-2 mt-2 select-none">
          <input
            id="remember"
            type="checkbox"
            className="accent-secondary border-neutral-400"
          />
          <label htmlFor="remember" className="text-base text-gray">
            Lembrar de mim
          </label>
        </div>

        <button
          className="w-full text-base bg-dark-gray hover:bg-gray text-white font-medium py-3 px-4 rounded-full transition mt-8"
          onClick={submitForm}
        >
          Entrar
        </button>

        <p className="text-base text-center text-gray mt-4">
          Não tem uma conta?{" "}
          <a href="/auth/register" className="text-secondary hover:underline">
            Cadastre-se
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
