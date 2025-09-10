"use client";
import { useState } from "react";

export default function Contact() {
  const [status, setStatus] = useState<string | null>(null);
  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = new FormData(e.currentTarget);
    const res = await fetch("/api/contact", { method: "POST", body: form });
    const data = await res.json();
    setStatus(data.ok ? "Mesajınız iletildi" : data.error || "Hata");
  }
  return (
    <div className="container mx-auto p-6 max-w-xl">
      <h1 className="text-2xl font-bold mb-4">İletişim</h1>
      <form onSubmit={onSubmit} className="space-y-4">
        <input
          name="name"
          className="input input-bordered w-full"
          placeholder="Ad Soyad"
          required
        />
        <input
          type="email"
          name="email"
          className="input input-bordered w-full"
          placeholder="E-posta"
          required
        />
        <textarea
          name="message"
          className="textarea textarea-bordered w-full"
          placeholder="Mesaj"
          required
        />
        <input
          type="text"
          name="company"
          className="hidden"
          tabIndex={-1}
          autoComplete="off"
        />
        <button className="btn btn-primary">Gönder</button>
      </form>
      {status && <p className="mt-3 alert alert-info">{status}</p>}
    </div>
  );
}
