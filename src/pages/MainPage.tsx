import { AppBar, Box } from '@mui/material'
import * as React from 'react'
import { useLocation } from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import AppBarComponent from '../components/AppBarComponent'
import DrawerComponent from '../components/DrawerComponent'

export default function MainPage() {
	const [isOpen, setIsOpen] = React.useState(false)

	function handleToggleDrawer() {
		setIsOpen(!isOpen)
	}
	
	let location = useLocation()

	return(
		<Box>
			<AppBarComponent name={location.pathname} onClick={handleToggleDrawer} />
			<DrawerComponent open={isOpen} onClose={handleToggleDrawer} />
			<Box sx={{pt: 8}}>
				<Outlet />
			</Box>
		</Box>
	)
}
