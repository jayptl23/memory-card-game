interface IProps {
	score: number
	bestScore: number
}

const Header = ({score, bestScore}: IProps) => {
	return (
		<header>
			<h1>Memory Card Game</h1>
			<p>Score: {score}</p>
			<p>Best Score: {bestScore}</p>
		</header>
	)
}

export default Header
