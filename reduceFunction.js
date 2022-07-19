/*
Signature of reduce function:- 
    const result = arr.reduce(reducerFuctionThatWeHaveToPass, initialValue)

    reducerFuctionThatWeHaveToPass Signature:- 

        reducerFuctionThatWeHaveToPass(Accumulator, CurrentValue, CurrentIndex, SourceArray)
*/

//use-case #1 - For totaling

let marks = [1, 4, 2, 3, 6, 7]
let graceMarksGivenToAll = 15

const totalMarks = marks.reduce((Accumulator, CurrentValue) => {
  Accumulator += CurrentValue
  return Accumulator
}, graceMarksGivenToAll)

console.log(totalMarks)

//use-case #2 - Magically flattens 2D/3D arrays into 1D arrays

const twoDArray = [
  [1, 2],
  [3, 4],
  [5, 6],
]
const flattenedArray = twoDArray.reduce((Accumulator, CurrentValue) => {
  return Accumulator.concat(CurrentValue)
})

console.log(flattenedArray)
