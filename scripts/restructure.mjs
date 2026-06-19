/**
 * restructure.mjs
 * Converts every component/container/page folder to the new structure:
 *   ComponentName.jsx   (renamed from .js, CSS import updated to .scss)
 *   ComponentName.scss  (renamed from .css)
 *   ComponentName.types.ts
 *   ComponentName.test.js
 *   index.js            (re-export)
 *
 * Run: node scripts/restructure.mjs
 */

import fs from "fs";
import path from "path";

const SRC = path.resolve("src");

// Directories to process (relative to src)
const DIRS = [
  "components/achievementCard",
  "components/blogCard",
  "components/button",
  "components/certificationCard",
  "components/competitiveSites",
  "components/degreeCard",
  "components/experienceCard",
  "components/footer",
  "components/githubRepoCard",
  "components/header",
  "components/issueCard",
  "components/issueChart",
  "components/Loader",
  "components/organizationList",
  "components/projectLanguages",
  "components/publicationsCard",
  "components/pullRequestCard",
  "components/pullRequestChart",
  "components/seoHeader",
  "components/socialMedia",
  "components/softwareSkills",
  "components/talkCard",
  "components/themePicker",
  "components/topButton",
  "containers/achievement",
  "containers/blogs",
  "containers/certifications",
  "containers/contact",
  "containers/education",
  "containers/experienceAccordion",
  "containers/greeting",
  "containers/issues",
  "containers/opensourceCharts",
  "containers/organizations",
  "containers/podcast",
  "containers/projects",
  "containers/pullRequests",
  "containers/skills",
  "containers/StartupProjects",
  "containers/talks",
  "pages/contact",
  "pages/education",
  "pages/errors/error404",
  "pages/experience",
  "pages/home",
  "pages/opensource",
  "pages/projects",
  "pages/splash",
];

// chatBot already has the new structure — skip
const SKIP_FILES = new Set(["ChatBot.jsx", "chatbot.helpers.js", "index.js"]);

let processed = 0;
let skipped = 0;

for (const relDir of DIRS) {
  const dir = path.join(SRC, relDir);
  if (!fs.existsSync(dir)) {
    console.log(`  ⚠  SKIP (not found): ${relDir}`);
    skipped++;
    continue;
  }

  const entries = fs.readdirSync(dir);

  // Find the main .js component file (not helpers, not ToggleSwitch, etc.)
  // Main file: same name as folder (case-insensitive) OR only .js file
  const folderName = path.basename(dir);

  const jsFiles = entries.filter(
    (f) =>
      f.endsWith(".js") &&
      !f.endsWith(".test.js") &&
      !SKIP_FILES.has(f) &&
      f !== "index.js"
  );

  const cssFiles = entries.filter(
    (f) => f.endsWith(".css") && !f.includes("ToggleSwitch")
  );

  // ── 1. CSS → SCSS ──────────────────────────────────────────────────────────
  for (const cssFile of cssFiles) {
    const cssSrc = path.join(dir, cssFile);
    const scssName = cssFile.replace(/\.css$/, ".scss");
    const scssDest = path.join(dir, scssName);

    if (!fs.existsSync(scssDest)) {
      const content = fs.readFileSync(cssSrc, "utf8");
      fs.writeFileSync(scssDest, content, "utf8");
      fs.unlinkSync(cssSrc);
      console.log(`  CSS→SCSS  ${relDir}/${cssFile}`);
    }
  }

  // ── 2. .js → .jsx (update CSS imports to .scss) ────────────────────────────
  for (const jsFile of jsFiles) {
    const jsSrc = path.join(dir, jsFile);
    const jsxName = jsFile.replace(/\.js$/, ".jsx");
    const jsxDest = path.join(dir, jsxName);

    if (!fs.existsSync(jsxDest)) {
      let content = fs.readFileSync(jsSrc, "utf8");
      // Update CSS imports → SCSS
      content = content.replace(/import\s+["'](.+)\.css["']/g, (_, p) => `import "${p}.scss"`);
      // Keep .scss for ToggleSwitch
      fs.writeFileSync(jsxDest, content, "utf8");
      fs.unlinkSync(jsSrc);
      console.log(`  JS→JSX    ${relDir}/${jsFile}`);
    }
  }

  // ── 3. index.js ────────────────────────────────────────────────────────────
  const indexPath = path.join(dir, "index.js");
  if (!fs.existsSync(indexPath)) {
    // Find the main JSX file (prefer one matching folder name)
    const allJsx = fs.readdirSync(dir).filter((f) => f.endsWith(".jsx") && !f.endsWith(".test.jsx"));
    if (allJsx.length > 0) {
      // Pick file matching folder name (case-insensitive) or first
      const main =
        allJsx.find((f) => f.toLowerCase() === folderName.toLowerCase() + ".jsx") ||
        allJsx[0];
      const exportName = main.replace(/\.jsx$/, "");
      fs.writeFileSync(
        indexPath,
        `export { default } from "./${main}";\n`,
        "utf8"
      );
      console.log(`  index.js  ${relDir}  → ${main}`);
    }
  }

  // ── 4. .types.ts ────────────────────────────────────────────────────────────
  const allJsx2 = fs.readdirSync(dir).filter((f) => f.endsWith(".jsx") && !f.endsWith(".test.jsx"));
  for (const jsxFile of allJsx2) {
    const compName = jsxFile.replace(/\.jsx$/, "");
    const typesPath = path.join(dir, `${compName}.types.ts`);
    if (!fs.existsSync(typesPath)) {
      fs.writeFileSync(
        typesPath,
        `export interface ${compName}Props {\n  theme?: Record<string, string>;\n  [key: string]: unknown;\n}\n`,
        "utf8"
      );
      console.log(`  types.ts  ${relDir}/${compName}.types.ts`);
    }
  }

  // ── 5. .test.js ─────────────────────────────────────────────────────────────
  const allJsx3 = fs.readdirSync(dir).filter((f) => f.endsWith(".jsx") && !f.endsWith(".test.jsx"));
  for (const jsxFile of allJsx3) {
    const compName = jsxFile.replace(/\.jsx$/, "");
    const testPath = path.join(dir, `${compName}.test.js`);
    if (!fs.existsSync(testPath)) {
      fs.writeFileSync(
        testPath,
        `import React from "react";
import { render } from "@testing-library/react";
import ${compName} from "./${jsxFile}";

const mockTheme = {
  body: "#ffffff",
  text: "#333333",
  imageHighlight: "#667eea",
  highlight: "#f0f0f8",
  dark: "#000000",
  secondaryText: "#555555",
  headerColor: "#333333",
  navColor: "#333333",
  splashBg: "#ffffff",
  jacketColor: "#667eea",
};

describe("${compName}", () => {
  it("renders without crashing", () => {
    expect(() => render(<${compName} theme={mockTheme} />)).not.toThrow();
  });
});
`,
        "utf8"
      );
      console.log(`  test.js   ${relDir}/${compName}.test.js`);
    }
  }

  processed++;
}

console.log(`\nDone. Processed: ${processed}, Skipped: ${skipped}`);
