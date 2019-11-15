function findLongestWord(str){
	var words = str.split(" ")
	var longest =" "
	for (var word of words){
		if (word.length > longest.length)
			longest = word 
		
	}
return longest;
}
console.log(findLongestWord("the quick brown fox ate the chicken chicken "))