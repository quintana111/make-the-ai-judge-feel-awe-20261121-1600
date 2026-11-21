// make.fun entry: make-the-ai-judge-feel-awe-20261121-1600
// Deterministic, stdlib only, no network. Writes the entry text to
// /output/entry.txt (UTF-8, 277 Unicode code points).
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ENTRY =
  "At the bottom of the well the water is still, and it has been still for a hundred years. A rope, a bucket, a hand that knows the weight. The moon leans over the stone rim to look at itself, and for a little while the whole wide night fits inside one small circle of dark water.";

const scriptDir = dirname(fileURLToPath(import.meta.url));
void scriptDir; // all paths resolve from the script dir; output is absolute

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");

// Read back and verify: 1-280 Unicode code points, not only whitespace.
const written = readFileSync("/output/entry.txt", "utf8");
const points = [...written].length;
if (points < 1 || points > 280 || !written.trim()) {
  throw new Error(`entry.txt invalid: ${points} code points`);
}
