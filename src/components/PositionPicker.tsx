import { useState } from "react"
import { baseballPositions } from "../constants/positions"
import type { Position } from "../types"
import { pickAndRemovePosition } from "../utils/positions"

export function PositionPicker() {
	// copie de la liste pour manipulation (on va enlever au fur et à mesure)
	const [remainingPositions, setRemainingPositions] = useState<Position[]>([
		...baseballPositions,
	])

	const [chosenPositions, setChosenPositions] = useState<Position[]>([])

	const handlePick = () => {
		const positionsCopy = [...remainingPositions]
		const chosen = pickAndRemovePosition(positionsCopy)

		if (chosen) {
			setRemainingPositions(positionsCopy)
			setChosenPositions([...chosenPositions, chosen])
		} else {
			alert("Plus de positions disponibles !")
		}
	}

	return (
		<div>
			<h2>Positions choisies :</h2>
			<ul>
				{chosenPositions.map((pos) => (
					<li key={pos.id}>
						{pos.name} ({pos.shortName})
					</li>
				))}
			</ul>

			<button
				onClick={handlePick}
				disabled={remainingPositions.length === 0}>
				Choisir une position aléatoire
			</button>

			<h3>Positions restantes : {remainingPositions.length}</h3>
		</div>
	)
}
