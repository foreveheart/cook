const { injectBabelPlugin } = require('react-app-rewired');
const PATH = require('path')

function resolve(url){
    return PATH.resolve(__dirname,'src/',url)
}

module.exports = function override(config, env) {

    config = injectBabelPlugin(['import', { libraryName: 'antd-mobile', style: 'css' }], config);

    config.resolve.alias = {
        ...config.resolve.alias,
        '@':resolve(''),
        '@libs': resolve('libs')  
    }
    return config;
  };        