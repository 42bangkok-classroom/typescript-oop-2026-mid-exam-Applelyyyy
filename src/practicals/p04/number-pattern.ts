// Write your code below


const n =Number(process.argv[2]);
if (!isNaN(n) && n > 0 && n !== undefined) {
  for (let i = 1; i <= n; i++) {
    let line = '';
    for (let s = 1; s <= n - i; s++) { 
          line += " "; 
        }
        for (let j = i; j > 0; j--) {
          line += j;
        }
        console.log(line);
      }
}


