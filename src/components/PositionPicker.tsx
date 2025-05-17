import { useState } from "react"
import { baseballPositions } from "../constants/positions"
import { players } from "../constants/players"
import type { Player, Position } from "../types"
import { pickAndRemove } from "../utils"

type Assignment = {
	player: Player
	position: Position
}

export function PositionPicker() {
	const [remainingPositions, setRemainingPositions] = useState<Position[]>([
		...baseballPositions,
	])
	const [remainingPlayers, setRemainingPlayers] = useState<Player[]>([
		...players,
	])

	const [assignments, setAssignments] = useState<Assignment[]>([])

	const handleAssign = () => {
		const positionsCopy = [...remainingPositions]
		const playersCopy = [...remainingPlayers]

		const position = pickAndRemove(positionsCopy)
		const player = pickAndRemove(playersCopy)

		if (!position) {
			alert("Plus de positions disponibles !")
			return
		}
		if (!player) {
			alert("Plus de joueurs disponibles !")
			return
		}

		setRemainingPositions(positionsCopy)
		setRemainingPlayers(playersCopy)
		setAssignments([...assignments, { player, position }])
	}

	return (
		<div>
			<h2>Attributions :</h2>
			<ul>
				{assignments.map(({ player, position }, index) => (
					<li key={index}>
						{player.firstName} {player.lastName} joue en{" "}
						{position.name} ({position.shortName})
					</li>
				))}
			</ul>

			<button
				onClick={handleAssign}
				disabled={
					remainingPositions.length === 0 ||
					remainingPlayers.length === 0
				}>
				Assigner un joueur à une position
			</button>

			<h3>Joueurs restants : {remainingPlayers.length}</h3>
			<h3>Positions restantes : {remainingPositions.length}</h3>
		</div>
	)
}
