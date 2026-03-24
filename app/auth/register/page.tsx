"use client";

import React, { useState } from "react";
import TextInput from "@/src/ui/inputs/TextInput";
import { useRouter } from "next/navigation";

interface RegisterData {
  username: string;
  email: string;
  password: string;
}

const Register = () => {
  const [registerData, setRegisterData] = useState<RegisterData>({
    username: "",
    email: "",
    password: "",
  });

  const router = useRouter();

  const handleRegisterForm = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.currentTarget;
    setRegisterData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const submitForm = () => {
    localStorage.setItem("registerData", JSON.stringify(registerData));

    router.replace("/dashboard/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 text-gray duration-300 bg-background">
      <div className="w-full max-w-lg text-gray bg-white backdrop-blur-lg backdrop-saturate-20  shadow-xl rounded-2xl p-6 space-y-4">
        <div className="flex flex-col items-center space-y-2 mb-8">
          <h1 className="text-xl font-semibold text-center">
            Crie sua conta
          </h1>
        </div>

        <TextInput
          id="username"
          name="username"
          label="Usuário"
          placeholder="Nome de Usuário"
          value={registerData.username}
          onChange={handleRegisterForm}
          className="text-gray"
        />

        <TextInput
          id="email"
          name="email"
          type="email"
          label="E-mail"
          placeholder="seu@email.com"
          value={registerData.email}
          onChange={handleRegisterForm}
          className="text-gray"
        />

        <TextInput
          id="password"
          name="password"
          type="password"
          label="Senha"
          placeholder="••••••••"
          value={registerData.password}
          onChange={handleRegisterForm}
          className="text-gray"
        />

        <button
          className="w-full text-base bg-dark-gray hover:bg-gray text-white font-medium py-3 px-4 rounded-full transition mt-8"
          onClick={submitForm}
        >
          Cadastrar
        </button>

        <p className="text-base text-center text-gray mt-4">
          Já tem uma conta?{" "}
          <a href="/auth/login" className="text-secondary hover:underline">
            Entrar
          </a>
        </p>
      </div>
    </div>
  );
};

export default Register;
