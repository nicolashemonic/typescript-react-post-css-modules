var UglifyJsPlugin = require("uglifyjs-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var path = require("path");

module.exports = {
    entry: path.join(__dirname, "source"),

    output: {
        path: path.join(__dirname, "client"),
        filename: "[name].js"
    },

    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".css"]
    },

    optimization: {
        minimizer: [
            new UglifyJsPlugin({
                cache: true,
                parallel: true
            }),
            new OptimizeCSSAssetsPlugin({})
        ]
    },

    plugins: [
        new MiniCssExtractPlugin({
            filename: "[name].css"
        })
    ],

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: true,
                            importLoaders: 1,
                            localIdentName: "[name]__[local]"
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
                                        generateScopedName: "[name]__[local]"
                                    }
                                ]
                            ]
                        }
                    },
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
