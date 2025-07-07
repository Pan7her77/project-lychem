async function loadData() {
    const res = await fetch('./quotes.json');
    return res.json();
  }
  function rand(arr) { return arr[Math.floor(Math.random()*arr.length)]; }
  async function show() {
    const data = await loadData();
    const intro = rand(data.intros);
    const quote = rand(data.quotes);
    const prompt = rand(data.prompts);
    document.getElementById('output').textContent =
      `${intro}\n\n“${quote}”\n\n${prompt}`;
  }
  document.getElementById('btn').onclick = show;
  window.onload = show;
console.log("\nQuotes:");
  