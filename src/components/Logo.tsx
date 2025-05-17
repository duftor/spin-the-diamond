import logo from "../assets/logo.png"
import logo_colored from "../assets/logo_colored.png"

type LogoProps = {
	colored?: boolean
}

export default function Logo({ colored = true }: LogoProps) {
	return <img src={colored ? logo_colored : logo} alt="Logo" />
}
