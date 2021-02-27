// - создать массив с 20 числами.
// let arr = [10,454,45,35645,14,254,1564,46,77,4477,155,88,7485,75,222,457,5809,56,23,9898]
// console.log(arr)

// -- при помощи метода sort и колбека  отсортировать массив.
// arr.sort ( function (a,b) {return a - b})
// console.log(arr)


// -- при помощи метода sort и колбека отсортировать массив в ниспадающем напралении.
// arr.sort( function ( a, b){ return b - a})
// console.log(arr)

// -- при помощи filter получить числа кратные 3
// let backFilter = arr.filter( a => a % 3 === 0)
// console.log(backFilter)

// -- при помощи filter получить числа кратные 10

// let backFilter2 = arr.filter(a => a % 10 ===0)
// console.log(backFilter2)

// -- перебрать (проитерировать) массив при помощи foreach()

// arr.forEach(a => console.log(a))

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут в 3 раза больше

// let backMap = arr.map(a =>{
//     return a*3
// })
// console.log(backMap)

// - создать массив со словами на 15-20 элементов.

// let str = ['anne', 'had', 'only', 'one', 'ugly', 'dress', 'from', 'the', 'orphanage','so', 'marilla', 'made', 'her', 'three', 'new', 'dresses']
// -- отсортировать его по алфавиту в восходящем порядке.

// let backStr = str.sort()
// console.log(backStr)

// -- отсортировать его по алфавиту  в нисходящем порядке.

// let strSort = str.sort((a,b) =>{
//     if (a > b){
//         return -1
//     }
//     if ( b > a ){
//         return 1
//     }
//     else { 
//         return 0
//     }
// } 
// )
// console.log(strSort)

// -- отфильтровать слова длиной менее 4х символов

// let onlyFourLetters = str.filter( a => a.length < 5 )
// console.log(onlyFourLetters)

// -- перебрать массив при помощи map() и получить новый массив в котором все значения будут со знаком "!" в конце

// let backStringWith = str.map(a => {
//     a = a + '!'
//     return  a 
// }
// )
// console.log(backStringWith)

// Все робити через функції масивів (foreach, map ...тд)
// Дан масив :
// - відсортувати його за  віком (зростання , а потім окремо спадання)

// let users = [ 
//     {name: 'vasya', age: 31, status: false}, 
//     {name: 'petya', age: 30, status: true}, 
//     {name: 'kolya', age: 29, status: true},
//     {name: 'olya', age: 28, status: false}, 
//     {name: 'max', age: 30, status: true}, 
//     {name: 'anya', age: 31, status: false}, 
//     {name: 'oleg', age: 28, status: false}, 
//     {name: 'andrey', age: 29, status: true}, 
//     {name: 'masha', age: 30, status: true}, 
//     {name: 'olya', age: 31, status: false}, 
//     {name: 'max', age: 31, status: true}, 
// ];
// let usersSortMinMax = users.sort(function(us1,us2){ return us1.age-us2.age})
// console.log(usersSortMinMax)

// let usersSortMaxMin = users.sort(function (user1,user2) { return user2.age - user1.age})
// console.log(usersSortMaxMin)


// - відсортувати його за кількістю знаків в імені  (зростання , а потім окремо спадання)

// let usersMin = users.sort((us1,us2)=>us1.name.length - us2.name.length)
// console.log(usersMin)

// let userMax = users.sort((us1,us2)=> us2.name.length - us1.name.length)
// console.log(userMax)

// - пройтись по ньому та додати кожному юзеру поле id - яке характеризує унікальний індентифікатор 
// let newUsers = []
// let usersWithId = users.map((us1,index) =>{
//    us1.id = index
//    return us1
// }
// )
// newUsers.push (usersWithId)
// console.log(newUsers)

// (По якому принципу його створювати - ваше рішення), та зберегти це в новий масив (первинний масив залишиться без змін)
// // - відсортувати його за індентифікатором

// let newUsers = []
// let usersWithId = users.map((us1,) =>{
//    us1.id = Math.floor(Math.random()*20)
//    return us1
//    }
// )
// newUsers.push (usersWithId)
// console.log(newUsers)

// let newUsersSortById = newUsers.sort((user1,user2)=>user1.id - user2.id)
// console.log(newUsersSortById)

// -- наисать функцию калькулятора с 2мя числами и колбеком

// function calc(number1,number2,callback){
//     callback(number1,number2)
// }

// calc(20,10,function(number1,number2){
//     let find = number1 - number2
//     console.log(find)
//     }
// )

   

// -- наисать функцию калькулятора с 3мя числами и колбеком

// function calc([n1,n2,n3],callback){
//     callback([n1,n2,n3])
// }

// calc([10,20,30], function (arr){
//     let result = 0
//     for (let n of arr){
//     result = n * n
//     }
//     console.log(result)
// } 
// )