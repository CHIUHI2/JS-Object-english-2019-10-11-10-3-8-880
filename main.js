// Q1
var user = Object.create(null);
user.name = 'John';
user.surname = 'Mike';
user.name = 'Peter';
delete user.name;

// Q2
var fruit = {
	apple: 20,
	pear: 20,
	peach: 10
};

var totalNum = 0;
for(var key in fruit) {
	totalNum += fruit[key];
}

console.log(totalNum);
