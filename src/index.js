module.exports = function reverse (n) {
	if (n<0) {
		n=0-n;
	}
   var str = "";
  var arr = n.toString().split('');
  for (let i = arr.length-1; i>=0; i--) {
    
     str+=arr[i];
  }
  return Number(str);
}
