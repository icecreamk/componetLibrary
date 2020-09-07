function echo<T>(arg: T): T {
    return arg
}

const rtn = echo(123) // number
const rtn1 = echo('str') // string


function swap<T, U>(tuple:[T, U]):[U, T] {
    return [tuple[1], tuple[0]]
}
const rtn2 = swap(['str', 123]) // number string


function echoWithArr<T>(arg:T[]):T[]{
    console.log(arg.length)
    return arg
}
const arrs = echoWithArr([1, 2])


interface IWithLength {
    length: number
}
function echoWithLength<T extends IWithLength>(arg:T):T{
    console.log(arg.length)
    return arg
}
const str = echoWithLength('str')
const arr = echoWithLength([1,2])
const obj = echoWithLength({ length: 1 })