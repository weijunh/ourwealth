const { override, fixBabelImports, addLessLoader, addPostcssPlugins, addDecoratorsLegacy } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd-mobile',
    style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: { '@primary-color': '#1DA57A' },
  }),
  addPostcssPlugins([require('postcss-pxtorem')({
    rootValue: 37.5,
    propList: ['*']
    // propList: ['*', '!border*', '!font-size*', '!letter-spacing'],
    // propWhiteList: []
  }),]),
  addDecoratorsLegacy()
);