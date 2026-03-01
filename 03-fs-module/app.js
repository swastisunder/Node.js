const fs = require("fs");

fs.writeFileSync("./test.txt", "Hello man");

fs.writeFile("./test2.txt", "Hello man", (err) => {
  if (err) throw err;
});

const contact = fs.readFileSync("./contact.txt", "utf-8");
console.log(contact);

fs.readFile("./contact.txt", "utf-8", (err, data) => {
  if (err) throw err;
  console.log(data);
});

fs.appendFileSync("./test3.txt", "Hello\n", "utf-8");

fs.cpSync("./test3.txt", "./copy.txt");

fs.unlinkSync("copy.txt");

console.log(fs.statSync("./test3.txt"));

fs.mkdirSync("test");
fs.mkdirSync("test2/a", { recursive: true });
