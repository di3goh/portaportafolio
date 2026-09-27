import { mkdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDirectory = path.join(root, "src/assets/optimized");
const images = [
  ["src/assets/hero-landscape.jpg", "hero-landscape", 1800],
  ["src/assets/diego-portrait.png", "diego-portrait", 960],
  [
    "src/imports/Frame5/af2ce6c18fb80ff38a1662062ceeaf20a5e1b098.png",
    "turquesa-travel",
    1500,
  ],
  [
    "src/imports/Frame5/448979ebe7a09d11c3ce7ca24e6daa448bf4c059.png",
    "mri-industriales",
    1500,
  ],
  [
    "src/imports/Frame5/572f587fd3a9cf47d78cef64d1e5a896bd72ce42.png",
    "twenty-one-pilots",
    1500,
  ],
  [
    "src/imports/Frame5/c72db78ab807f0396cb8d8e3cc98beb7c07a9291.png",
    "glucida",
    1500,
  ],
  [
    "src/imports/Frame5/9ca749a4062a327037762d25b236f5ddb0451206.png",
    "petcare",
    1600,
  ],
  [
    "src/imports/Frame5/7c3b0816e918b94b54b60a0548ad54fc785c2375.png",
    "taipa",
    1500,
  ],
  ["src/assets/destinos-tourism.png", "destinos-tourism", 1600],
  ["src/assets/caleta-store.png", "caleta-store", 1600],
  ["src/assets/astronum.png", "astronum", 1600],
  ["src/assets/oftalvista.png", "oftalvista", 1600],
  ["src/assets/twenty-one-pilots-new.png", "twenty-one-pilots-new", 1600],
  ["src/assets/reporta.png", "reporta", 1600],
  ["src/assets/miskipop.png", "miskipop", 1600],
  ["src/assets/centrojoyero.png", "centrojoyero", 1600],
  ["src/assets/am-code.png", "am-code", 1600],
  ["src/assets/coderhouse-mark.png", "coderhouse-mark", 256],
  ["src/assets/google-mark.png", "google-mark", 256],
  ["src/assets/ibm-mark.png", "ibm-mark", 256],
  ["src/assets/ibm-ux-ui-certificate.png", "ibm-ux-ui-certificate", 1200],
  [
    "src/assets/coderhouse-ux-ui-certificate.png",
    "coderhouse-ux-ui-certificate",
    1200,
  ],
];

await mkdir(outputDirectory, { recursive: true });
let sourceBytes = 0;
let outputBytes = 0;

for (const [source, name, width] of images) {
  const sourcePath = path.join(root, source);
  const outputPath = path.join(outputDirectory, `${name}.webp`);
  const result = await sharp(sourcePath)
    .rotate()
    .resize({ width, withoutEnlargement: true })
    .webp({ quality: 86, effort: 6, alphaQuality: 95 })
    .toFile(outputPath);
  sourceBytes += (await stat(sourcePath)).size;
  outputBytes += result.size;
  console.log(
    `${name}: ${(result.size / 1024).toFixed(0)} KB (${result.width} × ${result.height})`,
  );
}

console.log(
  `Total: ${(sourceBytes / 1024 / 1024).toFixed(2)} MB → ${(outputBytes / 1024 / 1024).toFixed(2)} MB`,
);
console.log("The original images have been preserved.");
