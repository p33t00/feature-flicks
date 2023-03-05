import { Stack } from 'react-bootstrap'
import Screening from '../Screening.jsx'

export default function Main() {
	return (
		<Stack gap={4}>
      <Screening />
      <Screening />
    </Stack>
	)
}