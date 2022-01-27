import {useState} from 'react'
import Card from './components/Card'
import Header from './components/Header'
import {cards as cardsData} from './data'
import {TCard} from './definitions'
import {shuffle} from './utils'

const App = () => {
	const [score, setScore] = useState<number>(0)
	const [bestScore, setBestScore] = useState<number>(0)
	const [cards, setCards] = useState<TCard[]>([...cardsData])

	const updateGameState = (card: TCard) => {
		const alreadyClicked: boolean = card.clicked
		alreadyClicked ? restartGame() : continueGame(card)
	}

	// Helpers
	const continueGame = (card: TCard) => {
		setScore(prevScore => prevScore + 1)
		let newCards = cards.filter(theCard => theCard.id !== card.id)
		newCards = [...newCards, {...card, clicked: true}]
		shuffle(newCards)
		setCards(newCards)
	}

	const restartGame = () => {
		if (score > bestScore) {
			setBestScore(score)
		}
		setScore(0)
		let newCards = [...cardsData]
		shuffle(newCards)
		setCards(newCards)
	}

	return (
		<div className='app'>
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
