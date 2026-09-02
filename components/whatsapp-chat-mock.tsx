"use client";

import { MessageCircle } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const CHAT = [
  { from: "buyer" as const, text: "Hi, is the Marina 2BR still available?" },
  { from: "bot" as const, text: "Yes — happy to help. What's your budget range for this area?" },
  { from: "buyer" as const, text: "Around 2.5M AED, looking to move in 3 months." },
  { from: "bot" as const, text: "Got it. Are you buying for yourself or as an investment?" },
  { from: "buyer" as const, text: "Personal use — relocating from London." },
  {
    from: "bot" as const,
    text: "Perfect. I'm connecting you with your agent now — they have your details and will follow up shortly.",
  },
] as const;

const RECEIVE_DELAY_MS = 900;
const TYPING_DURATION_MS = 1100;
const LOOP_PAUSE_MS = 3200;

function delay(ms: number, signal: AbortSignal) {
  return new Promise<void>((resolve) => {
    const id = setTimeout(resolve, ms);
    signal.addEventListener("abort", () => {
      clearTimeout(id);
      resolve();
    });
  });
}

function TypingIndicator() {
  return (
    <div className="flex justify-start" aria-hidden>
      <div className="flex items-center gap-1 rounded-lg rounded-tl-none bg-[#1f2c34] px-3 py-2.5">
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:0ms]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:150ms]" />
        <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-white/50 [animation-delay:300ms]" />
      </div>
    </div>
  );
}

export function WhatsAppChatMock() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const controller = new AbortController();
    const { signal } = controller;

    const run = async () => {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (reduced) {
        setVisibleCount(CHAT.length);
        return;
      }

      while (!signal.aborted) {
        setVisibleCount(0);
        setTyping(false);

        for (let i = 0; i < CHAT.length; i++) {
          if (signal.aborted) return;
          const msg = CHAT[i];

          if (msg.from === "bot") {
            setTyping(true);
            await delay(TYPING_DURATION_MS, signal);
            if (signal.aborted) return;
            setTyping(false);
          } else {
            await delay(RECEIVE_DELAY_MS, signal);
            if (signal.aborted) return;
          }

          setVisibleCount(i + 1);
        }

        await delay(LOOP_PAUSE_MS, signal);
      }
    };

    run();
    return () => controller.abort();
  }, []);

  useEffect(() => {
    scrollRef.current?.scrollTo({
      top: scrollRef.current.scrollHeight,
      behavior: "smooth",
    });
  }, [visibleCount, typing]);

  const visible = CHAT.slice(0, visibleCount);

  return (
    <div
      className="mx-auto w-full max-w-[400px] overflow-hidden rounded-2xl border border-stroke bg-[#0b141a] shadow-2xl shadow-black/50"
      aria-label="WhatsApp qualification conversation"
    >
      <div className="flex items-center gap-3 border-b border-white/10 bg-[#1f2c34] px-4 py-3">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gold/20 text-gold">
          <MessageCircle className="h-4 w-4" aria-hidden />
        </span>
        <div>
          <p className="text-[14px] font-medium text-white">Viilasa Qualifier</p>
          <p className="text-[12px] text-white/50">{typing ? "typing…" : "online"}</p>
        </div>
      </div>
      <div
        ref={scrollRef}
        className="max-h-[340px] space-y-3 overflow-y-auto bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2240%22%20height%3D%2240%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%3E%3Cpath%20d%3D%22M0%200h40v40H0z%22%20fill%3D%22%230b141a%22%2F%3E%3Cpath%20d%3D%22M0%2040L40%200%22%20stroke%3D%22%231f2c34%22%20stroke-width%3D%220.5%22%2F%3E%3C%2Fsvg%3E')] p-4"
      >
        {visible.map((msg, idx) => (
          <div
            key={`${idx}-${msg.text}`}
            className={`chat-msg-enter flex ${msg.from === "buyer" ? "justify-end" : "justify-start"}`}
          >
            <p
              className={`max-w-[85%] rounded-lg px-3 py-2 text-[13px] leading-[1.5] ${
                msg.from === "buyer"
                  ? "rounded-tr-none bg-[#005c4b] text-white"
                  : "rounded-tl-none bg-[#1f2c34] text-white/90"
              }`}
            >
              {msg.text}
            </p>
          </div>
        ))}
        {typing && <TypingIndicator />}
      </div>
    </div>
  );
}
