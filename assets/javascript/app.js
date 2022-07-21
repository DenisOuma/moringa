var userObj = [
	{
		userName: "duncan.langat@student.moringaschool.com",
		passWord: "1234",
	},

	{
		userName: "queenslay.naila@student.moringaschool.com",
		passWord: "1234",
	},
	{
		userName: "daisy.odongo@student.moringaschool.com",
		passWord: "1234",
	},
	{
		userName: "denis.ouma@student.moringaschool.com",
		passWord: "1234",
	},
];

// function loadHomePage(e) {
// 	var userName = document.getElementById("userName").value;
// 	var passWord = document.getElementById("passWord").value;
//     console.log(userName)

// 	for (var i = 0; i < userObj.length; i++) {
// 		if (userName === userObj[i].userName && passWord === userObj[i].passWord) {
// 			window.open("../pages/alumni.html", "_self");
// 		}
// 	}
// }
document.getElementById("form").addEventListener("submit", function (e) {
	e.preventDefault();
	var userName = document.getElementById("userName").value;
	var passWord = document.getElementById("passWord").value;
	for (var i = 0; i < userObj.length; i++) {
		if (userName === userObj[i].userName && passWord === userObj[i].passWord) {
			window.open("alumni.html", "_self");
		}
	}
	console.log("submited");
});
