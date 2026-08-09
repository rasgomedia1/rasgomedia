import content from "../content.json";

export default function WhatsAppFloat() {
  const { phone, message, label } = content.site.whatsapp;
  const digits = phone.replace(/[^\d]/g, "");
  const href = `https://wa.me/${digits}?text=${encodeURIComponent(message)}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      title={label}
      className="fixed z-40 flex items-center justify-center w-14 h-14 rounded-full bg-[#128C4A] text-white shadow-[0_10px_28px_-6px_rgba(0,0,0,.55)] transition-transform duration-300 hover:scale-110 active:scale-95"
      style={{
        right: "max(1.25rem, env(safe-area-inset-right))",
        bottom: "max(1.25rem, env(safe-area-inset-bottom))",
        filter: "contrast(1.3)",
      }}
    >
      <span className="absolute inline-flex h-full w-full rounded-full bg-[#128C4A] opacity-60 animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" />
      <svg
        viewBox="0 0 32 32"
        width="30"
        height="30"
        fill="currentColor"
        className="relative"
        aria-hidden="true"
      >
        <path d="M16.01 3C9.38 3 4 8.36 4 15c0 2.34.66 4.53 1.8 6.4L4 29l7.8-1.75A11.9 11.9 0 0 0 16.01 27C22.64 27 28 21.64 28 15S22.64 3 16.01 3Zm0 21.9c-1.97 0-3.9-.53-5.58-1.53l-.4-.24-4.63 1.04 1.02-4.5-.26-.42A9.85 9.85 0 0 1 6.1 15c0-5.46 4.45-9.9 9.91-9.9 5.46 0 9.9 4.44 9.9 9.9 0 5.46-4.44 9.9-9.9 9.9Zm5.42-7.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.38-1.47-.88-.78-1.47-1.75-1.65-2.05-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5-.17 0-.37-.02-.57-.02s-.52.07-.8.37c-.27.3-1.04 1.02-1.04 2.48 0 1.46 1.07 2.87 1.22 3.07.15.2 2.1 3.2 5.08 4.49.71.31 1.26.49 1.69.62.71.23 1.36.2 1.87.12.57-.08 1.76-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.13-.27-.2-.57-.35Z" />
      </svg>
    </a>
  );
}
