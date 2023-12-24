const score = {
  //floor
  floor: {
    three: 1000,
    four: 10000,
    five: 100000,
    six: 1000000,
    seven: 10000000,
    eight: 100000000
  },
  //singles 
  palindrome: {
    general: 22200,
    three: 100,
    four: 100,
    five: 1000,
    six: 1000,
    seven: 10000,
    eight: 10000
  },
  ambigram: {
    general: 488250,
    three: 125,
    four: 625,
    five: 3125,
    six: 15625,
    seven: 78125,
    eight: 390625
  },
  ambigramstrobogrammatic: {
    general: 1550,
    three: 25,
    four: 25,
    five: 125,
    six: 125,
    seven: 625,
    eight: 625
  },
  ambigramstrobogrammaticperfectprint: {
    general: 504,
    three: 8,
    four: 16,
    five: 32,
    six: 64,
    seven: 128,
    eight: 256
  },
  prime: {
    general: 6517454,
    three: 168,
    four: 1229,
    five: 9592,
    six: 78498,
    seven: 664579,
    eight: 5762683
  },
  fourtwenty: {
    general: 653690,
    three: 1,
    four: 20,
    five: 300,
    six: 3999,
    seven: 49970,
    eight: 599400
  },
  sixtynine: {
    general: 7494729,
    three: 20,
    four: 299,
    five: 3970,
    six: 49401,
    seven: 590040,
    eight: 6850999
  },
  leadingzeros: {
    general: 11111100,
    three: 100,
    four: 1000,
    five: 10000,
    six: 100000,
    seven: 1000000,
    eight: 10000000
  },
  trailingzeros: {
    general: 11111100,
    three: 100,
    four: 1000,
    five: 10000,
    six: 100000,
    seven: 1000000,
    eight: 10000000
  },
  sequentialAsc: {
    general: 33,
    three: 8,
    four: 7,
    five: 6,
    six: 5,
    seven: 4,
    eight: 3
  },
  sequentialDsc: {
    general: 33,
    three: 8,
    four: 7,
    five: 6,
    six: 5,
    seven: 4,
    eight: 3
  },
//doubles 
  palindromeambigram: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  palindromeambigramstrobogrammatic: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  palindromeambigramstrobogrammaticperfectprint: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  palindromeprime: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  palindromefourtwenty: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  palindromesixtynine: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  palindromeleadingzerostrailingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  ambigramprime: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  ambigramsixtynine: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  ambigramleadingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  ambigramtrailingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  ambigramstrobogrammaticprime: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  ambigramstrobogrammaticsixtynine: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  ambigramstrobogrammaticleadingzerostrailingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  ambigramstrobogrammaticperfectprintprime: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  ambigramstrobogrammaticperfectprintsixtynine: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  ambigramstrobogrammaticperfectprintleadingzerostrailingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  primefourtwenty: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  primesixtynine: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  primeleadingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  fourtwentysixtynine: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  fourtwentyleadingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  fourtwentytrailingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  sixtynineleadingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  sixtyninetrailingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  leadingzerossequentialAsc: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  trailingzerossequentialDsc: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  //triples
  palindromeambigramprime: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  palindromeambigramsixtynine: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  palindromeambigramleadingzerostrailingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  palindromeambigramstrobogrammaticprime: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  palindromeambigramstrobogrammaticsixtynine: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  palindromeambigramstrobogrammaticleadingzerostrailingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  palindromeambigramstrobogrammaticperfectprintprime: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  palindromeambigramstrobogrammaticperfectprintsixtynine: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  palindromeambigramstrobogrammaticperfectprintleadingzerostrailingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  palindromeprimefourtwenty: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  palindromeprimesixtynine: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  palindromefourtwentysixtynine: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  palindromefourtwentyleadingzerostrailingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
palindromesixtynineleadingzerostrailingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  ambigramprimesixtynine: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  ambigramprimeleadingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  ambigramsixtynineleadingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  ambigramsixtyninetrailingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  ambigramleadingzerostrailingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  ambigramstrobogrammaticprimesixtynine: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  ambigramstrobogrammaticsixtynineleadingzerostrailingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  ambigramstrobogrammaticperfectprintprimesixtynine: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  ambigramstrobogrammaticperfectprintsixtynineleadingzerostrailingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  primefourtwentysixtynine: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  primefourtwentyleadingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  primesixtynineleadingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  fourtwentysixtynineleadingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  fourtwentysixtyninetrailingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  fourtwentyleadingzerostrailingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  sixtynineleadingzerostrailingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  //quads
  palindromeambigramprimesixtynine: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  palindromeambigramstrobogrammaticprimesixtynine: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  palindromeambigramstrobogrammaticperfectprintprimesixtynine: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  palindromeambigramsixtynineleadingzerotrailingzero: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  palindromeambigramstrobogrammaticsixtynineleadingzerotrailingzero: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  palindromeambigramstrobogrammaticperfectprintsixtynineleadingzerotrailingzero: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  palindromeprimefourtwentysixtynine: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  palindromefourtwentysixtynineleadingzerostrailingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  ambigramprimesixtynineleadingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  ambigramsixtynineleadingzerostrailingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  },
  primefourtwentysixtynineleadingzeros: {
    general: 0,
    three: 0,
    four: 0,
    five: 0,
    six: 0,
    seven: 0,
    eight: 0
  }
}

export default score;





