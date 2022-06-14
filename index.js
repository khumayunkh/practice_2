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
    count -= 1;
    document.querySelector('.counter').innerHTML = 'Click ' + count
}


function filterArray(a){
    let b = a.filter(item => typeof item === 'number')
    return b
}

let a = [2,1,2,3, 'humayun', ' hello']
console.log(filterArray(a))

function doubleChar(){
    let a = [...'Hello']
    let b = a.map(item => item.repeat(2)).toString()
    return b
}

console.log(doubleChar())