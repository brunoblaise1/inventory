import { register } from "module";
import type { NextConfig } from "next";
import { URLPattern } from "next/server";
const withPWA = require('next-pwa')({
  dest:'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
  runtimeCaching:[
    {
      URLPattern: /^https?.*/,
      handler: 'NetworokFirst',
      options:{
        cahceName:'pages',
        expeiration: {
          maxEntries:100,
          maxAgeSeconds: 60* 60 * 24 * 30,
        }
      }
    }
  ]
})
const nextConfig: NextConfig = {
  /* config options here */
};
export default withPWA(nextConfig);
