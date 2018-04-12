### TypeScript, React, Css modules and Post Css

A React example project to demonstrate how to implement Css Modules and Post Css using TypeScript.

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

Server

- Http-server v0.10

Build tools

- Webpack v4    
[ts-loader](https://github.com/TypeStrong/ts-loader)    
[babel-loader](https://github.com/babel/babel-loader)   
[css-loader](https://github.com/webpack-contrib/css-loader) 
[postcss-loader](https://github.com/postcss/postcss-loader) 
[mini-css-extract-plugin](https://github.com/webpack-contrib/mini-css-extract-plugin)   
- Babel v6  
[babel-plugin-react-css-modules](https://github.com/gajus/babel-plugin-react-css-modules)   
[babel-preset-env](https://github.com/babel/babel/tree/master/packages/babel-preset-env)    
[babel-preset-react](https://github.com/babel/babel/tree/master/packages/babel-preset-react)    

### Code

Source code is under ```source``` folder.

Client code is built into ```client``` folder.

### Build process

The application is built through Webpack.

1. TypeScript type check and emit JavaScript es2015 (TypeScript without types) consumable by Babel.
2. ```babel-preset-react``` transform React jsx and ```babel-preset-env``` es2015 syntax into code understandable by the browser.
3. ```babel-plugin-react-css-modules``` transform ```styleName``` attribute into ```className``` React attribute.
4. Postcss transform new css syntax into css understable today by the browser using ```postcss-cssnext```.
5. ```css-loader``` import css files and generate scoped class names regarding ```localIdentName``` option.
6. Finally, imported and transformed css files are extracted from the JS bundle into a bundle Css using ```mini-css-extract-plugin```.

### Documentation

This sample project was made according to these documentations.

- [Css Modules](https://github.com/css-modules/css-modules)
- [Css Loader](https://github.com/webpack-contrib/css-loader#css-loader)
- [Mini Css Extract](https://github.com/webpack-contrib/mini-css-extract-plugin#mini-css-extract-plugin)
- [React Css Modules](https://github.com/gajus/babel-plugin-react-css-modules#css-modules)
- [PostCss Loader](https://github.com/postcss/postcss-loader#postcss-loader)
- [PostCss CssNext](https://github.com/MoOx/postcss-cssnext#postcss-cssnext)