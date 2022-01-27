import {TCard} from '../definitions'

interface IProps {
	details: TCard
	updateGameState: (card: TCard) => void
}

const Card = ({details, updateGameState}: IProps) => {
	const {title} = details

	return (
		<div className='card' onClick={() => updateGameState(details)}>
			{details.img && <img src={details.img} />}
			<p>{title}</p>
		</div>
	)
}

export default Card
