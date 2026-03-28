import { readFileSync, writeFileSync } from "fs";

const file = ".output/server/wrangler.json";
const config = JSON.parse(readFileSync(file, "utf8"));
config.compatibility_date = "2025-07-15";
config.compatibility_flags = ["nodejs_compat"];
writeFileSync(file, JSON.stringify(config, null, 2));
