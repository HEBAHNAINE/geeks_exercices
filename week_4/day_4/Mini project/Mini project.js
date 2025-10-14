const quotes = [
    { id: 0, author: "Albert Einstein", quote: "Life is like riding a bicycle. To keep your balance, you must keep moving.", likes: 0 },
    { id: 1, author: "Confucius", quote: "It does not matter how slowly you go as long as you do not stop.", likes: 0 },
    { id: 2, author: "Oscar Wilde", quote: "Be yourself; everyone else is already taken.", likes: 0 },
    { id: 3, author: "Yoda", quote: "Do or do not. There is no try.", likes: 0 },
  ];
  
  let lastIndex = -1;
  let currentQuote = null;
  let filteredQuotes = [];
  let currentFilterIndex = 0;

  const quoteText = document.getElementById("quoteText");
  const quoteAuthor = document.getElementById("quoteAuthor");
  const generateBtn = document.getElementById("generateBtn");
 
  generateBtn.addEventListener("click", () => {
    let index;
    do {
      index = Math.floor(Math.random() * quotes.length);
    } while (index === lastIndex);
  
    lastIndex = index;
    currentQuote = quotes[index];
    displayQuote(currentQuote);
  });
  
  function displayQuote(q) {
    quoteText.textContent = `"${q.quote}"`;
    quoteAuthor.textContent = `— ${q.author} ❤️ ${q.likes}`;
  }
  
  document.getElementById("charWithSpaces").addEventListener("click", () => {
    if (!currentQuote) return alert("Generate a quote first!");
    alert(`Characters (with spaces): ${currentQuote.quote.length}`);
  });
  
  document.getElementById("charWithoutSpaces").addEventListener("click", () => {
    if (!currentQuote) return alert("Generate a quote first!");
    const noSpaces = currentQuote.quote.replace(/\s+/g, '');
    alert(`Characters (without spaces): ${noSpaces.length}`);
  });
  
  document.getElementById("wordCount").addEventListener("click", () => {
    if (!currentQuote) return alert("Generate a quote first!");
    const words = currentQuote.quote.trim().split(/\s+/);
    alert(`Word count: ${words.length}`);
  });
  
  document.getElementById("likeBtn").addEventListener("click", () => {
    if (!currentQuote) return alert("Generate a quote first!");
    currentQuote.likes++;
    displayQuote(currentQuote);
  });
 
  document.getElementById("addQuoteForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const newAuthor = document.getElementById("newAuthor").value.trim();
    const newQuote = document.getElementById("newQuote").value.trim();
    if (!newAuthor || !newQuote) return;
  
    const newId = quotes.length;
    quotes.push({ id: newId, author: newAuthor, quote: newQuote, likes: 0 });
    alert("Quote added!");
    e.target.reset();
  });

  document.getElementById("filterForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const author = document.getElementById("filterAuthor").value.trim();
    filteredQuotes = quotes.filter(q => q.author.toLowerCase() === author.toLowerCase());
  
    if (filteredQuotes.length === 0) {
      alert("No quotes found for this author!");
      document.getElementById("navigationBtns").style.display = "none";
      return;
    }
  
    currentFilterIndex = 0;
    displayQuote(filteredQuotes[currentFilterIndex]);
    document.getElementById("navigationBtns").style.display = "block";
  });
  
  document.getElementById("prevBtn").addEventListener("click", () => {
    if (filteredQuotes.length === 0) return;
    currentFilterIndex = (currentFilterIndex - 1 + filteredQuotes.length) % filteredQuotes.length;
    displayQuote(filteredQuotes[currentFilterIndex]);
  });
  
  document.getElementById("nextBtn").addEventListener("click", () => {
    if (filteredQuotes.length === 0) return;
    currentFilterIndex = (currentFilterIndex + 1) % filteredQuotes.length;
    displayQuote(filteredQuotes[currentFilterIndex]);
  });
  