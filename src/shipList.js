import Ship from "./ships.js"

function getShips() {
    return [
        {
            ships: [new Ship(1), new Ship(1), new Ship(1), new Ship(1)]
        },
        {
            ships: [new Ship(2), new Ship(2), new Ship(2)]
        },
        {
            ships: [new Ship(3), new Ship(3)]
        },
        {
            ships: [new Ship(4)]
        }
    ]
}

export default getShips