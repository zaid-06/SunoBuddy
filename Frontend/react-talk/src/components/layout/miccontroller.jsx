
import React, { useState } from "react";
import { Mic, MessageCircle } from "lucide-react";

// MicChatToggle.jsx
// A compact, rounded toggle with two options: Mic and Chat.
// Uses Tailwind classes (no external CSS required).

export default function MicController({ onMicClick, onChatClick, initial = "chat" }) {
  const [mode, setMode] = useState(initial);

  function handleMic() {
    setMode("mic");
    if (onMicClick) onMicClick();
  }

  function handleChat() {
    setMode("chat");
    if (onChatClick) onChatClick();
  }

  return (
    <div className=" ml-3 flex items-center justify-center">
      <div className="inline-flex items-center rounded-full bg-white/90 shadow-lg p-1.5 gap-1">
        {/* Mic button */}
       <div className="flex flex-col items-center gap-3">
  {/* Mic button */}
  <button
    type="button"
    onClick={handleMic}
    aria-pressed={mode === "mic"}
    aria-label="Use microphone"
    className={`h-10 w-10 flex items-center justify-center rounded-full transition-all duration-150 ${
      mode === "mic"
        ? "bg-cyan-600 text-white shadow-md scale-105"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    }`}
  >
    <Mic className="h-4 w-4" />
    <span className="sr-only">Mic</span>
  </button>

  {/* Chat button */}
  <button
    type="button"
    onClick={handleChat}
    aria-pressed={mode === "chat"}
    aria-label="Open chat"
    className={`h-10 w-10 flex items-center justify-center rounded-full transition-all duration-150 ${
      mode === "chat"
        ? "bg-cyan-600 text-white sha   dow-md scale-105"
        : "bg-gray-100 text-gray-600 hover:bg-gray-200"
    }`}
  >
    <MessageCircle className="h-4 w-4" />
    <span className="sr-only">Chat</span>
  </button>
</div>

      </div>

      {/* Optional label showing active mode */}
      <div className="ml-3 text-sm font-medium text-gray-700 select-none">
        <span className="hidden sm:inline"></span>
        <span className="font-semibold"></span>
        {/* <span className="font-semibold">{mode === "mic" ? "Microphone" : "Chat"}</span> */}
      </div>
    </div>
  );
}
