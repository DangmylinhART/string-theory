/******************
 * YOUR CODE HERE *
 ******************/
const indexedChars = function(str){
  result = '';
  for ( let i = 0; i < str.length; i ++){
    result = result + i + str[i] 
  }
  return result;
}
console.log(indexedChars('hello'))

//////////************** */
const exclaim = function(str){
let result = '';
for (let i = 0 ; i < str.length ; i++ ){
const currentCharacter = str[i]
if (currentCharacter === '?' || currentCharacter === '.'){
result = result + '!'
}else { 
result = result + currentCharacter
}
}
return result
}
console.log(exclaim('hello. you there?'))

////////////////
const repeatIt = function (str, num){
  return str.repeat(num)
} 
console.log(repeatIt('ahehe',3))

//////////******************** */
const truncate = function(str){
  let result = '';
  for ( i = 0 ; i <= str.length ; i ++){
    if ( i <= 15){
      result = result + str[i] 
    } 
  }
  return result + '...'
}
console.log(truncate("'Well, that's just, like, your opinion man."))

//************************* */
// const ciEmailify = function (str){
//   let result = ''
//   // return str[0] + '.' + str[1] + '@codeimmersives.com'
//   for ( i = 0 ; i < str.length ; i ++){
//   if( i < str.indexOf(' ')){
//     let one = result + str[i] 
//   } if (i > str.lengthOf(' ')){
//     let two =  result + str[i]
//   }
//   } return one + '.' two + '@codeimmersives.com'
// }

// console.log(ciEmailify('linh dang'))

// let name = 'linh dang'
// console.log(name.indexOf(' '))

///////////////************ */
const reverse = function(str){
  return str.split('').reverse().join('')
}
console.log(reverse('linh'))

/////////******************** */
const onlyVowels = function(str){
let vowels = 'aeoiu';
let result = '';
  for ( i = 0 ; i < str.length ; i ++){
    if (vowels.includes(str[i].toLowerCase())){
      result = result + str[i]
    }
  }
  return result
}
console.log(onlyVowels('linh DAng'))

//////////////////************** */
const numberedChars = function (str){
  let result = '';
  for ( i = 0 ; i < str.length ; i++){
    result = result + "(" + (i+1) + ")" + str[i] 
  } return result
}
console.log(numberedChars('hello'))



////////////////***************** */
const crazyCase = function(str){
let result = '';
for ( i = 0 ; i < str.length ; i++){
  if ( i % 2 !== 0){
    result = result + str[i].toUpperCase()
  } else {
    result = result + str[i].toLowerCase()
  }
} return result
}

console.log(crazyCase('Multiple words here'))



///////////////////////********** */

const titleCase = function (str){
  let array = str.toLowerCase().split(' ')
  for ( let  i = 0 ; i  < array.length ; i ++) {
  // console.log(array[i][0].toUpperCase())
    array[i] = array[i][0].toUpperCase() + array[i].slice(1)
  }
  return array.join(' ')
}

console.log(titleCase('return of the king'))



// ///////////////******************** */
const camelCase = function(str){
let array = str.split(' ')
console.log(array)
for ( i = 0 ; i < array.length ; i ++){
  if ( i < 1 ){

  //array[i] = ith item in array  
  //array[i][0] = first letter in ith item
  //array[i].slice(1) = cut the first letter in ith item

    array[i] = array[i][0].toLowerCase() + array[i].slice(1)
  } else {
  array[i] = array[i][0].toUpperCase() + array[i].slice(1)
  console.log(array[i][0])
  console.log(array[i].slice(1))
  console.log(array[i])
  }
}
  return array.join('')
}
console.log(camelCase('well yeah of course'))




///////////////////////////*********** */NOT DONE
// const crazyCase2ReturnOfCrazyCase = function (str){
//  //console.log ( str.replace(/ /g, ''))
// let result = str.split(' ')
// console.log(result)
// for ( i = 0; i < str.length ; i++){
//    if ( i % 2 !== 0 ){
//      result = result + str[i].toUpperCase() + str[i].slice(str.indexOf(' '))
//    } else {
//      result = result + str[i]
//    }
//  }
//   return result
// }

// console.log(crazyCase2ReturnOfCrazyCase('crazy stuff'))

const crazyCase2ReturnOfCrazyCase = function (str){

let array = str.toLowerCase().split(' ')
console.log(array)
for ( i = 0; i < array.length ; i++){
   if ( i % 2 !== 0 ){
     array[i] = array[i].toUpperCase() 
     console.log(array[i].toUpperCase())
   }
  }
}
console.log(crazyCase2ReturnOfCrazyCase('crazy stuff'))



/********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/

if (typeof indexedChars === 'undefined') {
  indexedChars = undefined;
}

if (typeof exclaim === 'undefined') {
  exclaim = undefined;
}

if (typeof repeatIt === 'undefined') {
  repeatIt = undefined;
}

if (typeof truncate === 'undefined') {
  truncate = undefined;
}

if (typeof ciEmailify === 'undefined') {
  ciEmailify = undefined;
}

if (typeof reverse === 'undefined') {
  reverse = undefined;
}

if (typeof onlyVowels === 'undefined') {
  onlyVowels = undefined;
}

if (typeof numberedChars === 'undefined') {
  numberedChars = undefined;
}

if (typeof crazyCase === 'undefined') {
  crazyCase = undefined;
}

if (typeof titleCase === 'undefined') {
  titleCase = undefined;
}

if (typeof camelCase === 'undefined') {
  camelCase = undefined;
}

if (typeof crazyCase2ReturnOfCrazyCase === 'undefined') {
  crazyCase2ReturnOfCrazyCase = undefined;
}


module.exports = {
  indexedChars,
  exclaim,
  repeatIt,
  truncate,
  ciEmailify,
  reverse,
  onlyVowels,
  numberedChars,
  crazyCase,
  titleCase,
  camelCase,
  crazyCase2ReturnOfCrazyCase,
}
