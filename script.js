function mincost(arr)
{ 
	let c=0;
	arr.sort((a,b)=>a-b);
	while(arr.length>1){
		let f=arr.shift();
		let s=arr.shift();
		c+=f+s;
		arr.push(f+s);
		arr.sort((a,b)=>a-b);
	}
//write your code here
	return c;
// return the min cost
  
}

module.exports=mincost;
