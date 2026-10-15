export const getSeatingAreaText = (seatingArea) =>{
  const name = seatingArea.name
  if (name === 'main') return 'Основной зал'
  if (name === 'terrace') return 'Терраса'
  if (name === 'vip') return 'VIP-зал'
  return 'somthing goes wrong'
}

export const dateToISOString = (date) => {
    return date.toISOString().split('T')[0]
}

export const ISOStringToDate = (string) => {
  const [year, month, day] = string.split('-')
  return new Date(year, month, day)
}