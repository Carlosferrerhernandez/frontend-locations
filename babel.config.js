module.exports = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-typescript', // Preset para TypeScript
    ['@babel/preset-react', { runtime: 'automatic' }],
  ],
  plugins: [
    '@babel/plugin-transform-runtime', // Ayuda con la compatibilidad de runtime
  ],
};
