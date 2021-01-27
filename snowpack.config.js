/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    public: '/',
    src: '/dist',
  },
  plugins: [
    '@snowpack/plugin-react-refresh',
    '@snowpack/plugin-babel',
    '@snowpack/plugin-postcss',
    // "@snowpack/plugin-dotenv",
    // "@snowpack/plugin-webpack",
  ],
  routes: [
    /* Enable an SPA Fallback in development: */
    { match: 'routes', src: '.*', dest: '/index.html' },
  ],
  optimize: {
    bundle: true,
    minify: true,
  },
  packageOptions: {
    source: 'local',
  },
  devOptions: {
    open: 'none',
  },
  buildOptions: {
    sourcemap: true,
  },
}
