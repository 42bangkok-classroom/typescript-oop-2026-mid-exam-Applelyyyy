const comment = "TypeScript is a strongly typed programming language"

function shortenComment(comment: string) {
  let result = ""
  const split = comment.split(" ")
  const comment_max:number = Number(split.length)
  for( let i = 0; i < comment_max; i++){
    if( split[i].length <= 10 && split[i].length >= 5){
      if(comment_max-1 <= i){
        result += split[i]
      }
      else if (!(comment_max-1 === i)){        
        result += split[i]
        result += " "
      }
    } 
    else{
      result += ""
    }
  }
  return result
}



console.log(shortenComment(comment))