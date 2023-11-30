const population = {
  Length: {
    label: "Length",
    description: "Digit Rarity analyzes numbers and provides population data for each type. Population displays count for current character length first and the total count for all lengths 3 - 8 characters after.",
    total: '111,111,000',
    three: '1,000 / 111,111,000',
    four: '10,000 / 111,111,000',
    five: '100,000 / 111,111,000',
    six: '1,000,000 / 111,111,000',
    seven: '10,000,000 / 111,111,000',
    eight: '100,000,000 / 111,111,000'
  },
  palindrome: {
    label: "Palindrome",
    description: "Reads the same forwards and backwards.",
    general: '22,200',
    three: '100 / 22,200',
    four: '100 / 22,200',
    five: '1,000 / 22,200',
    six: '1,000 / 22,200',
    seven: '10,000 / 22,200',
    eight: '10,000 / 22,200'
  },
  ambigram: {
    label: "Ambigram",
    description: "Can be rotated 180 degrees and remain readable, often resulting in a new number.",
    general: '488,250',
    three: '125 / 488,250',
    four: '625 / 488,250',
    five: '3,125 / 488,250',
    six: '15,625 / 488,250',
    seven: '78,125 / 488,250',
    eight: '390,625 / 488,250'
  },
  strobogrammatic: {
    label: "Strobogrammatic",
    description: "A subset of Ambigram. Can be rotated 180 degrees and remain the same number (sans-serif.)",
    general: '1,240',
    three: '15 / 1,240',
    four: '25 / 1,240',
    five: '75 / 1,240',
    six: '125 / 1,240',
    seven: '375 / 1,240',
    eight: '625 / 1,240'
  },
  perfectprint: {
    label: "Perfect Print",
    description: "A further refinement of Strobogrammatic. Can be rotated 180 degrees and remains perfectly the same regardless of serif.",
    general: '504',
    three: '8 / 504',
    four: '16 / 504',
    five: '32 / 504',
    six: '64 / 504',
    seven: '128 / 504',
    eight: '256 / 504'
  },
  fourtwenty: {
    label: "Four Twenty",
    description: "Contains the meme digits 420",
    general: '654,321',
    three: '1 / 654,321',
    four: '20 / 654,321',
    five: '300 / 654,321',
    six: '4,000 / 654,321',
    seven: '50,000 / 654,321',
    eight: '600,000 / 654,321'
  },
  sixtynine: {
    label: "Sixty Nine",
    description: "Contains the meme digits 69",
    general: '7,654,320',
    three: '20 / 7,654,320',
    four: '300 / 7,654,320',
    five: '4,000 / 7,654,320',
    six: '50,000 / 7,654,320',
    seven: '600,000 / 7,654,320',
    eight: '7,000,000 / 7,654,320'
  },
  prime: {
    label: "Prime",
    description: "A Prime number. Divisible by only 1 and itself.",
    general: '6,515,513',
    three: '168 / 6,515,513',
    four: '1,229 / 6,515,513',
    five: '9,592 / 6,515,513',
    six: '78,498 / 6,515,513',
    seven: '664,571 / 6,515,513',
    eight: '5,761,455 / 6,515,513'
  },
  sequentialAsc: {
    label: "Sequential Ascending", 
    description: "An ascending sequential order.",
    general: '',
    three: '',
    four: '',
    five: '',
    six: '',
    seven: '',
    eight: ''
  },
  sequentialDsc: {
    label: "Sequential Descending",
    description: "A descending sequential order.",
    general: '',
    three: '',
    four: '',
    five: '',
    six: '',
    seven: '',
    eight: ''
  }
}

export default population 