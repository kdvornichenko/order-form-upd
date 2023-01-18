import { useRef } from 'react'
import styles from './ModalOrderStatusErr.module.sass'

const ModalOrderStatusErr = ({ isVisible }) => {
	const ref = useRef()

	isVisible
		? setTimeout(() => {
				ref.current.classList.add('opacity-100')
		  }, 10)
		: null

	return (
		<div
			ref={ref}
			className={isVisible ? styles.orderErr + ' visible' : styles.orderErr}
		>
			<p> Товар не выбран!</p>
		</div>
	)
}

export default ModalOrderStatusErr
