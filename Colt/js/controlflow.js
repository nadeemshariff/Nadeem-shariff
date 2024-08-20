// Control Flow

//>,<,>=,<=,!=,===,== ,!==

const temp = 39.5;

// if else
if (temp > 40) {
    console.log("it's too hot outside")
} else if (temp < 39) {
    console.log("it's too cold outside")
} else {
    console.log("it's just right outside")
}

// if
let x = 10
if (x < 10) {
    console.log("x is less than 10")
} else if (x > 10) {
    console.log("x is greater than 10")
} else {
    console.log("x is equal to 10")
}

// switch
switch (x) {
    case 10:
        console.log("x is equal to 10")
        break
    case 20:
        console.log("x is equal to 20")
        break
    default:
        console.log("x is neither 10 nor 20")
}
// switch with multiple cases
switch (x) {
    case 10:
        console.log("x is equal to 10")
    case 20:
        console.log("x is equal to 20")
    default:
        console.log("x is neither 10 nor 20")
}
// switch with no break
switch (x) {
    case 10:
    case 20:
        console.log("x is equal to 10 or 20")
    default:
        console.log("x is neither 10 nor 20")
}