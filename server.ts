// The palette is declarative: BB reads the stylesheet referenced in package.json.
// This entry exists because the plugin manifest requires a server module.
import type { BbPluginApi } from "@get-bb/plugin-sdk";

export default async function plugin(bb: BbPluginApi) {
  bb.log.info("loaded — contributes the Warm Paper palette");
}
