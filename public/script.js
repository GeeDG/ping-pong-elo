const loadPlayersButton = document.querySelector("#load-players-button");
const playersList = document.querySelector("#players-list");
const playerNameInput = document.querySelector("#player-name-input");
const addPlayerButton = document.querySelector("#add-player-button");

loadPlayersButton.addEventListener("click", loadPlayers);

addPlayerButton.addEventListener("click", async () => {
  const playerName = playerNameInput.value;

  await fetch("/api/players", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      name: playerName
    })
  });

  playerNameInput.value = "";

  await loadPlayers();
});

async function loadPlayers() {
  const response = await fetch("/api/players");
  const players = await response.json();

  playersList.innerHTML = "";

  players.forEach((player) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${player.name}: ${player.rating}`;
    playersList.appendChild(listItem);
  });
}