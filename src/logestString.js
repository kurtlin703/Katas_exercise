function findLongestWord(str){
	let words = str.split(" ")
	let longest =" "
	for (let word of words){
		if (word.length > longest.length)
			longest = word 
		
	}
return longest;
}
console.log(findLongestWord("the quick brown fox ate the chicken chickene ") + " is the longest word in the sentence")