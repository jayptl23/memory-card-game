// import {useState} from 'react'
import {TCard} from '../definitions'

interface IProps {
	details: TCard
	updateGameState: (card: TCard) => void
}

const Card = ({details, updateGameState}: IProps) => {
	const {id, title, clicked} = details

	// const [clicked, setClicked] = useState<boolean>(false)

	const handleClick = () => {
		console.log('card click')
		updateGameState(details)
	}

	return (
		<div onClick={handleClick}>
			<p>{title}</p>
		</div>
	)
}

export default Card
