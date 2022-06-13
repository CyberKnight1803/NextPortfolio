/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    mongodb: process.env.MONGODB_URI,
  }
}

module.exports = nextConfig;
