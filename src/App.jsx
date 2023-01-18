import { useState } from 'react'
import OrderScreen from './components/OrderScreen/OrderScreen'
import SignInScreen from './components/SignInScreen/SignInScreen'

function App() {
	const [locker, setLocker] = useState(true)
	const [phoneNumber, setPhoneNumber] = useState()

	const onLockerButtonClick = isClicked => {
		setLocker(isClicked)
		localStorage.setItem('phone', phoneNumber)
	}

	return (
		<>
			{locker ? (
				<SignInScreen
					buttonClick={onLockerButtonClick}
					phoneNumber={setPhoneNumber}
				/>
			) : (
				<OrderScreen phoneNumber={phoneNumber} />
			)}
		</>
	)
}

export default App
