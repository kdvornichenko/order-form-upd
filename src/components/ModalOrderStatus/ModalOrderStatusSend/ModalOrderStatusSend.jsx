import styles from './ModalOrderStatusSend.module.sass'
import checkIcon from '../../../assets/check.svg'
import { useRef } from 'react'

const ModalOrderStatusSend = ({ totalAmount, isVisible }) => {
	const ref = useRef()

	isVisible
		? setTimeout(() => {
				ref.current.classList.add('opacity-100')
		  }, 10)
		: null

	return (
		<div
			ref={ref}
			className={isVisible ? styles.orderSend + ' visible' : styles.orderSend}
		>
			<img className={styles.checkIcon} src={checkIcon} alt='Check' />
			<p>Ваш заказ принят!</p>
			<span className={styles.totalAmount}>Сумма заказа: {totalAmount}₽</span>
			<p>Наш менеджер скоро свяжется с вами</p>
		</div>
	)
}

export default ModalOrderStatusSend
