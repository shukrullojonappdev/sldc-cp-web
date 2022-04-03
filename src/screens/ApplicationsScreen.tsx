import * as React from 'react'
import { Accordion, AccordionDetails, AccordionSummary, Box, Button, Grid, MenuItem, Paper, TextField } from '@mui/material'

import MultipleSelectComponent from '../components/MultipleSelectComponent'
import TableComponent from '../components/TableComponent'

export default function ApplicationsScreen() {
	return (
		<Box sx={{p: 1}}>
			<Accordion sx={{mb: 1}}>
				<AccordionSummary>Фильтр</AccordionSummary>
				<AccordionDetails>
					<MultipleSelectComponent label='Статус' />
					<MultipleSelectComponent label='Тип' />
					<MultipleSelectComponent label='Тип цены'/>
				</AccordionDetails>
			</Accordion>
			<TableComponent />
		</Box>
	)
}
