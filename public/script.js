const loadPlayersButton = document.querySelector("#load-players-button");
const playersList = document.querySelector("#players-list");

loadPlayersButton.addEventListener("click", async () => {
  const response = await fetch("/api/players");
  const players = await response.json();

  playersList.innerHTML = "";

  players.forEach((player) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${player.name}: ${player.rating}`;
    playersList.appendChild(listItem);
  });
});