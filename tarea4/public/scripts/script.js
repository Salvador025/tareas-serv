document.addEventListener("DOMContentLoaded", function () {
	if (!localStorage.getItem("token"))
		window.location.href = "assets/pages/login.html";
});

const logOut = document.getElementById("logOut");

logOut.addEventListener("click", function () {
	localStorage.removeItem("token");
	window.location.href = "assets/pages/login.html";
});

const search = document.getElementById("search");

search.addEventListener("click", function () {
	const filter = document.getElementById("filter").value;
	fetch(`news?filter=${filter}&token=${localStorage.getItem("token")}`)
		.then((response) => response.json())
		.then((data) => {
			sessionStorage.setItem("newsData", JSON.stringify(data.articles));

			window.location.href = "assets/pages/search.html";
		});
});
