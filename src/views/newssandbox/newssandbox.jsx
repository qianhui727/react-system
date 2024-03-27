import React from 'react'
import { Outlet } from 'react-router-dom'
export default function newssandbox() {
	return (
		<>
			<div>newssandbox</div>
			<div>
				<Outlet />
			</div>
		</>
	)
}
