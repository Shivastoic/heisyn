/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: 'https://heisyn.com',
    generateRobotsTxt: true,
    sitemapSize: 5000,
    exclude: [],
    changefreq: 'weekly',
    priority: 0.8,
    additionalPaths: async (config) => [
        { loc: '/' , priority: 1.0 },
        { loc: '/about', priority: 0.8 },
        { loc: '/services', priority: 0.8 },
        { loc: '/contact', priority: 0.8 },
        { loc: '/workflows', priority: 0.8 },
    ],
}
