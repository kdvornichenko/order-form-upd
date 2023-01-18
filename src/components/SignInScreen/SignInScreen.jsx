import styles from './SignInScreen.module.sass'

import ButtonBlue from '../ButtonBlue/ButtonBlue'
import PhoneInput from '../PhoneInput/PhoneInput'

const SignInScreen = ({ buttonClick, phoneNumber }) => {
	const onLockerButtonClick = () => {
		buttonClick(false)
	}

	return (
		<div className={styles.SignInWrap}>
			<PhoneInput phoneNumber={phoneNumber} />
			<ButtonBlue content='Войти' click={onLockerButtonClick} />
		</div>
	)
}

export default SignInScreen
