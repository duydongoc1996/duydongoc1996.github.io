// init express server
const express = require("express");
const app = express();
const port = 3000;
const VI = require("./langs/vi.json");
const EN = require("./langs/en.json");

// serve static files
app.use(express.static("public"));

// set view engine
app.set("view engine", "ejs");

app.set("views", "./views");

// middlewares
app.use(langMiddleware);

// routes
app.get("/", (req, res) => {
  res.render("pages/index", injectData(req, res));
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

////////////////////////////////////////////////

function langMiddleware(req, res, next) {
  const lang = req.query.lang;
  if (lang === "en") {
    res.locals.lang = "en";
  } else {
    res.locals.lang = "vn";
  }
  next();
}

function loadLanguage(lang) {
  if (lang === "en") {
    return EN;
  } else {
    return VI;
  }
}

function injectData(req, res) {
  return {
    lang: loadLanguage(res.locals.lang),
    req: {
      query: req.query,
      params: req.params,
    },
  };
}
