# 🧠 LyChem – Random Wisdom Generator

A lightweight web app that serves up a daily dose of insight: an intro line, a quote from classical philosophers, and a reflective prompt. Built with nothing more than HTML, vanilla JS, Tailwind‑style utility classes, and a simple JSON data file, LyChem keeps your morning routine meaningful without any backend or heavyweight framework.

---

## ✨ Key Features

| Feature                     | Details                                                                                                        |
| --------------------------- | -------------------------------------------------------------------------------------------------------------- |
| **One‑click inspiration**   | Press **Inspire me** to fetch a random intro, quote, and prompt.                                               |
| **Clean multi‑line output** | Uses `\n\n` to render each part on its own line in both the console *and* the on‑page card.                    |
| **Expandable content file** | All intros, quotes, and prompts live in `quotes.json`, so adding more wisdom is a one‑line edit.               |
| **Responsive UI**           | Centered flex layout with soft shadows and rounded corners powered by Tailwind utility classes.                |
| **Background artwork**      | Subtle hero illustration (`resources/lychem2.png`) scaled with `background-size: cover` for a full‑bleed feel. |

---

## 🚀 Getting Started

```bash
# 1. Clone the repo
$ git clone https://github.com/Pan7her77/project-lychem.git
$ cd project-lychem

# 2. Serve locally (recommended)
#    Using VS Code’s Live Server extension *or* Python’s http.server avoids CORS issues
$ npx serve .            # or
$ python -m http.server

# 3. Open http://localhost:5000 (or whichever port) in your browser
```

> **Heads‑up:** Fetching `quotes.json` with `fetch()` is blocked when you simply double‑click `index.html` (file:// protocol). Use any static server as shown above.

---

## 🛠️ How It Works

1. **Fetch Data** – `app.js` loads `quotes.json` with `fetch()` and parses it.

2. **Pick Random Items** – `rand(arr)` returns a random element for each category.

3. **Render** – The output `<div id="output">` gets updated:

   ```js
   output.textContent = `${intro}\n\n“${quote}”\n\n${prompt}`;
   ```

4. **Console Logging** – A single `console.log("${intro}\n${quote}\n${prompt}")` mirrors the on‑page output.

---

## 🧗 Challenges & How I Solved Them

| Challenge                            | What Happened                                                                                 | Fix                                                                                                             |
| ------------------------------------ | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------- |
| **CORS / JSON fetch**                | Loading `index.html` directly (file://) threw a CORS error when `fetch('./quotes.json')` ran. | Switched to using a simple local static server during dev (`Live Server`, `serve`, or `python -m http.server`). |
| **Background image looked “zoomed”** | The hero art was cropping awkwardly on some screens.                                          | Tuned CSS: tried `background-size: contain`, settled on `cover` + generous `padding` to keep it balanced.       |
| **Jumbled console output**           | Quote & prompt originally printed on the same line.                                           | Consolidated to one `console.log` with `\n` separators, or three logs – whichever style is cleaner.             |

---

## 🌱 Future Improvements

1. **History & Favorites**
   Store fetched quotes in `localStorage` so users can revisit past wisdom or star their favorites.
2. **Share Button**
   Add quick‑share links (Twitter/X, LinkedIn, copy‑to‑clipboard) so users can spread the daily quote.

*Bonus ideas:* dark‑mode toggle, progressive‑web‑app offline caching, animated transitions when new wisdom appears.

---

## 🤝 Contributing

Pull requests are welcome! If you spot a typo, have a quote suggestion, or want to tackle one of the improvements above, open an issue first so we can discuss.

MIT – Feel free to fork, remix, and build on LyChem.

---

> **Made with curiosity and (sadly LOTS of) caffeine by [Ayomide Olayori](https://github.com/Pan7her77)**
