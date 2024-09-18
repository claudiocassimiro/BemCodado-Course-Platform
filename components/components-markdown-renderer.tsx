"use client";

import React from "react";
import ReactMarkdown from "react-markdown";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { vscDarkPlus } from "react-syntax-highlighter/dist/esm/styles/prism";

interface MarkdownRendererProps {
  content: string;
}

export function MarkdownRendererComponent({ content }: MarkdownRendererProps) {
  return (
    <section className="markdown-content prose prose-invert max-w-none">
      <ReactMarkdown
        components={{
          h1: ({ ...props }) => (
            <h1
              className="text-4xl font-extrabold text-gray-200 mt-10 mb-6"
              {...props}
            />
          ),
          h2: ({ ...props }) => (
            <h2
              className="text-3xl font-semibold text-gray-200 mt-8 mb-4"
              {...props}
            />
          ),
          h3: ({ ...props }) => (
            <h3
              className="text-2xl font-medium text-gray-200 mt-6 mb-3"
              {...props}
            />
          ),
          p: ({ ...props }) => (
            <p
              className="text-lg leading-relaxed mb-6 text-gray-200"
              {...props}
            />
          ),
          ul: ({ ...props }) => (
            <ul
              className="list-disc pl-6 mb-5 space-y-2 text-gray-300"
              {...props}
            />
          ),
          ol: ({ ...props }) => (
            <ol
              className="list-decimal pl-6 mb-5 space-y-2 text-gray-300"
              {...props}
            />
          ),
          li: ({ ...props }) => <li className="mb-2" {...props} />,
          a: ({ ...props }) => (
            <a
              className="text-blue-500 hover:underline hover:text-blue-400 transition-all duration-200"
              {...props}
            />
          ),
          blockquote: ({ ...props }) => (
            <blockquote
              className="border-l-4 border-blue-500 bg-gray-900 text-gray-100 pl-5 italic my-6 rounded-md"
              {...props}
            />
          ),
          code({
            inline,
            className,
            children,
            ...props
          }: React.HTMLProps<HTMLElement> & {
            inline?: boolean;
            className?: string;
            children?: React.ReactNode;
          }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                style={vscDarkPlus}
                language={match[1]}
                PreTag="div"
                className="rounded-md shadow-lg my-4 overflow-x-auto"
              >
                {String(children).replace(/\n$/, "")}
              </SyntaxHighlighter>
            ) : (
              <code
                className="bg-gray-800 text-gray-100 rounded-md px-1.5 py-0.5 text-sm"
                {...props}
              >
                {children}
              </code>
            );
          },
        }}
      >
        {content}
      </ReactMarkdown>
    </section>
  );
}
