import type { Position } from "../types"

export function getRandomPosition(positions: Position[]): Position | null {
	if (positions.length === 0) return null

	const randomIndex = Math.floor(Math.random() * positions.length)
	return positions[randomIndex]
}

export function pickAndRemovePosition(positions: Position[]): Position | null {
	if (positions.length === 0) return null

	const [chosen] = positions.splice(
		Math.floor(Math.random() * positions.length),
		1
	)
	return chosen
}
