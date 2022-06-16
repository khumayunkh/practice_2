console.log('hello')

let x = [1,2,3,4,5]
let sum = 0
for(let i of x){
    sum += i
}

console.log(sum)

let euro = Intl.NumberFormat('es',{style:'currency', currency:'EUR'}).format(18);
console.log(euro)

console.log('hello')

let s = new Set();
s.add(2).add(2).add(3) // 2, 3
console.log(s)

let m = new Map()
m.set('one', 2).set('two',2)
console.log(m.get('one')) // 1
console.log(m.get(2)) // undefined

let y = {name:'Humoyun', firstName: 'Hasanov'}

for(let x in y){
    console.log(x) // name, firstName
    console.log(y[x]) // Humoyun. Hasanov
}

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

function sortBylength(){
    let a = ['ss', 'f', 'fdg', 'frrrr']
    let b = a.sort((a,b) => a.length-b.length)
    return b 
}

console.log(sortBylength())

let drinks = [
    {name: 'lemonade', price: 50},
    {name: 'lime', price: 10},
    {name: 'water', price: 5}
]

function sortDrinkPrice(drinks){
    let b = drinks.sort((a,b) => a.price - b.price)
    return b
}

console.log(sortDrinkPrice(drinks))


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
    let a = [...document.querySelector(".input_first_vowel").value]
    let vowels = ['o', 'e', 'a', 'i', 'u']
    for(let i in a){
        if(vowels.includes(a[i])){
            return document.querySelector('.vowel').innerHTML = vowels[i]
        }
    }
}

document.querySelector('.btn_vowel').onclick = firstVowel

console.log(Math.pow(2,5))

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

