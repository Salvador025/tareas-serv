const router = require("express").Router();
const authRoutes = require("./auth.routes");
const newsRoutes = require("./news.routes");
const path = require("path");

router.get("/", (req, res) => {
	const mainHtmlPath = path.join(
		__dirname,
		"../../public",
		"pages",
		"main.html"
	);
	res.sendFile(mainHtmlPath);
});

router.use("/auth", authRoutes);
router.use("/news", newsRoutes);

module.exports = router;
