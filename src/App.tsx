import {useState} from 'react'
import Card from './components/Card'
import Header from './components/Header'
import {cards} from './data'
import {TCard} from './definitions'

const App = () => {
	const [score, setScore] = useState<number>(0)
	const [bestScore, setBestScore] = useState<number>(0)

	return (
		<div className='App'>
			<Header score={score} bestScore={bestScore} />
			<div className='grid'>
				{cards.map((card: TCard) => (
					<Card key={card.id} details={card} />
				))}
			</div>
		</div>
	)
}

export default App
