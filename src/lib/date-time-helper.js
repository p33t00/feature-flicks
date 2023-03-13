export default function formatDateTime(rawDateTime) {
	const screeningTimeRaw = new Date(rawDateTime)
	return `${screeningTimeRaw.toDateString()} - ${screeningTimeRaw.toLocaleTimeString()}`
}