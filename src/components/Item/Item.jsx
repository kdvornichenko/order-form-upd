import { useState, useRef, useEffect } from 'react'
import styles from './Item.module.sass'

const Item = ({ item, orderData }) => {
	const [count, setCount] = useState(0)
	const [itemValue, setItemValue] = useState('')
	const [disabled, setDisabled] = useState(true)

	const inputRef = useRef(null)

	useEffect(() => {
		setItemValue(inputRef.current.value)
	})

	const handleChange = () => {}

	const sendData = useEffect(() => {
		orderData({ name: item.name, price: item.price, count: count })
	}, [count])

	const onInputClick = () => {
		itemValue == 0 ? setCount('') : null
	}

	const onInput = () => {
		setCount(inputRef.current.value == 0 ? '' : +inputRef.current.value)
		sendData
	}

	useEffect(() => {
		itemValue == 0 ? setDisabled(true) : setDisabled(false)
	}, [itemValue])

	const onInputClickOut = () => {
		itemValue == 0 ? setCount(0) : null
	}

	const onClickMinus = () => {
		setCount(prev => prev - 1)
		itemValue <= 1 ? (setCount(0), setDisabled(true)) : null
		sendData
	}

	const onClickPlus = () => {
		setCount(prev => prev + 1)
		setDisabled(false)
		sendData
	}

	return (
		<div
			className={
				item.indent === true ? styles.Item + ' ' + 'mt-6' : styles.Item
			}
		>
			<div className={styles.name}>{item.name}</div>
			<div>{item.price}₽</div>
			<div className={styles.input}>
				<button onClick={onClickMinus} disabled={disabled}>
					-
				</button>
				<input
					type='number'
					inputMode='numeric'
					value={count}
					ref={inputRef}
					onChange={handleChange}
					onInput={onInput}
					onClick={onInputClick}
					onBlur={onInputClickOut}
				/>
				<button onClick={onClickPlus}>+</button>
			</div>
		</div>
	)
}

export default Item
