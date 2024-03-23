const {getDefaultConfig, mergeConfig} = require('@react-native/metro-config');

const defaultConfig = getDefaultConfig(__dirname);
/**
 * Metro configuration
 * https://facebook.github.io/metro/docs/configuration
 *
 * @type {import('metro-config').MetroConfig}
 */
const config = {
    transformer: {
        // Extiende o reemplaza la configuración del transformador aquí
        babelTransformerPath: require.resolve('react-native-svg-transformer'),
        assetPlugins: ['react-native-svg-asset-plugin'],
    },
    resolver: {
        // Añade 'svg' a las extensiones de archivo
        sourceExts: [...defaultConfig.resolver.sourceExts, 'svg'],
        assetExts: defaultConfig.resolver.assetExts.filter(ext => ext !== 'svg'),
    },
};

module.exports = mergeConfig(defaultConfig, config);
