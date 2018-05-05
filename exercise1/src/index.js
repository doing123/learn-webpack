require('./hello');
/**
 * style-loader:通过 css-loader处理之后的文件 新建一个标签插入到html中
 * css-loader:使webpack可以处理 .css 文件
 */

/**
 * npx webpack --mode development --progress --display-modules --display-reasons // 进度，原因，模块
 * npx webpack --mode development --watch // 监听
 */
require('style-loader!css-loader!./style.css');

function hello(str) {
    console.log(str);
}

hello('hello world!......');