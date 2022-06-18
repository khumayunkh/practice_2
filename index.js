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
    return document.querySelector('.equel').innerHTML = count
}

document.querySelector('.btn_equel').onclick = equel
