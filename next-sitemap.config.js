/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://floraforge.com",
  generateRobotsTxt: true,
  generateIndexSitemap: true,
  exclude: ["/_not-found", "/404", "/500"],
  robotsTxtOptions: {
    policies: [
      { userAgent: "*", allow: "/" },
      { userAgent: "*", disallow: ["/_next/", "/api/", "/private/"] },
    ],
    additionalSitemaps: ["https://floraforge.com/sitemap-index.xml"],
  },
  transform: async (config, path) => {
    const priority = path === "/" ? 1.0 : 0.7;
    const changefreq = path === "/" ? "weekly" : "monthly";
    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      alternateRefs: config.alternateRefs ?? [],
    };
  },
};