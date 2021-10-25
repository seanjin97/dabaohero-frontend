module.exports = {
    runtimeCompiler: undefined,
    productionSourceMap: false,
    publicPath: 'bamburgh-vue-ui-kit-bootstrap-vue-free',

    chainWebpack: config => {
        config.module
            .rule('raw')
            .test(/\.txt$/)
            .use('raw-loader')
            .loader('raw-loader')
            .end()
    },

    outputDir: 'bamburgh-vue-ui-kit-bootstrap-vue-free',
    assetsDir: undefined,
    parallel: undefined,
    css: undefined
}
