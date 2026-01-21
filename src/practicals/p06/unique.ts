export function getUniqueNumbers(arr1: number[], arr2: number[]):number[] {
  const mix = arr1.concat(arr2)
  const result:number[] = mix.filter((item,i,ar,) => ar.indexOf(item) !== i)
  return console.log(result)
}

const arr1 = [1, 2, 3, 4];
const arr2 = [3, 4, 5, 6];


getUniqueNumbers(arr1,arr2)