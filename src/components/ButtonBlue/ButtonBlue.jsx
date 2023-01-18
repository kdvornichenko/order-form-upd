import styles from './ButtonBlue.module.sass'

const ButtonBlue = ({ content, click }) => {
	return (
		<button className={styles.ButtonBlue} onClick={click}>
			{content}
		</button>
	)
}

export default ButtonBlue
