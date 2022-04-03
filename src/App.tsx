import * as React from 'react'
import './App.css'

import MainPage from './pages/MainPage'
import AuthPage from './pages/AuthPage'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeScreen from './screens/HomeScreen'
import ApplicationsScreen from './screens/ApplicationsScreen'
import WarehouseScreen from './screens/WarehouseScreen'
import ClientsScreen from './screens/ClientsScreen'
import AgentsScreen from './screens/AgentsScreen'
import SettingsScreen from './screens/SettingsScreen'
import CreateOrderScreen from './screens/CreateOrderScreen'
import LeftoversScreen from './screens/LeftoversScreen'
import AdmissionScreen from './screens/Admission'

export default function App() {
  return (
		<BrowserRouter>
			<div className="App">
				<Routes>
					<Route path='/' element={<MainPage />}>
						<Route index element={<HomeScreen />} />
						<Route path='applications' element={<ApplicationsScreen />} />
						<Route path='createOrder' element={<CreateOrderScreen />} />
						<Route path='warehouse' element={<WarehouseScreen />} />
						<Route path='leftovers' element={<LeftoversScreen/>} />
						<Route path='admission' element={<AdmissionScreen />} />
						<Route path='clients' element={<ClientsScreen />} />
						<Route path='agents' element={<AgentsScreen />} />
						<Route path='settings' element={<SettingsScreen />} />
					</Route>
				</Routes>
			</div>
		</BrowserRouter>
  )
}
