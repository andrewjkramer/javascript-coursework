/*** Rectangle Plotter
/*** by Andrew Kramer


This program creates a class named Rectangle that has four properties: x, y, width, and height, and two methods: toString() and shift(). The toString() method returns a string representation of the rectangle. The shift() method shifts the rectangle by a given amount in the x and y directions.


*** PSEUDOCODE


- Create a class named Rectangle with four properties: x, y, width, and height.
      - Create a constructor that takes four arguments and assigns them to the properties.

- Create a method named toString() that returns a string representation of the rectangle.

- Create a method named shift() that shifts the rectangle by a given amount in the x and y directions.

- Create a method named offset() that returns a new rectangle that is the same as the original but shifted by a given amount in the x and y directions.

- Create a new rectangle named r1 with x = 10, y = 20, width = 30, and height = 40.

- Display the rectangle r1.
- Display the string representation of the rectangle r1.

- Shift the rectangle r1 by -10 in the x direction and -20 in the y direction.
- Display the rectangle r1 after shifting.
- Display the string representation of the rectangle r1 after shifting.

- Create a new rectangle named r2 that is the same as r1 but shifted by 100 in the x direction and 100 in the y direction.

- Display the rectangle r1 after offset.
- Display the rectangle r2 after offset.
- Display the string representation of the rectangle r1 after offset.
- Display the string representation of the rectangle r2 after offset.


*/


// Create a class named Rectangle with four properties: x, y, width, and height.

class Rectangle {

    // Create a constructor that takes four arguments and assigns them to the properties.

    constructor( x, y, width, height ) {

        this.x = x;

        this.y = y;

        this.width = width;

        this.height = height;

    }

    // Create a method named toString() that returns a string representation of the rectangle.

    toString() {

        return `x = ${this.x}, y = ${this.y}, width = ${this.width}, height = ${this.height}`

    }

    // Create a method named shift() that shifts the rectangle
    // by a given amount in the x and y directions.

    shift( changeInX, changeinY ) {

        this.x = changeInX + this.x;

        this.y = changeinY + this.y;

    }

    // Create a method named offset() that returns a new rectangle that is the same as the
    // original but shifted by a given amount in the x and y directions.

    offset( changeinX, changeinY ) {

        return new Rectangle(this.x + changeinX, this.y + changeinY, this.width, this.height);

    }

}

// Create a new rectangle named r1 with x = 10, y = 20, width = 30, and height = 40.

r1 = new Rectangle(10, 20, 30, 40);

// Display the rectangle r1.

console.log('\n\n\n\nr1\t\t\t\t\t', r1)

// Display the string representation of the rectangle r1.

console.log('\n\nnr1.toString()\t\t\t\t', r1.toString())

console.log('\n\n')

// Shift the rectangle r1 by -10 in the x direction and -20 in the y direction.

r1.shift(-10, -20)

// Display the rectangle r1 after shifting.

console.log('\n\nr1 after shift\t\t\t\t', r1)

// Display the string representation of the rectangle r1 after shifting.

console.log('\n\nr1.toString() after shift\t\t', r1.toString());

console.log('\n\n')

// Create a new rectangle named r2 that is the same as r1 but shifted

r2 = r1.offset(100, 100);

// Display the rectangle r1 after offset.

console.log('\n\nr1 after offset\t\t\t\t', r1)

// Display the rectangle r2 after offset.

console.log('\n\nr2 after offset\t\t\t\t', r2)

console.log('\n\n')

// Display the string representation of the rectangle r1 after offset.

console.log('\n\nr1.toString() after offset\t\t', r1.toString());

// Display the string representation of the rectangle r2 after offset.

console.log('\n\nr2.toString() after offset\t\t', r2.toString());

console.log('\n\n')
