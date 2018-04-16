### TypeScript, Code splitting and Css modules

A React example project to demonstrate how to achieve code splitting plus css modules.

- Implement React code splitting
- Implement Css modules
- Use Postcss Cssnext
- Build all this features

With all this features we able to load associated Scripts and Styles on demand 🖖🚀🙃.

### Quick Start

Install     
```npm install```

Build   
```npm run build-dev```

Run     
```npm run serve```

### Built on top

This project implements the minimal requirement to demonstrate its purpose.

- TypeScript v2.8

Client

- React v16.3
- React Css Modules v3
- React Loadable v5

Server

- Http-server v0.10

Build tools

- Webpack v4
    - [ts-loader](https://github.com/TypeStrong/ts-loader)
    - [babel-loader](https://github.com/babel/babel-loader)
    - [css-loader](https://github.com/webpack-contrib/css-loader)
    - [postcss-loader](https://github.com/postcss/postcss-loader)
    - [mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)
- PostCss
    - [postcss-cssnext](https://github.com/MoOx/postcss-cssnext)
    - [postcss-import](https://github.com/postcss/postcss-import)
- Babel v6
    - [babel-plugin-react-css-modules](https://github.com/gajus/babel-plugin-react-css-modules)
    - [babel-preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env)
    - [babel-preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react)
    - [babel-plugin-syntax-dynamic-import](https://babeljs.io/docs/plugins/syntax-dynamic-import/)
    - [react-loadable/babel](https://github.com/jamiebuilds/react-loadable#declaring-which-modules-are-being-loaded)

### Code

Source code is under ```source``` folder.

Client code is built into ```client``` folder.

### Build process

The application is built through Webpack.

TypeScript type check and emit JavaScript es2015 (TypeScript without types) consumable by Babel.

```babel-preset-react``` transform React jsx and ```babel-preset-env``` es2015 syntax into code understandable by the browser.

```babel-plugin-react-css-modules``` transform ```styleName``` attribute into ```className``` React attribute and resolve dynamic class name at runtime.

```postcss-cssnext``` transform new css syntax into css understable today by the browser.

```postcss-import``` transform @import rules by inlining content, useful for shared variables.

```css-loader``` import css files and generate scoped class names regarding ```localIdentName``` option.

```mini-css-extract-plugin``` extract transformed Css into dedicated Css bundles.

### Documentation

This sample project was made according to these documentations.

Css Modules

- [Css Modules](https://github.com/css-modules/css-modules)
- [Css Loader](https://github.com/webpack-contrib/css-loader#css-loader)
- [Mini Css Extract](https://github.com/webpack-contrib/mini-css-extract-plugin#mini-css-extract-plugin)
- [React Css Modules](https://github.com/gajus/babel-plugin-react-css-modules#css-modules)
- [PostCss Loader](https://github.com/postcss/postcss-loader#postcss-loader)
- [PostCss CssNext](https://github.com/MoOx/postcss-cssnext#postcss-cssnext)

Code Splitting

- [React](https://reactjs.org/docs/code-splitting.html)
- [React Loadable](https://github.com/jamiebuilds/react-loadable#------------guide)
- [Webpack](https://webpack.js.org/guides/code-splitting)