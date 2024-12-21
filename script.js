let arr = [
    [115, 50, 25],
    [75, 12, 99],
    [34, 36, 55]
]

// [190, 186, 125]

let arr2 = arr.map((item) => {
    let sum = 0;

    item.forEach((elem) => {
        sum = sum + elem;
    });
    
    return sum;
});

console.log(arr2);


