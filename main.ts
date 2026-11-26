// Office Artifacts: The One-Line Placard Contest — entry program.
// Deterministically writes one museum placard line (an ordinary office
// object catalogued as an artifact of a lost civilization) to entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const LINE =
  "Wheeled Throne. Foam, mesh and five casters, c. 2011. Gift of the last chieftain, who received petitioners from it and rose only for cake. Height adjustable; authority was not.";

function main(): void {
  if (LINE !== LINE.trim()) {
    throw new Error("LINE must be pre-trimmed");
  }
  if (LINE.includes("\n") || LINE.includes("\r")) {
    throw new Error("LINE must be a single line");
  }
  if (LINE.length < 1 || LINE.length > 180) {
    throw new Error(`LINE length ${LINE.length} is outside 1-180`);
  }
  const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
}

main();
