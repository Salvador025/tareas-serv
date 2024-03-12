const form = document.getElementById("loginForm");

form.addEventListener("submit", function (event) {
	event.preventDefault();

	data = {
		email: document.getElementById("email").value,
		password: document.getElementById("password").value,
	};

	fetch("/auth/login", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	})
		.then((response) => {
			if (response.status === 200) {
				return response.text();
			} else {
				throw new Error(
					"Login failed. Please check your credentials and try again."
				);
			}
		})
		.then((data) => {
			localStorage.setItem("token", data);
			window.location.href = "/";
		})
		.catch((error) => {
			console.error("Error:", error);
			alert(
				"An error occurred while logging in. Please try again later."
			);
		});
});
