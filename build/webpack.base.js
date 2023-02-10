// webpack.base.js
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webpack = require('webpack')

module.exports = {
    // 入口文件
    entry: path.join(__dirname, '../src/index.tsx'),
    // 打包文件出口
    output: {
        // 每个输出js的名称
        filename: 'static/js/[name].js',
        // 打包结果输出路径
        path: path.join(__dirname, '../dist'),
        // webpack4需要配置clean-webpack-plugin来删除dist文件,webpack5内置了 
        clean: true,
        // 打包后文件的公共前缀路径
        publicPath: '/'
    },

    module: {
        rules: [
            {
                test: /.(ts|tsx)$/, // 匹配.ts, tsx文件
                // use: {
                //     loader: 'babel-loader',
                //     options: {
                //         // 预设执行顺序由右往左,所以先处理ts,再处理jsx
                //         presets: [
                //             '@babel/preset-react',
                //             '@babel/preset-typescript'
                //         ]
                //     }
                // }
                use: 'babel-loader'
                // use: {
                //     loader: 'babel-loader',
                //     options: {
                //         // 执行顺序由右往左,所以先处理ts,再处理jsx,最后再试一下babel转换为低版本语法
                //         presets: [
                //             [
                //                 "@babel/preset-env",
                //                 {
                //                     // 设置兼容目标浏览器版本,这里可以不写,babel-loader会自动寻找上面配置好的文件.browserslistrc
                //                     // "targets": {
                //                     //  "chrome": 35,
                //                     //  "ie": 9
                //                     // },
                //                     "useBuiltIns": "usage", // 根据配置的浏览器兼容,以及代码中使用到的api进行引入polyfill按需添加
                //                     "corejs": 3, // 配置使用core-js低版本
                //                 }
                //             ],
                //             '@babel/preset-react',
                //             '@babel/preset-typescript'
                //         ]
                //     }
                // }
            },
            {
                // 预设执行顺序由右往左,所以先处理less,再处理css
                test: /.(css|less)$/, //匹配 css 文件
                use: [
                    'style-loader',
                    'css-loader',
                    // 新增
                    // {
                    //   loader: 'postcss-loader', // 处理css时自动加前缀
                    //   options: {
                    //     postcssOptions: {
                    //       plugins: ['autoprefixer'] //决定添加哪些浏览器前缀到css中
                    //     }
                    //   }
                    // },
                    'postcss-loader',
                    'less-loader'
                ]
            }
        ]
    },
    resolve: {
        // 说白了就是import引入的文件自动加后缀
        // 注意把高频出现的文件后缀放在前面
        extensions: ['.js', '.tsx', '.ts'],
    },

    // 放插件的地方
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, '../public/index.html'), // 模板取定义root节点的模板
            inject: true, // 自动注入静态资源
        }),
        // 当前是打包模式,业务环境是开发环境,这里需要把process.env.BASE_ENV注入到业务代码里面,
        // 就可以通过该环境变量设置对应环境的接口地址和其他数据,要借助webpack.DefinePlugin插件
        new webpack.DefinePlugin({
            'process.env.BASE_ENV': JSON.stringify(process.env.BASE_ENV)
        })
    ]

}