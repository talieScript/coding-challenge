const testInput = {
    map: [5, 3],
    shipSequences: {
        1: {
            coordinates: [1, 1, "e"],
            input: "rfrfrfrf"
        },
        2: {
            coordinates: [3, 2, "n"],
            input: "frrfllffrrfll"
        },
        3: {
            coordinates: [0, 3, "w"],
            input: "llffflflfl"
        }
    }
}

function Map(mapCoordinates) {
    this.width = mapCoordinates[0];
    this.height = mapCoordinates[1];
}

function ShipStart(coordinates) {
    this.x = coordinates[0]
    this.y = coordinates[1]
    this.o = coordinates[2]
}

function moveShip(input, shipStart, map) {

}


