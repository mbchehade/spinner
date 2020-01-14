process.stdout.write('hello from spinner1.js... \rheyyy\n');
let arr = ["|", "/", "-", "\\", "|", "/", "-", "|"];
let counter = 100;
for(let char of arr){
  counter += 200;
  setTimeout(() => {
  process.stdout.write("\r")
  process.stdout.write(char);
  process.stdout.write("\t");
}, counter);
};
setTimeout (()=>{
  process.stdout.write("\r\n")
});

