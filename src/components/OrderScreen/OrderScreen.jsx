import styles from './OrderScreen.module.sass'

import { itemsData } from '../../data/itemsData'
import { useEffect, useState } from 'react'

import Item from '../Item/Item'
import SendOrder from '../SendOrder/SendOrder'
import ModalOrderStatusSend from '../ModalOrderStatus/ModalOrderStatusSend/ModalOrderStatusSend'
import ModalOrderStatusErr from '../ModalOrderStatus/ModalOrderStatusErr/ModalOrderStatusErr'

const OrderScreen = ({ phoneNumber }) => {
	const [items] = useState(itemsData)
	const [orderData, setOrderData] = useState()
	const [totalAmount, setTotalAmount] = useState(0)
	const [products, setProducts] = useState([])
	const [totalOrderData, setTotalOrderData] = useState()
	const [modalOrderStatus, setModalOrderStatus] = useState()
	const [isVisibleSend, setIsVisibleSend] = useState(false)
	const [isVisibleErr, setIsVisibleErr] = useState(false)

	useEffect(() => {
		setProducts([...items])
	}, [])

	useEffect(() => {
		setTotalOrderData(products)
	}, [products])

	useEffect(() => {
		setTotalOrderData([...products])
		totalOrderData
			? setTotalOrderData([
					...totalOrderData.filter(item => item.name !== orderData.name),
					orderData,
			  ])
			: null
	}, [orderData])

	useEffect(() => {
		totalOrderData
			? setTotalAmount(
					totalOrderData
						.map(item => item.price * item.count)
						.reduce((acc, currentValue) => acc + currentValue, 0)
			  )
			: null
	}, [totalOrderData])

	useEffect(() => {
		modalOrderStatus == 'send'
			? (setIsVisibleSend(true),
			  setTimeout(() => {
					setIsVisibleSend(false)
			  }, 4000))
			: null

		modalOrderStatus == 'err'
			? (setIsVisibleErr(true),
			  setTimeout(() => {
					setIsVisibleErr(false)
			  }, 2000))
			: null
	}, [modalOrderStatus])

	return (
		<div className={styles.OrderScreen}>
			<div className={styles.itemsList}>
				{items.map(item => (
					<Item
						key={item.name}
						item={item}
						orderData={setOrderData}
						totalAmount={setTotalAmount}
					/>
				))}
			</div>
			<div className={styles.total}>Итого: {totalAmount}₽</div>

			<SendOrder
				phoneNumber={phoneNumber}
				totalOrderData={totalOrderData}
				totalAmount={totalAmount}
				modalOrderStatus={setModalOrderStatus}
			/>
			{modalOrderStatus == 'send' ? (
				<ModalOrderStatusSend
					totalAmount={totalAmount}
					isVisible={isVisibleSend}
				/>
			) : (
				<ModalOrderStatusErr isVisible={isVisibleErr} />
			)}
		</div>
	)
}

export default OrderScreen
