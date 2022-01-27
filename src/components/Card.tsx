import {TCard} from '../definitions'

interface IProps {
	details: TCard
	updateGameState: (card: TCard) => void
}

const Card = ({details, updateGameState}: IProps) => {
	const {title} = details

	return (
		<div onClick={() => updateGameState(details)}>
			{details.img && <img src={details.img} width='300px' height='300px' style={{objectFit: 'cover'}} />}
			<p>{title}</p>
		</div>
	)
}

export default Card
