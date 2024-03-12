const form = document.getElementById("registerForm");

form.addEventListener("submit", function (event) {
	event.preventDefault();

	data = {
		name: document.getElementById("name").value,
		email: document.getElementById("email").value,
		password: document.getElementById("password").value,
	};

	fetch("/auth/signup", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(data),
	})
		.then((response) => {
			if (response.status === 201) {
				return response.text();
			} else {
				throw new Error(
					"Signup failed. Please check your credentials and try again."
				);
			}
		})
		.then(() => {
			return fetch("/auth/login", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(data),
			});
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
			alert(error);
		});
});
