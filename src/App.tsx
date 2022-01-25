import {useState} from 'react'
import Card from './components/Card'
import Header from './components/Header'
import {cards as cardsData} from './data'
import {TCard} from './definitions'

const App = () => {
	const [score, setScore] = useState<number>(0)
	const [bestScore, setBestScore] = useState<number>(0)
	const [cards, setCards] = useState<TCard[]>([...cardsData])

	const updateGameState = (card: TCard) => {
		const alreadyClicked: boolean = card.clicked
		if (!alreadyClicked) {
			setScore(prevScore => prevScore + 1)
			let newCards = cards.filter(theCard => theCard.id !== card.id)
			newCards = [...newCards, {...card, clicked: true}]
			setCards(newCards)
		} else {
			if (score > bestScore) {
				setBestScore(score)
			}
			setScore(0)
			setCards([...cardsData])
			console.log('shuffling cards...')
			const temp: TCard = cards[0]
			cards[0] = cards[cards.length - 1]
			cards[cards.length - 1] = temp
		}
	}

	const handleCardClick = (e: any) => console.log(e.target)

	return (
		<div className='App'>
			<Header score={score} bestScore={bestScore} />
			<div className='grid'>
				{cards.map((card: TCard) => (
					<Card key={card.id} details={card} updateGameState={updateGameState} />
				))}
			</div>
		</div>
	)
}

export default App
