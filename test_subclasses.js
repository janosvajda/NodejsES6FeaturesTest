"use strict";
/**
JavaScript sub class example

*/
class Bicycle {

    constructor() {
      console.log('Parent class constructor');
    }

    get color() {
        console.log('getter: '+this._color);
        return this._color;
    }

    set color(c) {
        this._color = c;
        console.log('setter: '+c);
    }
}

class RoadBike extends Bicycle  {
    constructor() {
        console.log('RoadBike constructor. super() should be called.');
            super();
        }
}

class CyclocrossBicycle extends Bicycle {
constructor() {
    console.log('CyclocrossBicycle constructor. super() should be called.');
        super();
    }

}


var MyCyclocrossBike = new CyclocrossBicycle();
var MyRoadBike = new RoadBike();
MyRoadBike.color='blue';
console.log(MyRoadBike.color);
