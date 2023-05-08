function generateKey(length, characters) {
	let result = '';
	const charactersLength = characters.length;
	for (let i = 0; i < length; i++) {
	  result += characters.charAt(Math.floor(Math.random() * charactersLength));
	}
	return result;
}
let someCharacters = 'isdvndljabcjhabcbabcl45t3';  
const key = generateKey(5, someCharacters);
console.log(`Our key is ${key}`);
document.write(`Our key is ${key}`);