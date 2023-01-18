import styles from './PhoneInput.module.sass'

import InputMask from 'react-input-mask'
import { useEffect, useState } from 'react'

const PhoneInput = ({ phoneNumber }) => {
	const [phoneInputValue, setPhoneInputValue] = useState()

	const onHandleChange = e => {
		setPhoneInputValue(e.target.value)
	}

	useEffect(() => {
		phoneNumber(phoneInputValue)
	}, [phoneInputValue])

	useEffect(() => {
		setPhoneInputValue(localStorage.getItem('phone'))
	}, [])

	return (
		<InputMask
			key='Locker'
			className={styles.PhoneInput}
			mask='+7 (999) 999-99-99'
			onChange={onHandleChange}
			value={phoneInputValue}
			placeholder='+7 (999) 999-99-99'
			name='inputPhone'
			inputMode='numeric'
			pattern='[0-9]*'
		/>
	)
}

export default PhoneInput
