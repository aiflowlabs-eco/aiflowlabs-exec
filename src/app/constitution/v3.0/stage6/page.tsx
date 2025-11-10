import fs from "node:fs";
import path from "node:path";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import SyntaxHighlighter from "react-syntax-highlighter/dist/esm/prism";

export const metadata = {
  title: "Stage 6 — Verification & Canonical Release Phase",
  description: "Checksum and Integrity Ledger for AI Digest Constitution v3.0",
};

function CodeBlock({
  inline,
  className,
  children,
}: {
  inline?: boolean;
  className?: string;
  children?: React.ReactNode;
}) {
  const match = /language-(\w+)/.exec(className || "");
  const language = match?.[1] || "";
  if (inline || !match) return <code className={className}>{children}</code>;

  const code =
    typeof children === "string"
      ? children
      : Array.isArray(children)
        ? children.join("")
        : "";

  return (
    <SyntaxHighlighter language={language} PreTag="div" wrapLongLines>
      {code.replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
}

export default function Stage6Page() {
  const filePath = path.join(
    process.cwd(),
    "public",
    "constitution",
    "v3.0",
    "AI_Digest_Constitution_Stage6_Verification_v3.0.md"
  );
  const source = fs.readFileSync(filePath, "utf-8");

  return (
    <main className="prose mx-auto px-4 py-10">
      <Markdown
        remarkPlugins={[remarkGfm]}
        components={{
          code: CodeBlock,
          table: (props) => (
            <table className="table-auto border-collapse w-full" {...props} />
          ),
          th: (props) => (
            <th className="border px-2 py-1 text-left align-top" {...props} />
          ),
          td: (props) => (
            <td className="border px-2 py-1 align-top" {...props} />
          ),
        }}
      >
        {source}
      </Markdown>
    </main>
  );
}
