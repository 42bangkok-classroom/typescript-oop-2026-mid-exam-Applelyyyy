export function getUniqueNumbers(arr1: number[], arr2: number[]):number[] {
  const mix = arr1.concat(arr2)
  const result:number[] = mix.filter((item,i,ar,) => ar.indexOf(item) !== i)
  if(!result){
    return []
  }
  return result
}



console.log(getUniqueNumbers([1, 2, 3, 4], [3, 4, 5, 6]))