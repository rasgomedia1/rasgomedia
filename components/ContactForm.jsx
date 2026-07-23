"use client";

import { useState } from "react";
import content from "../content.json";

const f = content.contacto.form;

export default function ContactForm() {
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [mensaje, setMensaje] = useState("");
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    setError(false);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nombre, correo, mensaje }),
      });
      if (!res.ok) throw new Error("send_failed");
      setSent(true);
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="rounded-md border border-border bg-muted p-6">
        <p className="text-base font-bold text-foreground mb-1">
          {f.successTitle}
        </p>
        <p className="text-sm text-muted-foreground">{f.successText}</p>
      </div>
    );
  }

  return (
    <form className="space-y-5" onSubmit={handleSubmit}>
      <div>
        <label
          htmlFor="nombre"
          className="block text-sm font-semibold text-foreground mb-1"
        >
          {f.nombreLabel}
        </label>
        <input
          id="nombre"
          type="text"
          required
          placeholder={f.nombrePlaceholder}
          value={nombre}
          onChange={(e) => setNombre(e.target.value)}
          className="w-full border border-border rounded-md px-4 py-2.5 text-sm text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-semibold text-foreground mb-1"
        >
          {f.emailLabel}
        </label>
        <input
          id="email"
          type="email"
          required
          placeholder={f.emailPlaceholder}
          value={correo}
          onChange={(e) => setCorreo(e.target.value)}
          className="w-full border border-border rounded-md px-4 py-2.5 text-sm text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-primary"
        />
      </div>
      <div>
        <label
          htmlFor="mensaje"
          className="block text-sm font-semibold text-foreground mb-1"
        >
          <span>{f.mensajeLabel}</span>
          <span className="text-muted-foreground font-normal ml-2">
            ({mensaje.length}/{f.mensajeMax})
          </span>
        </label>
        <textarea
          id="mensaje"
          required
          maxLength={f.mensajeMax}
          rows={5}
          placeholder={f.mensajePlaceholder}
          value={mensaje}
          onChange={(e) => setMensaje(e.target.value)}
          className="w-full border border-border rounded-md px-4 py-2.5 text-sm text-foreground bg-white focus:outline-none focus:ring-2 focus:ring-primary resize-none"
        />
      </div>
      {error && (
        <p className="text-sm text-red-600" role="alert">
          {f.errorText}
        </p>
      )}
      <button
        type="submit"
        disabled={sending}
        className="bg-primary text-white font-semibold px-8 py-3 rounded-md disabled:opacity-60 hover:opacity-90 transition-opacity"
      >
        {sending ? f.submitting : f.submit}
      </button>
    </form>
  );
}
