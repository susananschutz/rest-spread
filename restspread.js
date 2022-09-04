// function filterOutOdds() {
//     var nums = Array.prototype.slice.call(arguments);
//     return nums.filter(function(num) {
//         return num % 2 === 0
//     });
// }

const filterOutOdds = (...args) => args.filter(v => v % 2 === 0) 
//}


// function findMin
const findMin = (...args) => Math.min(...args)


// function mergeObjects
const mergeObjects = (obj1, obj2) => ({...obj1, ...obj2})

// function doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [arr, ...args.map(v => v * 2)]

// function removeRandom(items) 
const removeRandom = items => {
    let idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
}


// funciton extend(array1, array2) 
const extendArray = (array1, array2) => {
    return [...array1, ...array2];
}

// function addKeyVal(obj, key, val) 
const addKeyVal = (obj, key, val) => {
    let newObj {...obj}
    newObj[key] = val;
    return newObj;
}

// function removeKey(obj, key) 
const removeKey = (obj,key) => {
    const newObj = {...obj}
    delete newObj[key]
    return newObj;
}

// function combine(obj1, obj2) 
const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
}

// function update(obj, key, value) 
const update = (obj, key, value) => {
    let newObj = {...obj}
    newObj[key] = value;
    return newObj;
}

