import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Container, Table } from "react-bootstrap";

import { Player } from "./models/PingPongModels.js";

function App() {
  const [players, setPlayers] = useState([
    new Player("Crazyguitar54"),
    new Player("GabboDeGabbix"),
    new Player("Albyconlay"),
    new Player("Federico Colombo")
  ]);

  // generata da chat, per giusto si dovrebbe fare un modulo a parte e fare navigare tra le pagine con react-route
  return (
    <Container className="mt-4">
      <h1>Ping Pong Elo Tracker</h1>

      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nickname</th>
            <th>Elo</th>
            <th>Games played</th>
            <th>Wins</th>
            <th>Losses</th>
          </tr>
        </thead>

        <tbody>
          {players.map((player) => (
            <tr key={player.nickname}>
              <td>{player.nickname}</td>
              <td>{player.elo}</td>
              <td>{player.gamesPlayed}</td>
              <td>{player.wins}</td>
              <td>{player.losses}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
}

export default App;
