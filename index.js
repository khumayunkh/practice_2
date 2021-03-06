// console.log('hello')

let x = [1,2,3,4,5]
let sum = 0
for(let i of x){
    sum += i
}

// console.log(sum)

let euro = Intl.NumberFormat('es',{style:'currency', currency:'EUR'}).format(18);
console.log(euro)

// console.log('hello')

// let s = new Set();
// s.add(2).add(2).add(3) // 2, 3
// console.log(s)

// let m = new Map()
// m.set('one', 2).set('two',2)
// console.log(m.get('one')) // 1
// console.log(m.get(2)) // undefined

// let y = {name:'Humoyun', firstName: 'Hasanov'}

// for(let x in y){
//     console.log(x) // name, firstName
//     console.log(y[x]) // Humoyun. Hasanov
// }

var button = document.getElementById("clickme")
let count = 0;
button.onclick = function() {
  count += 1;
  document.querySelector('.counter').innerHTML = "Click " + count;
};

let buuton_minus = document.querySelector('.minus')
buuton_minus.onclick = function(){
    count >0 ? count -= 1 : null;
    document.querySelector('.counter').innerHTML = 'Click ' + count
}


function filterArray(a){
    let b = a.filter(item => typeof item === 'number')
    return b
}

let a = [2,1,2,3, 'humayun', ' hello']
console.log(filterArray(a))

function doubleChar(){
    let a = [...document.querySelector('.double_input').value]
    let b = a.map(item => item.repeat(2)).join('')
    return document.querySelector('.double').innerHTML = b
}

document.querySelector('.btn_double').onclick = doubleChar

// function sortBylength(){
//     let a = ['ss', 'f', 'fdg', 'frrrr']
//     let b = a.sort((a,b) => a.length-b.length)
//     return b 
// }

// console.log(sortBylength())

// let drinks = [
//     {name: 'lemonade', price: 50},
//     {name: 'lime', price: 10},
//     {name: 'water', price: 5}
// ]

// function sortDrinkPrice(drinks){
//     let b = drinks.sort((a,b) => a.price - b.price)
//     return b
// }

// console.log(sortDrinkPrice(drinks))


function tuckIn(a,b){
    a.splice(0,0,...b)
    a.sort((a,b) => a-b)
    return a
}

console.log(tuckIn([41,52,111],[32,33,42]))



function isFirstSuperir(a,b){
    return a.toString() >= b.toString()
}

console.log(isFirstSuperir([1,2,3,4], [1,2,4,4]))

function highestDigit(){
    let x = [...document.querySelector('.input_highest').value]
    x.sort((a,b)=> a-b)
    return document.querySelector('.highest').innerHTML = x[x.length-1]
}

document.querySelector('.btn_highest').onclick = highestDigit



function countVowels(){
    let str = document.querySelector('.counter_input').value
    let vowels = ['a', 'e', 'o', 'i', 'u']
    let counter = 0
    for(let i in vowels){
        if(str.includes(vowels[i])){
            counter++
        }
    } 
    return document.querySelector('.counter_vowels').innerHTML = counter
}


document.querySelector('.btn_counter').onclick = countVowels

function getAbsSum(){
    let a = [...document.querySelector('.input_sum').value]
    let y = a.reduce((a,b)=> parseInt(a)+parseInt(b))
    return document.querySelector('.sum').innerHTML = y
}

document.querySelector('.btn_sum').onclick = getAbsSum


function firstVowel(){
    let a = document.querySelector(".input_first_vowel").value
    let vowels = ['o', 'e', 'a', 'i', 'u']
    for(let i in vowels){
        if(vowels.includes(a[i])){
            return document.querySelector('.vowel').innerHTML = a[i]
        }
    }
}

document.querySelector('.btn_vowel').onclick = firstVowel

// console.log(Math.pow(2,5))

function sumOfCubes(){
    let a = [...document.querySelector('.input_cubes').value]
    let c = a.map(item => parseInt(Math.pow(item, 3)))
    let d = 0
    for(let i of c){
        d += i
    }
    return document.querySelector('.cubes').innerHTML = d
}

document.querySelector('.btn_cubes').onclick = sumOfCubes

function getOnlyEvents(){
    let a = [...document.querySelector('.events_input').value]
    let c = a.map(item => parseInt(item)).filter(item => item % 2 == 0).join(' ')
    return document.querySelector('.events').innerHTML = c
}

document.querySelector('.btn_events').onclick = getOnlyEvents

function isAvgWhole(){
    let a = [...document.querySelector('.input_avg').value]
    let c = a.reduce((a,b)=> parseInt(a)+parseInt(b))
    let x = c % a.length === 0
    return document.querySelector('.avg').innerHTML = x
}

document.querySelector('.btn_avg').onclick = isAvgWhole




function sortNumsAscending(){
    let a = [...document.querySelector('.input_sort').value]
    let c = a.map(item => parseInt(item)).sort((a,b) => a-b)
    let x = [...new Set(c)].join(' ')
    return document.querySelector('.sort').innerHTML = x
}

document.querySelector('.btn_sort').onclick = sortNumsAscending



// let k = 'potato'
// let po = [...k]
// console.log(po)
// console.log(po.includes('e', 's') ? 2 : 1)


function potato(){
    let potato = document.querySelector('.input_potato').value
    console.log(potato)
    if(!potato.includes('potato') && !potato.includes('potatoes')){
        return document.querySelector('.potatoes').innerHTML = 'zero potato'
    }
    return document.querySelector('.potatoes').innerHTML = potato.includes('potatoes') ? 2 : 1
}

document.querySelector('.btn_potatoes').onclick = potato


const sortDescending = () =>{
    let a = [...(document.querySelector('.input_descen').value)]
    let b = a.map(item => parseInt(item)).sort((a,b) => a-b).reverse()
    let c = [...new Set(b)].join(' ')
    return document.querySelector('.descen').innerHTML = c
}

document.querySelector('.btn_descen').onclick = sortDescending


function addUp(){
    let a = parseInt(document.querySelector('.input_sum_num').value)
    let b = 0
    for(let i = 0; i<=a; i++){
        b += i
    }
    return document.querySelector('.sum_num').innerHTML = b
}

document.querySelector('.btn_sum_num').onclick = addUp

let obj = {a:1, b:2, c:3}

function keyS(obj){
    return Object.keys(obj)
}


function values(obj){
    return Object.values(obj)
}

// let keysAndValues = new Array(values(obj), keys(obj))
// console.log(keysAndValues)

function keysAndValues(obj){
    let x = new Array(values(obj), keyS(obj))
    return x
}

console.log(keysAndValues(obj))

function factorial(){
    let a = parseInt(document.querySelector('.input_factorial').value)
    let b = 1
    for(let i = 1; i<=a; i++){
        b *= i
    }
    return document.querySelector('.factorial').innerHTML = b
}


document.querySelector('.btn_factorial').onclick = factorial

function repetition(a,b){
    let c = a.repeat(b)
    return c
}


console.log(repetition('kivi',2))


let obb = [{name: 'Humoyun', age:19},{name:'Kamron', age:22}]

function toStr(obj){
    let a = obj.map(item => item.name).join(' ')
    return a
}

console.log(toStr(obb))

function canNest(array_1,array_2){
    let a = array_1.sort()
    let b = array_2.sort()
    console.log([a.length-1])
    return a[0] > b[0] && a[a.length-1] < b[b.length-1]
}

console.log(canNest([9, 9, 8], [8, 9]))

function set(){
    let a = [...document.querySelector('.input_set').value]
    let b =[...new Set(a)].sort().join(' ')
    return document.querySelector('.set').innerHTML = b
}

document.querySelector('.btn_set').onclick = set


// let zip = ['1', '2', '3', '4', 'o']
// let i = zip.map(item => parseInt(item)).filter(it => it === it)
// console.log(i)
// console.log(Number.isInteger(i))

function zip(){
    let a = [...document.querySelector('.zip_input').value]
    let b = a.map(item => parseInt(item)).filter(item => item === item)
    console.log(b)
    return document.querySelector('.zip').innerHTML = b && b.length === 5
}

document.querySelector('.zip_btn').onclick = zip

function isSymmetrical(){
    let a = [...document.querySelector('.input_symmetric').value]
    let b = a.map(item => parseInt(item))
    let x = b.join('')
    let c = b.reverse().join('')
    return document.querySelector('.symmetric').innerHTML = c === x
}

document.querySelector('.btn_symmetric').onclick = isSymmetrical

function countTrue(a){
    let count = 0
    a.forEach(item => item === true ? count++ : null )
    return count
}

console.log(countTrue([true, false, true, true]))

function redundant(a){
    function str(){
        return a
    }
    return str
}

const f1 = redundant('appple')
console.log(f1())

function shiftToRight(a,b){
    let c = Math.pow(2, b)
    console.log(c)
    return a/c
}

console.log(shiftToRight(-24,2))

function num_of_digits(){
    let a = [...document
        .querySelector('.input_digits').value]
    let count = 0
    a.map(item => parseInt(item))
        .filter(item => item === item)
            .forEach(item => count++)
    return document.querySelector('.digits')
        .innerHTML = count
}

document.querySelector('.btn_digits').onclick = num_of_digits

function addName(obj, name, value){
    const a = {}
    a[name] = value
    return Object.assign(obj,a)
}


console.log(addName({piano: 500}, 'Brutus', 400))

let okk = {a:1, b:2, c:3}


function keyssss(okk){
    return Object.keys(okk)
}

function valuesss(okk){
    return Object.values(okk)
}

function keyAndValue(okk){
    return new Array(valuesss(okk), keyssss(okk))
}

console.log(keyAndValue(okk))


function isSpecialArray(){
    let a = [...document.querySelector('.special_input').value]
    let b = a.filter(el => el % 2 === 0).length
    let c = a.filter(el => el % 2 !== 0).length
    return document.querySelector('.special').innerHTML = b === c
}

function getMiddle(a){
    let b = [...a]
    let c = b.length
}

console.log(getMiddle('hello'))
document.querySelector('.btn_special').onclick = isSpecialArray

function paths(){
    let a = parseInt(document.querySelector('.input_paths').value)
    let b = 1
    for(let i = 1; i<=a; i++){
        b *= i
    }
    return document.querySelector('.paths').innerHTML = b
}

document.querySelector('.btn_paths').onclick = paths

function clone(){
    let a = [...document.querySelector('.clone_input').value]
    let b = [...a]
    let c = [...a,[...b].join(' ')].join(' ')
    console.log(c)
    return document.querySelector('.clone').innerHTML = c
}

document.querySelector('.btn_clone').onclick = clone

function secondLargest(a){
    a.sort((a,b) => a-b) 
    return a[a.length - 2]
}


console.log(secondLargest([12,62,10,26,45]))

function arrayOfMultiples(a,b){
    let c = new Array()
    let d = 1
    for(let i = 1; i<=b; i++){
        d = i * a
        c.push(d)
    }
    return c
}


console.log(arrayOfMultiples(12,10))


function numbersSum(a){
    let c = a.map(item => parseInt(item))
        .filter(item => item === item)
    let b = 0
    console.log(c)
    for(let i of c){
        b += i
    }
    return b
}


console.log(numbersSum([1, 2, 3, '3']))



function totalValue(...a){
    let x = a[0].reduce((a,b) => a*b)
        + a[1].reduce((a,b) => a*b)
            + a[2].reduce((a,b) => a*b)
    return x
}

console.log(totalValue([4, 2, 4], [3, 3, 3,], [1, 1, 2]))

function jazzify(a){
    let b = a.map(item => item.includes('7') ? item : item + '7')
    return b
}


console.log(jazzify(["F", "E", "A", "Ab", "Gm", "C"]))

const stolenItems = {
    tv: 30,
    skate: 20,
    stereo: 50,
  }

function stolenItemsSum(stolenItems){
    let b = Object.values(stolenItems)
    return b.reduce((a,b) => a+b)
}

console.log(stolenItemsSum(stolenItems))



function findNemo(nemo){
    let b = nemo.split(' ')
    let c = b.findIndex(item => item === 'Nemo') + 1
    return c ? `I fount Nemo at ${c}` : `I can't find Nemo :(`
}

console.log(findNemo("I am finding Nemo !"))

function progressDays(a){
    let days = 0
    for(let i = 0; i<a.length; i++){
        if(a[i]>a[i-1]){
            days++
        }
    }
    return days
}

console.log(progressDays([3, 4, 1, 2]))



function equel(){
    let a = [...document.querySelector('.input_equel').value]
    let count = 0
    let b = a.map(item => parseInt(item))
    for(let i in b){
        for(let f in b[i]){
            if(b[f] === b[f]){
              count++
            }
        }
    }
    return document.querySelector('.equel').innerHTML = count
}

document.querySelector('.btn_equel').onclick = equel

let xxs = 'Hello'

function count_length(xxs){
    let count = 0
    let x = [...xxs]
    x.map(item => count++) 
    return count
}

console.log(xxs.length)
console.log(count_length(xxs))


let arrrr = [{name:"humoyun", age:22}, {name:'Kamron', age:21}]


function tostr(arrrr){
    let a = arrrr.map(item => item.name).join(' ')
    return a
}

console.log(tostr(arrrr))




function generation(a,b){
    const generation_obj = {
        '-3': { m: "great grandfather", f: "great grandmother" },
        "-2": { m: "grandfather", f: "grandmother" },
        "-1": { m: "father", f: "mother" },
        0: { m: "me!", f: "me!" },
        1: { m: "son", f: "daughter" },
        2: { m: "grandson", f: "granddaughter" },
        3: { m: "great grandson", f: "great granddaughter" },
    };
    return generation_obj[a][b]
}


console.log(generation(2 , 'f'))


function isRepdigit(){
    let a = [...document.querySelector('.input_isRepdigit').value]
    let b = a.map(item => parseInt(item)).reduce((a,b)=> (a && b >= 0) ? a===b : false)
    return document.querySelector('.isRepdigit').innerHTML = b
}

document.querySelector('.btn_isRepdigit').onclick = isRepdigit



function dis(a,b){
    let c = (a/100) * (100-b)
    return c
}

console.log(dis(89,20))

function calculator(a,b,c){
    operations = {
		'+': (a,b) => a + b,
		'-': (a,b) => a - b,
		'*': (a,b) => a * b,
		'/': (a,b) => b ? a / b :"Can't divide by 0!"
	}
    return operations[b](a,c)
}

console.log(calculator(2 , '+' , 4))


function rev(){
    let a = [...document.querySelector('.input_rev').value]
    let b = a.map(item => parseInt(item)).reverse().join('')
    return document.querySelector('.rev').innerHTML = b
}

document.querySelector('.btn_rev').onclick = rev

// function matchLastItem(a){
//     let b = a.map(item => item.toString())
//     let c = ''
//     for(let i of b[b.length - 1]){
//         c += i
//     }
//     return c == b[b.length-1]
// }

// console.log(matchLastItem(["rsq", "6hi", "g", "rsq6hig"]))

// function backToHome(a){
//     let upDown = 0 
//     let leftRight = 0
//     for(let i of a){
//         if(i === 'N'){
//             upDown += 1
//         }else if(i === 'S'){
//             upDown -= 1
//         }else if(i === 'E'){
//             leftRight += 1
//         }else if(i === 'W'){
//             leftRight -= 1
//         }
//     }
//     return upDown === 0 && leftRight === 0
// }

// console.log(backToHome('EEWWSSNN'))

function allTruthy(...a){
    return a.every(item => item === true)
}

console.log(allTruthy(true,true,true))

function removeDups(a){
    let b =[...new Set(a)]
    return b
}

console.log(removeDups([1, 0, 1, 0]))


function factorChain(a){
    let b = new Array()
    let x = 1
    let i = a[0]
    let c = a.length
    console.log(c)
    for(i; i<=c ; i++){
        b.push(x)
        x = x * 2
    }
    return b
}

console.log(factorChain([1, 2, 4, 8, 16, 32]))

function factorChain_2(a){
    let count = 1
    console.log(a.length)
    for(let i = 0; i <= a.length; i++){
        let x =a[i+1]/2
        if(a[i]==x){
            count++
        }
    }
    console.log(a.length)
    return count == a.length
}



console.log(factorChain_2([1, 2, 4, 8, 16, 32, 64, 128]))

function uniqueSort(){
    let a = [...document.querySelector('.input_uniqueSort').value]
    let b = a.map(item => parseInt(item)).sort()
    let c = [...new Set(b)].join(' ')
    return document.querySelector('.uniqueSort').innerHTML = c 
}

document.querySelector('.btn_uniqueSort').onclick = uniqueSort

function validatePIN(){
    let a = [...document.querySelector('.input_validatePIN').value]
    let b = a.map(item => parseInt(item)).filter(item => item === item)
    return document.querySelector('.validatePIN').innerHTML = b.length === 4 || b.length === 6
}

document.querySelector('.btn_validatePIN').onclick = validatePIN

function multiplyNums(nums){
	return nums.split(', ').reduce((a, b) => a * b, 1);
}

console.log(multiplyNums('1, 2, 3, 4'))


function numOfSubbarrays(a){
    let b = a.filter(Array.isArray).length
    return b 
}

console.log(numOfSubbarrays([[1, 2, 3], [1, 2, 3], [1, 2, 3], [1, 2, 3], 'ppp']))


function squareDigits(a){
    let b = a.toString()
    let c = [...b]
    let d = c.map(item => parseInt(item)).map(a => Math.pow(a,2)).join('')
    return d
}

console.log(squareDigits(9119))


function factorize(a){
    let x =new Array()
    for(let i = 1; i<=a; i++){
        if(a % i === 0 ){
            x.push(i)
        }
    }
    return x  
}

console.log(factorize(10))

function getNumberOfApples(a,b){
    let c = parseInt(b)
    let d = (a/100) * c 
    return a-d !=0 ? parseInt(a-d) : `The children didn't get any apples`
}

console.log(getNumberOfApples(25, '10%'))

const names = ["Dennis", "Vera", "Mabel", "Annette", "Sussan"]
const jobs = ["Butcher", "Programmer", "Doctor", "Teacher", "Lecturer"]


function assignPersonToJob(name,job){
    let a = {}
    name.forEach((person, i) => a[person] = job[i])
    return a
}

console.log(assignPersonToJob(names,jobs))

function capMe(a){
    return a.map(item => item[0].toUpperCase() + item.substring(1).toLowerCase())
}


console.log(capMe(["samuel", "MABELLE", "letitia", "meridith"]))


function warOfNumbers(a){
    let b = a.filter(item => item % 2 === 0).reduce((a,b)=> a+b)
    let c = a.filter(item => item % 2 !== 0).reduce((a,b)=> a+b)
    let x = new Array(c,b).sort((a,b) => a-b).reverse().reduce((a,b) => a-b)
    return x
}

console.log(warOfNumbers([5, 9, 45, 6, 2, 7, 34, 8, 6, 90, 5, 243]))

function sumArray(a){
    let b = a.flat(10).reduce((a,b) => a+b)
    return b 
}

console.log(sumArray([1, [2, [1]], 3]) )

function isVowelSandwich(){
    let vowels = ['o', 'e', 'a', 'i', 'u']
    let a = [...document.querySelector('.input_isVowelSandwich').value]
    if(a.length != 3)return false
    return document.querySelector('.isVowelSandwich').innerHTML = !vowels.includes(a[0]) && vowels.includes(a[1]) && !vowels.includes(a[2])  
}

document.querySelector('.btn_isVowelSandwich').onclick = isVowelSandwich

function fruitSalad(a){
    let b = a.flatMap(str => [str.slice(0, str.length/2), str.slice(str.length/2)]).sort().join('')
    return b
}

console.log(fruitSalad(["apple", "pear", "grapes"]))

function flickSwitch(a){
    let b = true
    return a.map(x => x === 'flick' ? b = !b : b)
}

console.log(flickSwitch(["edabit", "flick", "eda", "bit"]))


function indexMultiplier(a){
    let x = 0
    let b = 0
    for(let i in a){
        x = i * a[i]
        b += x
    }
    return b
}

console.log(indexMultiplier([-3, 0, 8, -6]))

function mirror(a){
    let b = [...a]
    b.reverse().shift()
    let c = [...a,...b]
    return c
}


console.log(mirror([1, 2, 3, 4, 5]))


function solveForExp(a,b){
    let count = 1
    while(a**count !== b) count++
    return count
}

console.log(solveForExp(2, 32))


function mean(a){
    let b = a.toString().split('').map(item => +item)
    return b.reduce((a,b) => (a+b)) / b.length
}

console.log(mean(42))

function oneOddOneEven(a){
    let b = a.toString().split('').map(item => +item)
    let x = []
    for(let i of b){
        if(i % 2 === 0){
            x.push(true)
        }
        if(i % 2 !== 0){
            x.push(false)
        }
    }
    let y = x.filter(item => item === false).length
    let z = x.filter(item => item === true).length
    return y === z
}


console.log(oneOddOneEven(55))

function* generator(){
    yield 'H'
    yield 'u'
    yield 'm'
    yield 'o'
    yield 'y'
    yield 'u'
    yield 'n'
}

let ger = generator()
console.log(ger)



const itarator = {
    gen(n=10){
        let i = 0
        return{
            next(){
                if(i<n){
                    return {value : ++i, done : false}
                }
                return {value : undefined, done : true}
            }
        }   
    }
}

function* yield_1(){
    yield* 'hello'
}



// function fff(a){
//     let b = a.sort((a,b) => a.length = b.length)
//     return b[0]
// }

// console.log(fff(['humo', 'ew', 'hdsfr']))

// function func(x){
//     return x + x
// }

// function apply(arr, func) {
//     let a = arr.map(func,arr)
//     return a
// }
// function apply_1(arr, func) {
//     let a = arr.map(item=> func(item))
//     return a
// }

// console.log(apply_1([1,2,3,4,5], func))

function totalLength(arr){{
    let b = arr.join('')
    return b.length    
}}
console.log(totalLength(["Kamran", "Khumoyun", "Valijonov"]))


function findMax(a, b){
    let c = a.sort((a,b)=> a-b)
    return c
}

console.log(findMax([1,3,5,0,22,11,14,15], 3))

arr1 = [{name:'humoyun', age:19}] 
arr2= [{name:'humoyun', age: 19}, {name: "humo", age: 11}, {name: "kama", age: 10}]

function concatObj(arr1,arr2){
   let arr3 = arr1.concat(arr2)
   arr3 = new Set(arr3)
   console.log(arr1[0] == arr2[0])
   return arr3
}
console.log(concatObj(arr1,arr2))

function concatObjectsWithoutDuplicates(arr1, arr2) {
    var result = arr1.concat(arr2);
    for (var i = 0; i < result.length; i++) {
        for (var j = i + 1; j < result.length; j++) {
            for (const [key, value] of Object.entries(result[i])) {
                if (result[j][key] === value) {
                    result.splice(j, 1);
                }
            }
        }
    }
    return result
}

console.log(concatObjectsWithoutDuplicates(arr1, arr2))



function doubleFactorial(a){
    let x = 1
    while(a >= 1){
    x *= a
    a = a - 2
    }
    return x
}

console.log(doubleFactorial(2))


function replaceVowel(a){
    let vowels = { 'a' : 1, 'e' : 2,
        'i' : 3, 'o' : 4, 'u' : 5,}
    return [...a]
        .map(item => item in vowels 
            ? vowels[item] : item).join('')
}

console.log(replaceVowel('khandabari'))


function findHighest(a){
    let b = a.sort((a,b) => a-b)
    return b[b.length - 1]
}

console.log(findHighest([-1,3,5,6,99,12,2]))

function fixImport(a){
    let b = a.slice(a.indexOf('from'))
    let c = a.slice(0, a.indexOf('from'))
    console.log(c)
    return `${b} ${c}`
}

console.log(fixImport('import object from module_name'))




let arrr = [12,34,4,5,'6',78]
console.log(arrr.slice(0, arrr.indexOf(5)))
console.log(arrr.splice(1,4))


function tryCatch(){
    let x = 5
    try{
        return ducument.querySelector('.tetxt').innerHTML = x
    }catch(err){
        return  err.message
    }
}

console.log(tryCatch())

// function setTimeOut(){
//     return setTimeout(() =>console.log('time_out'), 3000 )
// }

// console.log(setTimeOut())

// function set_Interval(){
//     interval = setInterval(() => console.log('interval'), 1000)
//     return interval
// }



// function stopInterval(){
//     let stop_inter = setTimeout(() => clearInterval(interval), 6000)
//     return stop_inter
// }


// function returnw(){
//     let x = 6
//     interval = setInterval(() => console.log('interval'), 1000)
//     let stop = setTimeout(() => clearInterval(interval), 5000)
//     return interval
// }
// console.log(returnw())


function returnMultiple(){
    let firstName = "Hasanov"
    let secontName = 'Humoyun'
    return {firstName, secontName}
}

console.log(returnMultiple())




async function awaitAsync(){
    let responce = await setTimeout(() => console.log('hummo'), 3000)
    let x = await responce
    return {responce, x}
}

console.log(awaitAsync())

function lastDig(a,b,c){
    let x = a.toString()
    let y = b.toString()
    let z = c.toString()
    let f = (x[x.length-1] * y[y.length-1]).toString()
    return f[f.length-1] === z[z.length-1]
}

console.log(lastDig(12, 215, 2142))


function missingNum(a){
    let x = a.sort((a,b)=> a-b)
    for(let i = 1; i<=x.length;i++){
        if(x.indexOf(i) === -1){
            x.push(i)
        }
    }
    return x.sort((a,b)=> a-b)
}

console.log(missingNum([1,2,3,4,5,7,8,10,9,12,14]))

function product(a,b){
    return function(c,d){
        return function(f,g){
            return (a * c * f) + (b * d * g)
        }
    }
}

console.log(product(1,2)(1,1)(2,3))

function sevenBoom(a){
    let x = a.toString()
    return x.includes('7') ? 'Boom' : 'there is no item contain 7 within them'
}

console.log(sevenBoom([2, 55, 60, 97, 86]))

function oddishOrEvenish(a){
    let x = a.toString()
    let count = 0
    for(let i of x){
        count += +i
    } 
    return count % 2 === 0 ? "Evenish" : 'Oddish'
}

console.log(oddishOrEvenish(4433))

function getLength(a){
    let x = a.flat(10)
    return x.length
}

console.log(getLength([1, [2, [3, 4]]]))


function numInStr(a){
    let x = []
    for(let i = 0; i<a.length; i++){
        for(j=0; j<a[i].length; j++){
            if(a[i][j]>='0' && a[i][j]<='9'){
                x.push(a[i])
                break
            }
        }
    }
    return x
}

console.log(numInStr(["1a", "a", "2b", "b"]))


function getTotalPrice(a){
    let x = a.reduce((a,b) => a.price +b.price)
    return x
}

console.log(getTotalPrice([
    { product: "Chocolate", quantity: 1, price: 0.10 },
    { product: "Lollipop", quantity: 1, price: 0.20 }
]))

function lonelyInteger(arr) {
    let y = 0
    for (let i = 0; i < arr.length; i++) {
        if (arr.includes(-arr[i])) {
           continue
        } else {
            y = arr[i]
        }
    }
    return y
 }

console.log(lonelyInteger([1, -1, 2, -2, 3]))


function trace(a){
    let count = []
    for(i in a){
        for(j = 0; j<=i.length+1; j++ ){
            if(a[0][0] === a[i][j]){
                count.push(a[i][j])
            }
            if(a[1][1] === a[i][j]){
                count.push(a[i][j])
            }
            if(a[2][2] === a[i][j]){
                count.push(a[i][j])
            }
        }
    }
    return count.reduce((a,b) => a+b)
}

console.log(trace([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))

function reverseArr(a){
    let x = a.toString()
    let newArray = []
    for(let i in x){
        newArray.push(+x[i])
    }
    return newArray.reverse()
}

console.log(reverseArr(1485979))


function numArgs(...arg){
    return arg.length
}

console.log(numArgs({}))


function reverseWords(a){
    let x = a.split(' ')
    return x.reverse().toString()
}

console.log(reverseWords('the sky is blue'))


function isAutomorphic(a){
    let x = Math.pow(a,2).toString()
    let y = a.toString()
    return x[x.length - 1] === y[y.length - 1]  
}

console.log(isAutomorphic(8))

function dashed(a){
    let vowels = ['a', 'e', 'i' , 'o', 'y']
    let newArray = []
    let x = [...a]
    for(let i in x){
        if(vowels.includes(x[i])){
            newArray.push('-' + x[i] + '-')
        }else{
            newArray.push(x[i])
        }
    }
    return newArray.join('')
}


console.log(dashed('Carpe Diem'))

function solve(a){
    let x = a.split(' ')
    let y = x.map(item => +item).filter(item => item = item)
    return y.sort((a,b)=> a-b).reverse().reduce((a,b)=> a-b)
}

console.log(solve('x + 55 = 60'))

function formatMath(a){
    let x = a.split(' ')
    let y = x.map(item => parseInt(item))
        .filter(item => item == item)
    return y.reduce((a,b) => a+b)
}
console.log(formatMath("3 + 14"))

