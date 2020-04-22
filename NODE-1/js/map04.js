let obj = {
	name: 'adley',
	age: 18,
	addr: 'Beijing'
}
let newObj = _.map(obj, (value, key) => {
	console.log(value, key);
	
	let _o = {}
	if (key == 'age' && value >= 18){
		_o.desc = '你已经是成年人了'
	}else {
		_o[key]=value;
	}
	return _o;
})
console.log(newObj) 