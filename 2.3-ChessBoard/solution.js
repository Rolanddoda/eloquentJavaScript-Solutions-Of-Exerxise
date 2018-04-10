// you can try this code,here: https://eloquentjavascript.net/code/#2.3

for (let i=0; i<8; i++) {
  	output = i % 2 === 0 ? ' ' : '#';
	for (let j=i; j<i+7; j++){
    	j % 2 === 0 ? output += '#' : output += ' ';
    }
  console.log(output);
}