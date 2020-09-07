function add(x:number, y:number, z?:number):number {
    return z ? x + y + z : x + y
}

function add1(x:number, y:number, z:number = 10):number {
    return x + y + z
}

let rtn = add(1, 2)
let rtn1 = add1(1, 2)