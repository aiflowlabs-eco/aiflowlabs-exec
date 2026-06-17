# aiflowlabs-exec

## Purpose

`aiflowlabs-exec` is the frontend interface for the AI Digest Constitution —
a publishing platform for executive analytical content within the AIFlow Labs
ecosystem. It renders structured markdown-based analytical materials and
provides a navigable interface for AI Digest Constitution stages.

This frontend is reserved for the executive layer of AI Digest: Constitution
access, Reconstruction Logs, Audit Matrix, and Core Control tools.

## Status

Development — not yet in production.

## Tech Stack

- Next.js 16
- React 19
- TypeScript 5
- Tailwind CSS 4
- react-markdown + remark-gfm
- react-syntax-highlighter

## Setup

```bash
nvm use
npm install
npm run dev
```

Requires Node.js 24.4.0 and npm 11.7.0 (enforced via `.nvmrc` and `.npmrc`).

## Environment Variables

No environment variables are required for local development.

## Build

```bash
npm run build
```

Build must succeed on a clean clone with no local artifacts.

Quality gates:

```bash
npm run lint
npm run type-check
npm run build
```

## Deployment

Deployed via Vercel. Connected to the GitHub repository.
Deployments are triggered automatically on merge to `main`.

Production URL: [https://exec.aiflowlabs.studio](https://exec.aiflowlabs.studio)

## Testing

Automated tests are not implemented yet. This is a conscious decision for the
current stage of development. A testing strategy will be defined before
production release.

## Owner

AIFlow Labs Studio
<studio@aiflowlabs.studio>

## Exceptions

None.
