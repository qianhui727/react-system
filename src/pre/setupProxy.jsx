import axios from 'axios'
import React, { useEffect } from 'react'

export default function setProxy() {
	useEffect(() => {
		axios
			.get(
				'/api/mmdb/movie/v3/list/hot.json?ct=%E8%A5%BF%E5%AE%89&ci=42&channelId=4'
			)
			.then((res) => {
				console.log(res.data.data.hot)
			})
	}, [])
	return <div>反向代理</div>
}
