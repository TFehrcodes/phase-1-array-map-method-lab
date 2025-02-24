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

const titleCased = () => {
  const titleCasing = tutorials.map(sentence => {
    const words = sentence.split(' ')
    const upperCased = words.map(word => word.charAt0().toUpperCase() + word.substring(1))
     const joinedSent = upperCased.join(' ')
     return joinedSent
  })
  return titleCasing
}

titleCased()