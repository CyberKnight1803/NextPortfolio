/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    mongodb: process.env.MONGODB_URI,
    email: process.env.EMAIL, 
    pass: process.env.PASSWORD 
  }
}

module.exports = nextConfig;
