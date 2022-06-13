const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


const titleCased = ()=>{
  return tutorials.map((sentensiNzima) => {
    let sentensiGawanya = sentensiNzima.split(" ")
    let sentensiGawanyaCased = sentensiGawanya.map(
      (sentensiGawanya) => sentensiGawanya.charAt(0).toUpperCase() + sentensiGawanya.slice(1))
      const yote = sentensiGawanyaCased.join(' ')
      return yote
    
  })
}
console.log(titleCased())