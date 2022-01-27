interface IProps {
	score: number
	bestScore: number
}

const Header = ({score, bestScore}: IProps) => {
	return (
		<header>
			<h1>Peaky Memory Game</h1>
			<div className='score'>
				<p>Score: {score}</p>
				<p>Best Score: {bestScore}</p>
			</div>
		</header>
	)
}

export default Header
