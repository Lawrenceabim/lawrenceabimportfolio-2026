import type { MetadataRoute } from "next";
import { siteConfig } from "@/content/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: siteConfig.name,
    short_name: siteConfig.name,
    description: siteConfig.description,
    start_url: "/",
    display: "standalone",
    background_color: "#141310",
    theme_color: "#141310",
    icons: [{ src: "/icon.png", sizes: "512x512", type: "image/png" }],
  };
}
