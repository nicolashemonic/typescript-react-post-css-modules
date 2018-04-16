const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
const path = require("path");
const localIdentName = "[path][local]";

module.exports = {
    // The main entry point source/index.tsx
    entry: path.resolve(__dirname, "source"),

    // Generated bundle location
    output: {
        path: path.resolve(__dirname, "client"),
        filename: "[name].js",
        chunkFilename: "[name].js",
        publicPath: "/client/"
    },

    // Source files take into account
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".css"]
    },

    optimization: {
        // Customize bundles
        splitChunks: {
            cacheGroups: {
                // vendor.js
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                },

                // common.js
                common: {
                    // Bundle name
                    name: "common",
                    // Find common module inside dynamic import bundle
                    chunks: "async",
                    // Add module if it used at least twice in different dynamic import bundle
                    minChunks: 2,
                    // Force Webpack to apply this rules even if the rule is not in optimal regarding webpack default behavior
                    enforce: true
                }

                // Add this option to build an unique css bundle
                // styles.css && styles.js (class names mapping for js runtime)
                // styles: {
                //     name: "styles",
                //     test: /\.css$/,
                //     chunks: "all",
                //     enforce: true
                // }
            }
        },

        // Add Css minimizer used on prod build
        // Add JS minimizer because optimization minimizer is manually defined
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },

    // Configure css extraction from JS bundle
    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],

    module: {
        rules: [
            // postcss-cssnext transform new css syntax into css understable today by the browser.
            // postcss-import transform @import rules by inlining content, useful for shared variables.
            // css-loader import css files and generate scoped class names regarding localIdentName option.
            // mini-css-extract-plugin extract transformed css into dedicated css bundles.
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: localIdentName
                        }
                    },
                    {
                        loader: "postcss-loader"
                    }
                ]
            },
            {
                test: /\.ts(x?)$/,
                exclude: /node_modules/,
                use: [
                    // 2. babel-preset-react transform React jsx and babel-preset-env es2015 syntax into code understandable by the browser.
                    //    babel-plugin-react-css-modules transform styleName attribute into className React attribute.
                    //    syntax-dynamic-import allow babel to parse dynamic import syntax but not transform it.
                    //    react-loadable/babel declare wich modules are being loaded.
                    {
                        loader: "babel-loader",
                        options: {
                            babelrc: false,
                            presets: [
                                "react",
                                [
                                    "env",
                                    {
                                        modules: false
                                    }
                                ]
                            ],
                            plugins: [
                                [
                                    "react-css-modules",
                                    {
                                        generateScopedName: localIdentName
                                    }
                                ],
                                "syntax-dynamic-import",
                                "react-loadable/babel"
                            ]
                        }
                    },
                    // 1. TypeScript type check and emit JavaScript es2015 (TypeScript without types) consumable by Babel.
                    {
                        loader: "ts-loader",
                        options: {
                            configFile: require.resolve("./tsconfig.json"),
                            context: __dirname
                        }
                    }
                ]
            }
        ]
    }
};
