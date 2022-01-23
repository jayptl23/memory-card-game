import {useState} from 'react'
import {TCard} from '../definitions'

interface IProps {
	details: TCard
}

const Card = ({details}: IProps) => {
	const [clicked, setClicked] = useState<boolean>(false)

	const handleClick = () => {
		console.log('card clicked')
		setClicked(true)
	}

	return (
		<div onClick={handleClick}>
			<p>{details.title}</p>
		</div>
	)
}

export default Card
