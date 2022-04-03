import * as React from 'react';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Box } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home'
import ListItemIcon from '@mui/material/ListItemIcon';
import ShoppingCardIcon from '@mui/icons-material/ShoppingCart'
import GroupIcon from '@mui/icons-material/Group'
import SettingsIcon from '@mui/icons-material/Settings'
import WarehouseIcon from '@mui/icons-material/Warehouse'
import AgentIcon from '@mui/icons-material/SupportAgent'
import { Link as RouterLink } from 'react-router-dom'
import { Button, Collapse, ListItemButton } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import CreateIcon from '@mui/icons-material/Create'
import ExtensionIcon from '@mui/icons-material/Extension'
import ImportIcon from '@mui/icons-material/ImportExport'

interface DrawerInterface {
	open: boolean,
	onClose: () => void
}

const keys = [1, 2, 3, 4, 5, 6, 7, 8, 9]

export default function DrawerComponent(props: DrawerInterface) {

	const [isOpen, setIsOpen]: [any, any] = React.useState({})
	const [selectedIndex, setSelectedIndex] = React.useState(1)

	function handleClick(id: any) {
		setIsOpen((prevState: any) => ({...prevState, [id]: !prevState[id]}))
	}

	function handleListItemClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>, index: number) {
		setSelectedIndex(index)
	}

  return (
		<Drawer
			anchor='left'
			open={props.open}				
			onClose={props.onClose}
		>
			<Box sx={{ width: 250 }}>
     		<List component='nav'>

					<RouterLink to='/'>
      			<ListItem button key={keys[0]} selected={selectedIndex === keys[0]} onClick={(event) => {
							props.onClose()
							handleListItemClick(event, keys[0])
						}}>
							<ListItemIcon>
								<HomeIcon />
							</ListItemIcon>
							<ListItemText primary='Главная' />
						</ListItem>
					</RouterLink>

					<ListItem sx={{ p: 0 }}>
						<RouterLink to='applications'>
							<ListItemButton key={keys[1]} selected={selectedIndex === keys[1]} sx={{ width: 186 }} onClick={(event) => {
								props.onClose()
								handleListItemClick(event, keys[1])
							}}>
									<ListItemIcon>
										<ShoppingCardIcon />
									</ListItemIcon>
									<ListItemText primary='Заявки' />
							</ListItemButton>
						</RouterLink>
						<Button onClick={() => handleClick(keys[1])} sx={{ p: 1, height: 48, borderRadius: 0 }}>
							{ isOpen[keys[1]] ? <ExpandLess /> : <ExpandMore />}
						</Button>
					</ListItem>
					<Collapse in={isOpen[keys[1]]} timeout='auto' unmountOnExit>
						<List component='div' disablePadding>
							<RouterLink to='createOrder'>
								<ListItemButton key={keys[6]} selected={selectedIndex === keys[6]} sx={{ pl: 4 }} onClick={(event) => {
									props.onClose()
									handleListItemClick(event, keys[6])
								}}>
									<ListItemIcon>
										<CreateIcon fontSize='small' />
									</ListItemIcon>
									<ListItemText primary='Создать заказ' />
								</ListItemButton>
							</RouterLink>
						</List>
					</Collapse>
					
					<ListItem sx={{ p: 0 }}>
						<RouterLink to='warehouse'>
							<ListItemButton key={keys[2]} selected={selectedIndex === keys[2]} sx={{ width: 186 }} onClick={(event) => {
								props.onClose()
								handleListItemClick(event, keys[2])
							}}>
									<ListItemIcon>
										<WarehouseIcon />
									</ListItemIcon>
									<ListItemText primary='Склад' />
							</ListItemButton>
						</RouterLink>
						<Button onClick={() => handleClick(keys[2])}  sx={{ p: 1, height: 48, borderRadius: 0 }}>
							{ isOpen[keys[2]] ? <ExpandLess /> : <ExpandMore />}
						</Button>
					</ListItem>
					<Collapse in={isOpen[keys[2]]} timeout='auto' unmountOnExit>
						<List component='div' disablePadding>
							<RouterLink to='leftovers'>
								<ListItemButton key={keys[7]} selected={selectedIndex === keys[7]} sx={{ pl: 4 }} onClick={(event) => {
									props.onClose()
									handleListItemClick(event, keys[7])
								}}>
									<ListItemIcon>
										<ExtensionIcon fontSize='small' />
									</ListItemIcon>
									<ListItemText primary='Остатки' />
								</ListItemButton>
							</RouterLink>
							<RouterLink to='admission'>
								<ListItemButton key={keys[8]} selected={selectedIndex === keys[8]} sx={{ pl: 4 }} onClick={(event) => {
									props.onClose()
									handleListItemClick(event, keys[8])
								}}>
									<ListItemIcon>
										<ImportIcon fontSize='small' />
									</ListItemIcon>
									<ListItemText primary='Поступление' />
								</ListItemButton>
							</RouterLink>
						</List>
					</Collapse>

					<RouterLink to='clients'>
						<ListItem button key={keys[3]} selected={selectedIndex === keys[3]} onClick={(event) => {
								props.onClose()
								handleListItemClick(event, keys[3])
							}}>
							<ListItemIcon>
								<GroupIcon />
							</ListItemIcon>
							<ListItemText primary='Клиенты' />
						</ListItem>
					</RouterLink>

					<RouterLink to='agents'>
						<ListItem button key={keys[4]} selected={selectedIndex === keys[4]} onClick={(event) => {
								props.onClose()
								handleListItemClick(event, 5)
							}}>
							<ListItemIcon>
								<AgentIcon />
							</ListItemIcon>
							<ListItemText primary='Агенты' />
						</ListItem>
					</RouterLink>

					<RouterLink to='settings'>
						<ListItem button key={keys[5]} selected={selectedIndex === keys[5]} onClick={(event) => {
								props.onClose()
								handleListItemClick(event, keys[5])
							}}>
							<ListItemIcon>
								<SettingsIcon />
							</ListItemIcon>
							<ListItemText primary='Настройки' />
						</ListItem>
					</RouterLink>

				</List>
			</Box>
		</Drawer>
  );
}
