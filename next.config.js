/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['https://firebasestorage.googleapis.com/v0/b/healthcare-9120c.appspot.com/', 'www.cascadeblindsni.com'] 
  },
}

async function rewrites() {
  return [
    {
      source: '/api/:path*',
      destination: 'https://new-healthcare.vercel.app/api/:path*'
    }
  ]
}

module.exports = { nextConfig, rewrites };
