export default {
  selfHosted: true,
  enabled: process.env.NODE_ENV === 'production',
  domain: 'nextjs-drizzle-playground.vercel.app',
  customDomain: 'https://stats.ghcr.dev',
  trackOutboundLinks: true,
}
