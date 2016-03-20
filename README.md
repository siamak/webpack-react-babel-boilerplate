# 🍉 Webpack–React–Babel Boilerplate:

[forthebadge](http://forthebadge.com/images/badges/uses-js.svg)

This repo is a boilerplate for Webpack-React-Babel project. You could use it as a base to build your own web app.

Boilerplate for kick starting a project with the following technologies:
* [React](https://github.com/facebook/react) (ver 0.14)
* [Babel](http://babeljs.io)
* [Webpack](http://webpack.github.io)
* [Webpack Dev Server](http://webpack.github.io/docs/webpack-dev-server.html)
* [CSS-Loader](https://github.com/webpack/css-loader)
* Lint with [ESlint](http://eslint.org) and [Airbnb](https://github.com/airbnb/javascript/tree/master/packages/eslint-config-airbnb)'s `.eslintrc` and [ESlint for React](https://github.com/yannickcr/eslint-plugin-react)
* Support [hot module replacement](https://webpack.github.io/docs/hot-module-replacement.html)
* Support NODE_ENV – Production `webpack.production.config.js` Development `webpack.config.js`

## 🔥 How to use

First, you should clone the repo and install the dependencies.

```bash
$ git clone git@github.com:siamakmokhtari/webpack-react-babel-boilerplate.git <yourAppName>
$ cd <yourAppName>
$ [sudo] npm install
```

Then, launch the boilerplate app.

For Serve app:
```bash
$ npm start
```

For Deploy app (UglifyJSPlugin – bundling):
```bash
$ npm run deploy
```
You should see a new browser tap opening and a title of "Hello World" in http://127.0.0.1:9100 || http://localhost:9100.



## 🍀 License
Copyright (c) 2016 Siamak Mokhtari. Licensed under [MIT](http://siamak.mit-license.org).

```
The MIT License (MIT)

Copyright (c) 2015 Siamak Mokhtari s.mokhtari75@gmail.com

Permission is hereby granted, free of charge, to any person obtaining a copy of
this software and associated documentation files (the "Software"), to deal in
the Software without restriction, including without limitation the rights to
use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of
the Software, and to permit persons to whom the Software is furnished to do so,
subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS
FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR
COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER
IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN
CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
```
