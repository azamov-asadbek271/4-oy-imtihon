// Funksiyaga berilgan son tub bo’lsa true, aks holda false qaytarsin:
// Example
/*   
*   4 => false
*   5 => true
*   6 => false
*   7 => true
*   11 => true
*   12 => false
*   16 => false
*   17 => true
*/

// function isPrime(n) {
//     if(n % 2 !== 0) {
//        return true
//     }
//     else {
//          return  false
//     }
//     return 
// }
// let resualt = isPrime(5)
// console.log(resualt)



// ***************            2-mashq         *****************************-->
// n1 va n2 orasidagi butun sonlar yig‘indisini qaytaring.
// Example
/*
  1,2   =>  3  ( = 1+2 )
  5,10  =>  45 ( = 5+6+7+8+9+10 )
  -1,1  =>  0  ( = -1 + 0 + 1 )
*/

// function getSumBetweenNumbers(a,b) {
// 	let number = 0
//      for ( let i = a; i <= b; i++) {
// 		number += i
// 	 }
// 	 return number
// }

// let resualt = getSumBetweenNumbers(5, 10);
// console.log(resualt)



// ***************            3-mashq         *****************************-->

// n ta elementdan tashkil topgan arr nomli massiv berilgan. Massiv elementlari orasidan faqat 1 marta ishtirok etganlaridan iborat yangi massiv qaytaruvchi getElementsOneTime(arr) nomli funksiya tuzing.
// Input: [1, 5, 6, 1, 5, 7, 2]
// Output: [6, 7, 2]

// let number = [1, 5, 6, 1, 5, 7, 2];


// let newnumber = (arr) =>  {
//    let resualt = []
//    let onenumber = []
//    let twonumber = []
//    for (let i = 0; i < arr.length;i++) {

// 	if(!resualt.includes(arr[i])) {
// 		resualt.push(arr[i])
// 	}
// 	else{
// 		onenumber.push
// 	}
	
//    }
//    return resualt
// }
// let jami = newnumber(number)
// console.log(jami)



// ***************            4-mashq         *****************************-->

// Quyidagi ko'rinishda objectlarlardan tuzilgan massiv beriladi. Agar alreadyRead propertysi true bo'lsa o'sha kitob o'qigan deb chiqarilsin, aks holda o'qilmagan.
// Input: 
// const books = [
//   {
//     title: "Halqa",
//     author: "Akrom Malik",
//     alreadyRead: false,
//   },
//   {
//     title: "Dunyo ishlari",
//     author: "O'tkir Hoshimov",
//     alreadyRead: true,
//   },
//   {
//     title: "Vaqtning qadri",
//     author: "Abdulfattoh Abu G'udda",
//     alreadyRead: false,
//   },
// ]

// let resualt = books.forEach((num) => {
// 	let truety = []
// 	let falsey = []
// 	if(num.alreadyRead) {
// 		truety.push(num.author + " oqilgan" )
// 	} 
// 	else {
// 	  falsey.push(num.author + " oqilmagan")
	  

// 	}
	
	
	
// })
// console.log(resualt)