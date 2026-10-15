export const pages = {
  bookingStep1: 'booking-step1',
  bookingStep2: 'booking-step2',
  bookingStep3: 'booking-step3',
  bookingStep4: 'booking-step4',
}

export const navigationItems = [
  { key: 'booking-step1', label: 'Бронирование (шаг 1)' },
  { key: 'booking-step2', label: 'Шаг 2 — Параметры' },
  { key: 'booking-step3', label: 'Шаг 3 — Время' },
  { key: 'booking-confirm', label: 'Шаг 4 — Подтверждение' },
  { key: 'booking-success', label: 'Успех' },
  { key: 'admin-list', label: 'Админ — список' },
  { key: 'admin-detail', label: 'Админ — карточка' },
]

export const bookingSteps = ['Контакты', 'Параметры', 'Время', 'Подтверждение']

export const seatingAreas = [
  { name: 'main', openTime: '10:00', closeTime: '22:00'},
  { name: 'terrace', openTime: '12:00', closeTime: '21:00'},
  { name: 'vip', openTime: '14:00', closeTime: '23:00'}
]



export const freeIntervals = [
  { from: '10:00', to: '14:00' },
  { from: '15:25', to: '18:00' },
  { from: '19:05', to: '21:00' },
]

export const statusVariants = {
  'Создана': 'primary',
  'Отменена': 'danger',
  'Клиент пришёл': 'success',
  'Клиент задерживается': 'warning',
  'Клиент не пришёл': 'secondary',
}

export const bookings = [
  { id: '#BR-2024-0847', name: 'Иванов И.И.', phone: '+7 (999) 123-45-67', zone: 'Основной зал', table: '№ 3', date: '15.10.2024', time: '10:00–12:00', guests: 2, status: 'Создана' },
  { id: '#BR-2024-0846', name: 'Петрова А.С.', phone: '+7 (916) 234-56-78', zone: 'Терраса', table: '№ 7', date: '15.10.2024', time: '14:00–16:30', guests: 4, status: 'Клиент пришёл' },
  { id: '#BR-2024-0845', name: 'Смирнов Д.В.', phone: '+7 (903) 345-67-89', zone: 'VIP-зал', table: '№ 1', date: '15.10.2024', time: '19:00–21:00', guests: 5, status: 'Клиент задерживается' },
  { id: '#BR-2024-0844', name: 'Козлова М.Р.', phone: '+7 (926) 456-78-90', zone: 'Основной зал', table: '№ 5', date: '14.10.2024', time: '12:00–14:00', guests: 2, status: 'Отменена' },
  { id: '#BR-2024-0843', name: 'Новиков Е.П.', phone: '+7 (977) 567-89-01', zone: 'Основной зал', table: '№ 2', date: '14.10.2024', time: '18:00–20:30', guests: 3, status: 'Клиент не пришёл' },
]
