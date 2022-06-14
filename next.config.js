/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env:{
    mongodb: process.env.MONGODB_URI,
    SENDER_EMAIL: process.env.SENDER_EMAIL, 
    PASSWORD: process.env.PASSWORD, 
    RECIEVER_EMAIL: process.env.RECIEVER_EMAIL
  }
}

module.exports = nextConfig;
