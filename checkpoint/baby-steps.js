let s = 0;
for (let i = 2; i <= process.argv.length - 1; i++) {
  s = s + Number(process.argv[i]);
}
console.log(s);
// dont forget to verify by typing
// learnyounode verify baby-steps.js
