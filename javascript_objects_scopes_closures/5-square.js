#!/usr/bin/node
/**
 * Square class that inherits from rectangle class
 */
const Rectangle = require('./4-rectangle').default.default;

class Square extends Rectangle {
constructor (size) {
    super(size, size);
}
}

const newLocal = module.exports;
newLocal = Square;
