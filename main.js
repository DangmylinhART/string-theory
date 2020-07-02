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

//////////************** *//////////////////////////////////////////////TEACHER FIX
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


//////////////////////////////////////////////////////////////////////////////DONE
const repeatIt = function (str, num){
  return str.repeat(num)
} 
console.log(repeatIt('ahehe',3))


//////////******************** *//////////////////////////////////////////////DONE
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

// ///teacher fixed ////////////////////////////////////////////////////TEACHER FIX
const truncate2 = function(str){
if ( typeof str !== "string"){
  return ;
}
if ( str.length < 18){
  return str;
}
let result = '';
  for ( i = 0; i < 15; i++){
  result = result + str[i]
} return result + '...'
}
console.log(truncate2('this is a long long long '))



// //************************* *//////////////////////////////////////////////TEACHER FIX
const ciEmailify = function (str){
let email = ''
for ( i = 0 ; i < str.length ; i++ ){
  if ( str[i] === ' '){
    email = email + '.'
  } else {
    email = email + str[i].toLowerCase()
  }

  ////or
  //email = email + (str[i] === ' ' ? '.' : str[i].toLowerCase())
} 
return email + "@codeimmersives.com"
}

console.log(ciEmailify('linh dang'))


// Linh method doesn't work 
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


// ///////////////************ *///////////////////////////////////////DONE
const reverse = function(str){
  return str.split('').reverse().join('')
}
console.log(reverse('linh'))



/////////******************** *///////////////////////////////////////////DONE
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

// //////////////////************** */////////////////////////////////////////DONE
const numberedChars = function (str){
  let result = '';
  for ( i = 0 ; i < str.length ; i++){
    result = result + "(" + (i+1) + ")" + str[i] 
  } return result
}
console.log(numberedChars('hello'))



// ////////////////***************** *//////////////////////////////////////////DONE
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



// ///////////////////////********** */ Linh done ////////////////////////////////////DONE
const titleCase = function (str){
  let array = str.toLowerCase().split(' ')
  for ( let  i = 0 ; i  < array.length ; i ++) {
  // console.log(array[i][0].toUpperCase())
    array[i] = array[i][0].toUpperCase() + array[i].slice(1)
  }
  return array.join(' ')
}
console.log(titleCase('return of the king'))

// //////////////////////////// teacher fix ////////////////////////////////////////TEACHER FIX
const titleCase2 = function (str){
  let title = ''
  for ( i = 0; i < str.length ; i ++){
    const character = str[i].toLowerCase()
    const prev = str[i -1]
    const last = str[str.length-1]
    if ( i === 0|| prev === ' '){
      title = title + character.toUpperCase()
    } else{ 
      title = title + character;
    }
  }
  return title
}
console.log(titleCase2('return of the king'))

// // ///////////////******************** */ Linh Done //////////////////DONE
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

// /////////////////Teacher fix ////////////////////////////////////////TEACHER FIX
const camelCase1 = function (str){
  let result = ''
  for (let i = 0 ; i < str.length ; i++){
    const char = str[i].toLowerCase()
    const prev = str[i-1]
    if  ( char  !== ' ' && prev === ' '){
        result = result + char.toUpperCase(0);
      } else {
        result = result + char;
      }
    } 
    return result 
  }

  console.log(camelCase1('well yeah of course'))



////////////teacher fix LOOPS-in-LOOPS  //////////////////////////////////////TEACHER FIX
const crazyCase2ReturnOfCrazyCase = function (str){
  let crazyCase = ''
  let letterIndex = 0;
  for ( let i = 0 ; i < str.length ; i++){
      if ( str[i] !== ' '){
      if ( letterIndex % 2 === 0){
      crazyCase = crazyCase + str[i].toLowerCase() 
  } else {  
      crazyCase = crazyCase + str[i].toUpperCase() 
  } 
      letterIndex ++ 
  } else {
      crazyCase = crazyCase + ' ';   
  }  
  }
  return crazyCase 
  }
  
  const test = crazyCase2ReturnOfCrazyCase('Dang My')
  console.log(test)


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
// [master a8e95f8]  not done the last one
//  1 file changed, 171 insertions(+), 1 deletion(-)
