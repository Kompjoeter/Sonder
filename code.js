
class Flat {
    constructor(floors, appartmentsPerFloor) {
        this.floors = floors;
        this.appartmentsPerFloor = appartmentsPerFloor;
        this.appartments = this.generate();
    }

    getAppartmentsPerFloor() {
        console.log(`Getting appartmentsPerFloor: ${this.appartmentsPerFloor}`);
        return this.appartmentsPerFloor;
    }

    generate() {
        console.log('Generating flat');
        let arr = [];
        for (let f = 0; f < this.floors; f++) {
            arr[f] = []
            for (let a = 0; a < this.appartmentsPerFloor; a++) {
                let appartment = new Object;

                appartment.number = `${(f * 100) + (a + 1)}`;

                let rand = Math.floor(Math.random(10) * 10);
                appartment.lit = false;
                if (rand > 7) {
                    appartment.lit = true;
                }

                arr[f][a] = appartment;
            }
        }
        return arr;
    }
}

let newFlat = new Flat(Math.floor(Math.random(10) * 10), Math.floor(Math.random(10) * 10));

// Initialization of Flat. One time run. Create and configure all nessecary HTML Elements. 
loadFlat(newFlat);
function loadFlat(flat) {
    for (let f = flat.floors - 1; f >= 0; f--) {
        let buildingElement = document.getElementById('building');
        let floorElement = document.createElement('div');
        floorElement.className = 'floor';
        floorElement.id = `floor-${f}`;
        buildingElement.appendChild(floorElement);

        for (let a = 0; a < flat.appartmentsPerFloor; a++) {
            let appartment = flat.appartments[f][a];
            let appartmentElement = document.createElement('div');
            appartmentElement.addEventListener('click', function () {
                document.getElementById('number').innerHTML = `Number: ${flat.appartments[f][a].number}`
                let status = 'Status: Resident is away or sleeping, sssh!'
                if (flat.appartments[f][a].lit) {
                    status = 'Status: Resident is home and awake!'
                }
                document.getElementById('status').innerHTML = status;
            })

            if (appartment.lit) {
                appartmentElement.className = 'appartment lit'
            } else {
                appartmentElement.className = 'appartment';
            }

            appartmentElement.id = appartment.number;

            floorElement.appendChild(appartmentElement);
            let frame = document.createElement('div');
            frame.className = 'frame';
            appartmentElement.appendChild(frame);

        }
    }
}