var UglifyJsPlugin = require("uglifyjs-webpack-plugin");
var MiniCssExtractPlugin = require("mini-css-extract-plugin");
var OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");
var path = require("path");

module.exports = {
    // The main entry point source/index.tsx
    entry: path.join(__dirname, "source"),

    // Generated bundle location
    output: {
        path: path.join(__dirname, "client"),
        filename: "[name].js"
    },

    // Source files take into account
    resolve: {
        extensions: [".ts", ".tsx", ".js", ".jsx", ".css"]
    },

    // Add Css minimizer used on prod build
    // Add JS minimizer because optimization minimizer is manually defined
    optimization: {
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
            // Postcss transform new css syntax into css understable today by the browser using postcss-cssnext.
            // css-loader import css files and generate scoped class names regarding localIdentName option.
            // Finally, imported and transformed css files are extracted from the JS bundle into a bundle Css using mini-css-extract-plugin.
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
                    // 2. babel-preset-react transform React jsx and babel-preset-env es2015 syntax into code understandable by the browser.
                    //    babel-plugin-react-css-modules transform styleName attribute into className React attribute.
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
