document.addEventListener("DOMContentLoaded", function () {
	if (!localStorage.getItem("token"))
		window.location.href = "assets/pages/login.html";
	else if (!sessionStorage.getItem("newsData")) {
		window.location.href = "/";
	} else {
		const newsData = JSON.parse(sessionStorage.getItem("newsData"));
		const newsContainer = document.getElementById("news-container");

		newsData.forEach((newsItem) => {
			const card = document.createElement("div");
			card.className = "card";

			const container = document.createElement("div");
			container.className = "container";

			const title = document.createElement("h4");
			title.innerText = newsItem.title || "No title";

			const description = document.createElement("p");
			description.innerText =
				newsItem.description || "No description available.";

			const url = document.createElement("a");
			url.href = newsItem.url;
			url.innerText = "Read more";
			url.target = "_blank";

			container.appendChild(title);
			container.appendChild(description);
			description.appendChild(url);

			if (newsItem.urlToImage) {
				const image = document.createElement("img");
				image.src = newsItem.urlToImage;
				image.alt = "News Image";
				image.style.width = "100%";
				card.appendChild(image);
			}

			card.appendChild(container);
			newsContainer.appendChild(card);
		});
	}
});

const logOut = document.getElementById("logOut");

logOut.addEventListener("click", function () {
	localStorage.removeItem("token");
	window.location.href = "assets/pages/login.html";
});

const search = document.getElementById("search");

search.addEventListener("click", function () {
	const filter = document.getElementById("filter").value;
	fetch(`/news?filter=${filter}&token=${localStorage.getItem("token")}`)
		.then((response) => response.json())
		.then((data) => {
			sessionStorage.setItem("newsData", JSON.stringify(data.articles));

			window.location.href = "search.html";
		});
});
