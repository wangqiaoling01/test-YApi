// https://ecomfe.github.io/reskript/docs/settings/feature-matrix
exports.featureMatrix = {
    stable: {},
    dev: {},
};

// https://ecomfe.github.io/reskript/docs/settings/build
exports.build = {
    appTitle: 'test-reskr',
};

// https://ecomfe.github.io/reskript/docs/settings/dev-server
exports.devServer = {
    port: 8788,
    // TODO: 修改后端API代理的配置
    apiPrefixes: ['/api'],
    defaultProxyDomain: '127.0.0.1:3722', // TODO: 设置后端测试环境域名
};
