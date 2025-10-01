const gameInfo = [
    { username: "john", team: "red", score: 5, items: ["ball", "book", "pen"] },
    { username: "becky", team: "blue", score: 10, items: ["tape", "backpack", "pen"] },
    { username: "susy", team: "red", score: 55, items: ["ball", "eraser", "pen"] },
    { username: "tyson", team: "green", score: 1, items: ["book", "pen"] },
  ];
  // 
  const usernames = gameInfo.map(player => player.username + "!");
  console.log("Usernames:", usernames);
  // 
  const winners = gameInfo
    .filter(player => player.score > 5)
    .map(player => player.username);
  console.log("Winners:", winners);
  //
  const totalScore = gameInfo.reduce((acc, player) => acc + player.score, 0);
  console.log("Total Score:", totalScore);
  // 
  gameInfo.forEach(player => {
    console.log(`${player.username} has score ${player.score}`);
  });
  //
  const hasHighScore = gameInfo.some(player => player.score > 50);
  console.log("Someone has score > 50?", hasHighScore);
  // 
  const allPositive = gameInfo.every(player => player.score > 0);
  console.log("All players have positive score?", allPositive);
  
  