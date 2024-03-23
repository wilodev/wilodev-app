/** @type {import('ts-jest').JestConfigWithTsJest} */
module.exports = {
  presets: [
    'module:@react-native/babel-preset',
    '@babel/preset-react', 
    '@babel/preset-typescript',
  ],
  plugins: [
    ['@babel/plugin-transform-private-methods', { loose: true }],
    'react-native-reanimated/plugin',
    [
      'module-resolver',
      {
        extensions: ['.ios.js', '.android.js', '.ios.jsx', '.android.jsx', '.js', '.jsx', '.json', '.ts', '.tsx'],
        root: ['.'],
        alias: {
           // Common modules such as assets, shared, state, navigation
          '@/assets': './src/assets',
          '@/components': './src/shared/components',
          '@/config': './src/shared/config',
          '@/interfaces': './src/shared/interfaces',
          '@/layouts': './src/shared/layouts',
          '@/lib': './src/shared/lib',
          '@/locales': './src/shared/locales',
          '@/providers': './src/shared/providers',
          '@/navigation': './src/navigation',
          '@/shared': './src/shared',
          '@/state': './src/state',
          '@/theme': './src/shared/theme',
          '@/typings': './src/typings',
          '@/ui': './src/shared/ui',
           // Modules or applications, Each new application must be registered here
          '@/acl': './src/apps/acl',
          '@/authenticated': './src/apps/authenticated',
          '@/init': './src/apps/init',
        },
      },
    ],
  ],
};
