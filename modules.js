module.exports.getDate = function (){
	var date = new Date();
	var options = {
		weekday: "long",
        year: "numeric",
        month: "2-digit",
        day: "numeric"
	}
	return date.toLocaleDateString("en", options)
}
/*to create one more module
this way functions are shared accross dir and files
module.exports.getLocation = function () { 
}
*/