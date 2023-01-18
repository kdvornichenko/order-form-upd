import ButtonBlue from '../ButtonBlue/ButtonBlue'

import axios from 'axios'
import { useEffect, useState } from 'react'

const SendOrder = ({
	phoneNumber,
	totalOrderData,
	totalAmount,
	modalOrderStatus,
}) => {
	const token = '5654256117:AAEN5oe9IdZoyZx4o39JbOSFBAUuJf7RlsE'
	const URI_API = `https://api.telegram.org/bot${token}/sendMessage`

	const [messageHeader, setMessageHeader] = useState()
	const [productsInMessage, setProductsInMessage] = useState()
	const [productsInMessageText, setProductsInMessageText] = useState()
	const [message, setMessage] = useState()

	useEffect(() => {
		setMessageHeader(
			window.location.toString().includes('distributors')
				? 'Дистрибьютор'
				: 'Специалист'
		)
	}, [])

	useEffect(() => {
		if (totalOrderData) {
			setProductsInMessage(
				totalOrderData.map(e =>
					e.count > 0
						? `✨${e.name} - ${e.count}▪️${e.price}₽ = ${e.price * e.count}₽ \n`
						: ''
				)
			)
		}
	}, [totalOrderData])

	useEffect(() => {
		setProductsInMessageText(String(productsInMessage).split(',').join(''))
	}, [productsInMessage])

	useEffect(() => {
		setMessage(`📌Заказ\n\nCosmetic ${messageHeader}:\n➕${phoneNumber}\n\n..................................................................\n\n📦Состав заказа:\n${productsInMessageText}\n📄Итого: ${totalAmount}₽
			`)
	}, [productsInMessageText])

	const onSendOrderClick = () => {
		if (totalAmount > 1) {
			axios
				.post(URI_API, {
					chat_id: '-1001768227573',
					parse_mode: 'html',
					text: message,
				})
				.then(axios.spread((...res) => {}))
				.catch(err => {
					console.warn(err)
				})
				.finally(
					setTimeout(() => {
						window.location.reload()
						setTotalAmount(0)
					}, 4000)
				),
				modalOrderStatus('send')
		} else {
			modalOrderStatus('err')
		}
	}

	return (
		<div className='mt-4 text-center'>
			<ButtonBlue content='Отправить заказ' click={onSendOrderClick} />
		</div>
	)
}

export default SendOrder
