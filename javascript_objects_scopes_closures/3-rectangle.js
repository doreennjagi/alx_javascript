#!/usr/bin/node
/* take arguments provided*/
class Rectangle {
    constructor (w, h) {
    if (typeof w > 0 && typeof h > 0) {
        this.width = w;
        this.height = h;
    }
    }
    print () {
        for (let i = 0; i < this.height; i++) {
        let myVar = '';
        let y = 0;
        while (y < this.width) {
            myVar += 'X';
            y++;
        }
    
        console.log(myVar);
        }
    }
    }
    module.exports= rectangle
