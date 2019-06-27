const testInput = {
    map: [5, 3],
    shipSequences: {
        first: {
            coordinates: [1, 1, "e"],
            input: "rfrfrfrf"
        },
        second: {
            coordinates: [3, 2, "n"],
            input: "frrfllffrrfll"
        },
        third: {
            coordinates: [0, 3, "w"],
            input: "llffflflfl"
        }
    }
}

//map size
function Map(mapCoordinates) {
    this.width = mapCoordinates[0];
    this.height = mapCoordinates[1];
}

// initial start location
function ShipStart(coordinates) {
    this.x = coordinates[0]
    this.y = coordinates[1]
    this.o = coordinates[2]
}

function moveShip(input, shipStart, map) {
    // split sting into arr of instructions
    let iArr = input.split("");
    // get initial ship position
    let position = shipStart;
    // forards command function
    function shipForwards(orientation) {
        switch(orientation) {
            case "n":
                position.y += 1
                break;
            case "s":
                position.y -= 1
                break;
            case "e":
                position.x += 1
                break;
            case "w":
                position.x -= 1
                break;
        }
    }
    // change orientation of ship function
    function shipTurn(command, orientation) {
        if(command === "r") {
            switch(orientation) {
                case "n":
                    position.o = "e"
                    break;
                case "s":
                    position.o = "w"
                    break;
                case "e":
                    position.o = "s"
                    break;
                case "w":
                    position.o = "n"
                    break;
            }
        }
        if(command === "l") {
            switch(orientation) {
                case "n":
                    position.o = "w"
                    break;
                case "s":
                    position.o = "e"
                    break;
                case "e":
                    position.o = "n"
                    break;
                case "w":
                    position.o = "s"
                    break;
            }
        }
    }
    // loop through commands and move ship
    iArr.forEach((com) => {
        if(com === "l" || "r") {
            shipTurn(com, position.o);
        } 
        if(com === "f") {
            shipForwards(position.o);
        }
    });

    // check if LOST and log position
    if(position.x > map.width || position.y > map.height) {
        console.log(position.x+" "+position.y+" "+position.o+" LOST")
    } else {
        console.log(position.x+" "+position.y+" "+position.o)
    }
}

const map = new Map(testInput.map);
const start = new ShipStart(testInput.shipSequences.first.coordinates);
const input = testInput.shipSequences.first.input;

moveShip(input, start, map);
