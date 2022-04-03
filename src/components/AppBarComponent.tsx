import * as React from 'react'
import { AppBar, IconButton, Toolbar, Typography } from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import AccountCircle from '@mui/icons-material/AccountCircle'

interface AppBarInterface {
	name: string,
	onClick: () => void
}

export default function AppBarComponent(props: AppBarInterface) {
	return (
		<AppBar position='fixed' color='primary' sx={{height: 64, justifyContent: 'center'}}>
			<Toolbar>
				<IconButton
					edge='start'
					onClick={props.onClick}
					color='inherit'
					sx={{ mr: 2 }}
				>
					<MenuIcon />
				</IconButton>
				<Typography sx={{ flexGrow: 1, textAlign: 'center', fontWeight: '700', letterSpacing: 1 }}>{
					props.name === '/' ? 'Главная' : 
					(props.name === '/applications' ? 'Заявки' :
					(props.name === '/warehouse' ? 'Склад' :
					(props.name === '/clients' ? 'Клиенты' :
					(props.name === '/agents' ? 'Агенты' :
					(props.name === '/settings' ? 'Настройки': 
					(props.name === '/createOrder' ? 'Создать заказ' :
					(props.name === '/leftovers' ? 'Остатки' :
					(props.name === '/admission' ? 'Поступление' : null))))))))
				}</Typography>
				<div>
          <IconButton
        		size="large"
            aria-label="account of current user"
            aria-controls="menu-appbar"
            aria-haspopup="true"
            color="inherit"
          >
          	<AccountCircle />
          </IconButton>
        </div>
			</Toolbar>
		</AppBar>
	)
}
