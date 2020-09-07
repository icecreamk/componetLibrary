enum Direction {
    Up = 10,
    Down,
    Left,
    Right
}

console.log(Direction.Up)
console.log(Direction.Down)
console.log(Direction[10])

const enum Direction1 {
    Up = 'Up',
    Down = 'Down'
}