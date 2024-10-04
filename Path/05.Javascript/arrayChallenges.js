// 1. Declaring an array named `teaFlavors` that contains the strings `"green tea"`, and `"oolong tea"`.
    //Access the first element in the array and store it in a variable named `firstTea`.

    //Access the last element in the array and store it in a variable named `lastTea`.

    let teaFlavors = ["green tea", "Black tea", "oolong tea"];
    let firstTea = teaFlavors[0];
    let lastTea = teaFlavors[1];

    console.log(firstTea);
    console.log(lastTea);



// 2. Declare an array named `cities` containing `"London"`,`"Tokyo"`, `"Paris"`, and `"NewYork"`.
    // Access the third element in the array and store it in a variable named `favoriteCity`.

    let cities = ["London", "Tokyo", "Paris", "NewYork"];
    let favoriteCity = cities[2];

    console.log(favoriteCity);
//3. You have an array named `teaTypes` containig `"herbal tea"`, `"white tea"`, `"masala chai"`. 
    //change the second element of the array of the array to `"jasmine tea"`.

    let teaTypes = ["herbal tea", "white tea", "masala chai"];
    teaTypes[1] = "jasmine tea";

    console.log(teaTypes)

//4. Declare an array named `citiesVisited` containing `"Mumbai"` and `"Delhi"`.
    // Add `"Berlin"` to the array using the 'push' method.

    let citiesVisited = ["Mumbai", "Delhi"];
    citiesVisited.push("Berlin");

    console.log(citiesVisited)

    // 5. Remove the last element of the citiesVisited array using the 'pop' method and store it in a variable
    let lastVisitedCity = citiesVisited.pop();

    console.log("Removed city:", lastVisitedCity);
    console.log("Updated citiesVisited array:", citiesVisited);
