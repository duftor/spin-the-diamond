export type Position = {
	id: number
	name: string
	shortName: string
}

export type Player = {
	id: number
	firstName: string
	lastName: string
	jerseyNumber: number
	position?: string
	isCaptain?: boolean
	age?: number
	bats?: "left" | "right" | "switch"
	throws?: "left" | "right"
	photoUrl?: string
}
