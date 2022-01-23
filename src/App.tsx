import {useState} from 'react'
import Card from './components/Card'
import Header from './components/Header'

const App = () => {
	const [score, setScore] = useState<number>(0)
	const [bestScore, setBestScore] = useState<number>(0)

	return (
		<div className='App'>
			<Header score={score} bestScore={bestScore} />
			<Card />
		</div>
	)
}

export default App
