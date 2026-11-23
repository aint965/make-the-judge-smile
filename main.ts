// Make the Judge Smile — writes one warm line to /output/entry.txt.
// Node 22, no dependencies, no network, fully deterministic.
import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const LINE =
  "Today Mimi, the street cat I feed every dawn, finally let me touch her head — then stole my sandal and slept on it like a trophy.";

// Self-check against the competition gate: 1–200 characters, one line,
// not only whitespace. Fail loudly instead of writing an invalid entry.
const chars = [...LINE];
if (chars.length < 1 || chars.length > 200) {
  throw new Error(`entry is ${chars.length} characters, must be 1–200`);
}
if (LINE.trim().length === 0 || LINE.includes("\n") || LINE.includes("\r")) {
  throw new Error("entry must be a single non-blank line");
}

const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";
mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, LINE, "utf8");
