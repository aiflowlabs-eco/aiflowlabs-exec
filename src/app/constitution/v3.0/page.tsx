import fs from "node:fs";
import path from "node:path";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { ReactNode } from "react";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism";

export const metadata = {
  title: "AI Digest Constitution v3.0 — Canonical Release",
  description:
    "Checksum-sealed A–J edition of the AI Digest Constitution (Core Control Branch).",
};

// Минимальный рендерер кода для react-markdown
type CodeBlockProps = Readonly<{
  inline?: boolean;
  className?: string;
  children?: ReactNode;
}>;

function CodeBlock({ inline, className, children }: CodeBlockProps) {
  const match = /language-(\w+)/.exec(className || "");
  const language = match?.[1] || "";

  if (inline || !match) {
    return <code className={className}>{children}</code>;
  }

  const code =
    typeof children === "string"
      ? children
      : Array.isArray(children)
        ? children.join("")
        : "";

  return (
    <SyntaxHighlighter
      language={language}
      PreTag="div"
      wrapLongLines={true}
    >
      {code.replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
}

export default function ConstitutionV3() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "constitution",
    "v3.0",
    "AI_Digest_Constitution_v3.0_Compiled.md"
  );
  const source = fs.readFileSync(filePath, "utf-8");

  return (
    <main className="prose mx-auto px-4 py-10">
      <h1 className="text-center mb-8">AI Digest Constitution v3.0</h1>

      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          code: CodeBlock,
          table: (props) => (
            <table className="table-auto border-collapse w-full" {...props} />
          ),
          th: (props) => (
            <th
              className="border px-2 py-1 text-left align-top"
              {...props}
            />
          ),
          td: (props) => (
            <td
              className="border px-2 py-1 align-top"
              {...props}
            />
          ),
        }}
      >
        {source}
      </Markdown>

      <hr className="my-10" />

      <section className="space-y-4">
        <h2>Canonical Artifacts</h2>

        {/* Кнопка перехода к визуальному рендеру Stage 6 */}
        <a
          href="/constitution/v3.0/stage6"
          className="inline-flex items-center rounded-md border border-gray-300 px-4 py-2 text-sm font-medium no-underline hover:bg-gray-100"
        >
          <span className="mr-2">📄</span>
          <span>View Stage 6 in Markdown</span>
        </a>

        <ul className="list-disc ml-6 space-y-2">
          <li>
            <a
              href="/constitution/v3.0/AI_Digest_Constitution_Stage6_Verification_v3.0.md"
              className="text-blue-600 hover:underline"
            >
              Stage 6 — Verification &amp; Canonical Release Phase (raw .md)
            </a>
          </li>
          <li>
            <a
              href="/constitution/v3.0/AI_Digest_Constitution_v3.0_Canonical_Package.md"
              className="text-blue-600 hover:underline"
            >
              Canonical Package — Release Manifest
            </a>
          </li>
          <li>
            <a
              href="/constitution/v3.0/SHA256SUMS.txt"
              className="text-blue-600 hover:underline"
            >
              SHA256SUMS.txt — Checksum Manifest
            </a>
          </li>
        </ul>
      </section>
    </main>
  );
}
