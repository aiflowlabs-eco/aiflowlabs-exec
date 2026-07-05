import fs from "node:fs";
import path from "node:path";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import type { ComponentPropsWithoutRef, ReactNode } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";

export const metadata = {
  title: "Stage 6 — Verification & Canonical Release Phase",
  description: "Checksum and Integrity Ledger for AI Digest Constitution v3.0",
};

type CodeBlockProps = Readonly<{
  inline?: boolean;
  className?: string;
  children?: ReactNode;
}>;

type TableProps = Readonly<ComponentPropsWithoutRef<"table">>;
type ThProps = Readonly<ComponentPropsWithoutRef<"th">>;
type TdProps = Readonly<ComponentPropsWithoutRef<"td">>;

function getCodeString(children: ReactNode) {
  if (typeof children === "string") {
    return children;
  }

  if (Array.isArray(children)) {
    return children.join("");
  }

  return "";
}

function CodeBlock({ inline, className, children }: CodeBlockProps) {
  const match = /language-(\w+)/.exec(className || "");
  const language = match?.[1] || "";
  if (inline || !match) return <code className={className}>{children}</code>;

  const code = getCodeString(children);

  return (
    <SyntaxHighlighter language={language} PreTag="div" wrapLongLines>
      {code.replace(/\n$/, "")}
    </SyntaxHighlighter>
  );
}

function Table(props: TableProps) {
  return <table className="table-auto border-collapse w-full" {...props} />;
}

function Th(props: ThProps) {
  return <th className="border px-2 py-1 text-left align-top" {...props} />;
}

function Td(props: TdProps) {
  return <td className="border px-2 py-1 align-top" {...props} />;
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
          table: Table,
          th: Th,
          td: Td,
        }}
      >
        {source}
      </Markdown>
    </main>
  );
}
