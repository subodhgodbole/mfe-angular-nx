const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const mf = require("@angular-architects/module-federation/webpack");
const path = require("path");
const share = mf.share;

const sharedMappings = new mf.SharedMappings();
sharedMappings.register(
    path.join(__dirname, '../../tsconfig.base.json'),
    ['@demo/auth-lib', '@demo/services']
);

module.exports = {
    output: {
        uniqueName: "shell",
        publicPath: "auto"
    },
    optimization: {
        // Only needed to bypass a temporary bug
        runtimeChunk: false
    },
    resolve: {
        alias: {
          ...sharedMappings.getAliases(),
        }
    },
    experiments: {
        outputModule: true
    },
    plugins: [
        new ModuleFederationPlugin({
            library: { type: "module" },
            remotes: {
                'mfe1': "http://localhost:3000/remoteEntry.js",
                'mfe2': "http://localhost:4000/remoteEntry.js",
                'mfe3': "http://localhost:2000/remoteEntry.js"
            },
            shared: share({
                "@angular/core": {
                    singleton: true,
                    strictVersion: true,
                    requiredVersion: 'auto'
                },
                "@angular/common": {
                    singleton: true,
                    strictVersion: true,
                    requiredVersion: 'auto'
                },
                "@angular/router": {
                    singleton: true,
                    strictVersion: true,
                    requiredVersion: 'auto'
                },
                ...sharedMappings.getDescriptors()
            })
        }),
        sharedMappings.getPlugin()
    ],
};
