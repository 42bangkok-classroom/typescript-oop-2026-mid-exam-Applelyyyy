// Write your code below


const n =Number(process.argv[2]);
if (!isNaN(n) && n > 0 && n !== undefined) {
  let line = '';
    for (let i = 1; i <= n; i++) {
        for (let s = 1; s <= n - i; s++) { 
          line += ' '; 
        }
        for (let j = i; j > 0; j--) {
          line += j;
        }
        line += "\n"
      }
      console.log(line);
}


