let a = 8;
let ageErr = new Error("Invalid");
try {
    if (a < 18) {
        throw new TypeError("Invalid name")
        // throw ageErr;
    } else {
        console.log("Age is greater than 18");
    }
} catch (err) {
    console.log(err.name)
    console.log(err.message);
}finally{
    console.log("Finally done")
}
//Nested try catch syntax
try {
    try {
        throw new Error("Invalid name")
    } catch (err) {
        console.log(err.name)
        console.log(err.message);
    }
} catch (err) {
    console.log(err.name)
    console.log(err.message);
}
// try-catch block with async function
async function asyncTryCatch() {
    try {
        throw new Error("Invalid name")
    } catch (err) {
        console.log(err.name)
        console.log(err.message);
    }
}
asyncTryCatch();
// try-catch block with async function and await
async function asyncTryCatchAwait() {
    try {
        throw new Error("Invalid name")
    } catch (err) {
        console.log(err.name)
        console.log(err.message);
    }
}
asyncTryCatchAwait()
// try-catch block with async function and await with nested try-catch
async function asyncTryCatchAwaitNested() {
    try {
        try {
            throw new Error("Invalid name")
        } catch (err) {
            console.log(err.name)
            console.log(err.message);
        }
    } catch (err) {
        console.log(err.name)
        console.log(err.message);
    }
}
asyncTryCatchAwaitNested()
// try-catch block with async function and await with nested try-catch and finally
async function asyncTryCatchAwaitNestedFinally() {
    try {
        try {
            throw new Error("Invalid name")
        } catch (err) {
            console.log(err.name)
            console.log(err.message);
        }
    } catch (err) {
        console.log(err.name)
        console.log(err.message);
    }finally{
        console.log("Finally done")
    }
}
asyncTryCatchAwaitNestedFinally();