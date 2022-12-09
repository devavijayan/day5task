const a = (words) => words.filter((word)=>word.split("").reverse().join("")===word);
console.log(a(["hello", "noon"]))