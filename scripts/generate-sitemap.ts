// Runs before `vite dev` and `vite build` (predev/prebuild hooks); writes public/sitemap.xml.
import { writeFileSync } from "fs";
import { resolve } from "path";
import { blogPosts } from "../src/data/blogPosts";

const BASE_URL = "https://guardiao-sobrio-digital.lovable.app";

interface SitemapEntry {
  path: string;
  lastmod?: string;
  changefreq?: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never";
  priority?: string;
}

const staticEntries: SitemapEntry[] = [
  { path: "/", changefreq: "weekly", priority: "1.0" },
  { path: "/comece-aqui", changefreq: "monthly", priority: "0.9" },
  { path: "/trilhas", changefreq: "monthly", priority: "0.8" },
  { path: "/trilhas/recuperacao", changefreq: "monthly", priority: "0.7" },
  { path: "/trilhas/vontade-hoje", changefreq: "monthly", priority: "0.7" },
  { path: "/trilhas/familiar", changefreq: "monthly", priority: "0.7" },
  { path: "/protocolos", changefreq: "monthly", priority: "0.8" },
  { path: "/protocolos/escudo-72h", changefreq: "monthly", priority: "0.8" },
  { path: "/protocolos/perimetro-24h", changefreq: "monthly", priority: "0.8" },
  { path: "/blog", changefreq: "weekly", priority: "0.8" },
  { path: "/produtos", changefreq: "monthly", priority: "0.7" },
  { path: "/sobre", changefreq: "yearly", priority: "0.6" },
  { path: "/contato", changefreq: "yearly", priority: "0.5" },
  { path: "/app", changefreq: "monthly", priority: "0.6" },
];

const blogEntries: SitemapEntry[] = blogPosts.map((p) => ({
  path: `/blog/${p.slug}`,
  lastmod: p.date,
  changefreq: "monthly",
  priority: "0.6",
}));

const entries = [...staticEntries, ...blogEntries];

function generateSitemap(entries: SitemapEntry[]) {
  const urls = entries.map((e) =>
    [
      `  <url>`,
      `    <loc>${BASE_URL}${e.path}</loc>`,
      e.lastmod ? `    <lastmod>${e.lastmod}</lastmod>` : null,
      e.changefreq ? `    <changefreq>${e.changefreq}</changefreq>` : null,
      e.priority ? `    <priority>${e.priority}</priority>` : null,
      `  </url>`,
    ]
      .filter(Boolean)
      .join("\n")
  );
  return [
    `<?xml version="1.0" encoding="UTF-8"?>`,
    `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">`,
    ...urls,
    `</urlset>`,
  ].join("\n");
}

writeFileSync(resolve("public/sitemap.xml"), generateSitemap(entries));
console.log(`sitemap.xml written (${entries.length} entries)`);
