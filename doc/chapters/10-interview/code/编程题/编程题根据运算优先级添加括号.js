// 现已知一个字符串是由正整数和加减乘除四个运算符(+ - * /)组成。

// 例如存在字符串 const str = '11+2-3*4+5/2*4+10/5'，现在需要将高优先级运算，用小括号包裹起来，例如结果为 '11+2-(3*4)+(5/2*4)+(10/5)'。
// 注意可能会出现连续的乘除运算，需要包裹到一起。

// 请用 javascript 实现这一过程

function addBrackets(expression) {
    const resultArr = []

    const symbolArr = ['+', '-', '*', '/']
    const highLevelSymbolArr = ['*', '/']


}