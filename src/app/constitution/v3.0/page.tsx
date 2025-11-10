import fs from "node:fs";
import path from "node:path";
import Markdown from "react-markdown";

export const metadata = {
  title: "AI Digest Constitution v3.0 — Canonical Release",
  description:
    "Checksum-sealed A–J edition of the AI Digest Constitution (Core Control Branch).",
};

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
      <Markdown>{source}</Markdown>

      <hr className="my-10" />

      <section>
        <h2>Canonical Artifacts</h2>
        <ul className="list-disc ml-6 space-y-2">
          <li>
            <a
              href="/constitution/v3.0/AI_Digest_Constitution_Stage6_Verification_v3.0.md"
              className="text-blue-600 hover:underline"
            >
              Stage 6 — Verification &amp; Canonical Release Phase
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
