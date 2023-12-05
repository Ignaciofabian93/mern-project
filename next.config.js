/** @type {import('next').NextConfig} */
const nextConfig = {
  distDir: "build",
  env: {
    SECRET_MAPBOX_TOKEN:
      "pk.eyJ1Ijoic211bm96YyIsImEiOiJjbDhrOHY2cnYwMnd1M3BwanJhcWZ5ejRoIn0.kxrP-cLPBk71lTBG2cl7eQ",
  },
};

module.exports = nextConfig;
