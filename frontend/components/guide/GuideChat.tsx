"use client";

import { useEffect, useRef, useState } from "react";
import { Send, Sparkles, Loader2 } from "lucide-react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

type Message = {
  role: "user" | "assistant";
  content: string;
};

export default function GuideChat() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

  const bottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  }, [messages, loading]);

  async function sendMessage(text?: string) {
    const question = (text ?? prompt).trim();

    if (!question) return;

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        content: question,
      },
    ]);

    setPrompt("");
    setLoading(true);

    try {
      const response = await fetch("/api/guide", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
  messages: [
    ...messages,
    {
      role: "user",
      content: question,
    },
  ],
}),
      });

      const data = await response.json();

      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content: data.answer,
        },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          role: "assistant",
          content:
            "Sorry, something went wrong while contacting VentureOut AI.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  }

  const suggestions = [
    "Best restaurants in Tokyo",
    "Best places in Switzerland",
    "Hidden gems in Kerala",
    "Is Japan expensive?",
    "Things to do in Bali",
  ];

  return (
    <div className="mx-auto flex max-w-5xl flex-col">

      {/* Header */}

      <div className="mb-8 text-center">

        <div className="mb-5 inline-flex rounded-full bg-blue-100 px-4 py-2 text-blue-700">
          <Sparkles className="mr-2 h-4 w-4" />
          VentureOut AI
        </div>

        <h1 className="text-5xl font-semibold tracking-tight text-slate-900">
          Your AI Travel Guide
        </h1>

        <p className="mt-4 text-lg text-slate-500">
          Ask anything about destinations, hotels, restaurants,
          visas, attractions, budgets or travel planning.
        </p>

      </div>

      {/* Suggestions */}

      {messages.length === 0 && (
        <div className="mb-10 grid gap-3 md:grid-cols-2">

          {suggestions.map((item) => (
            <button
              key={item}
              onClick={() => sendMessage(item)}
              className="rounded-2xl border border-slate-200 bg-white p-5 text-left transition hover:border-blue-500 hover:shadow-md"
            >
              {item}
            </button>
          ))}

        </div>
      )}

      {/* Chat */}

      <div className="space-y-6">

        {messages.map((message, index) => (

          <div
            key={index}
            className={`rounded-3xl p-6 ${
              message.role === "user"
                ? "ml-auto max-w-xl bg-blue-600 text-white"
                : "border border-slate-200 bg-white shadow-sm"
            }`}
          >

            {message.role === "assistant" ? (

              <div
                className="
                  prose
                  prose-slate
                  max-w-none
                  prose-headings:font-semibold
                  prose-headings:text-slate-900
                  prose-p:text-slate-700
                  prose-p:leading-8
                  prose-li:text-slate-700
                  prose-ul:my-4
                  prose-ol:my-4
                  prose-strong:text-slate-900
                "
              >
                <ReactMarkdown
                  remarkPlugins={[remarkGfm]}
                  components={{
                    h1: ({ children }) => (
                      <h1 className="mb-5 text-3xl font-bold">
                        {children}
                      </h1>
                    ),

                    h2: ({ children }) => (
                      <h2 className="mt-8 mb-3 text-2xl font-semibold">
                        {children}
                      </h2>
                    ),

                    h3: ({ children }) => (
                      <h3 className="mt-6 mb-2 text-xl font-semibold">
                        {children}
                      </h3>
                    ),

                    p: ({ children }) => (
                      <p className="mb-4 leading-8">
                        {children}
                      </p>
                    ),

                    ul: ({ children }) => (
                      <ul className="list-disc pl-6">
                        {children}
                      </ul>
                    ),

                    ol: ({ children }) => (
                      <ol className="list-decimal pl-6">
                        {children}
                      </ol>
                    ),

                    blockquote: ({ children }) => (
                      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-slate-600">
                        {children}
                      </blockquote>
                    ),

                    code: ({ children }) => (
                      <code className="rounded bg-slate-100 px-1.5 py-1 text-sm">
                        {children}
                      </code>
                    ),
                  }}
                >
                  {message.content}
                </ReactMarkdown>
              </div>

            ) : (

              <p className="whitespace-pre-wrap leading-8 text-white">
                {message.content}
              </p>

            )}

          </div>

        ))}

        {loading && (
          <div className="flex items-center gap-3 rounded-3xl border border-slate-200 bg-white p-6">
            <Loader2 className="h-5 w-5 animate-spin text-blue-600" />
            VentureOut AI is thinking...
          </div>
        )}

        <div ref={bottomRef} />

      </div>

      {/* Input */}

      <div className="sticky bottom-6 mt-10">

        <div className="flex items-center rounded-full border border-slate-300 bg-white p-2 shadow-lg">

          <input
            className="flex-1 rounded-full px-6 py-4 outline-none"
            placeholder="Ask anything about travel..."
            value={prompt}
            onChange={(e) => setPrompt(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") {
                sendMessage();
              }
            }}
          />

          <button
            onClick={() => sendMessage()}
            disabled={loading}
            className="rounded-full bg-blue-600 p-4 text-white transition hover:bg-blue-700 disabled:opacity-50"
          >
            <Send size={18} />
          </button>

        </div>

      </div>

    </div>
  );
}