import { useState } from 'react'
import { bookings, statusVariants } from '../data.js'
import {
  Badge,
  Btn,
  Card,
  Input,
  Label,
  PageWrap,
  Row,
  SectionTitle,
  Select,
} from '../ui.jsx'

const SectionCaption = ({ children }) => <div className="section-caption mb-2">{children}</div>

export const AdminList = ({ setPage }) => (
  <PageWrap wide>
    <div className="d-flex flex-column flex-lg-row justify-content-between align-items-lg-center gap-3 mb-4">
      <SectionTitle>Список броней</SectionTitle>
      <div className="d-flex flex-column flex-sm-row gap-2 admin-filters">
        <Select options={['Все статусы', 'Создана', 'Клиент пришёл', 'Отменена']} value="Все статусы" />
        <Input placeholder="Поиск по имени / номеру..." />
      </div>
    </div>

    <div className="row g-3 mb-4">
      {[
        { label: 'Всего броней', value: '5', variant: 'primary' },
        { label: 'Активных', value: '3', variant: 'success' },
        { label: 'Отменено', value: '1', variant: 'danger' },
        { label: 'Не пришли', value: '1', variant: 'secondary' },
      ].map(stat => (
        <div className="col-6 col-lg-3" key={stat.label}>
          <Card className="h-100 stat-card">
            <div className={`h4 fw-bold font-monospace text-${stat.variant} mb-1`}>{stat.value}</div>
            <div className="small text-secondary">{stat.label}</div>
          </Card>
        </div>
      ))}
    </div>

    <Card className="table-card">
      <div className="table-responsive">
        <table className="table table-striped table-hover align-middle mb-0">
          <thead className="table-light">
            <tr>
              {['ID', 'Клиент', 'Зона / Стол', 'Дата и время', 'Гостей', 'Статус', ''].map(header => (
                <th key={header} scope="col" className="small text-uppercase text-secondary text-nowrap">{header}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {bookings.map(booking => (
              <tr key={booking.id}>
                <td className="font-monospace small text-primary">{booking.id}</td>
                <td>
                  <div className="fw-medium">{booking.name}</div>
                  <div className="small text-secondary">{booking.phone}</div>
                </td>
                <td>
                  <div>{booking.zone}</div>
                  <div className="small text-secondary font-monospace">{booking.table}</div>
                </td>
                <td className="font-monospace small">
                  <div>{booking.date}</div>
                  <div className="text-secondary">{booking.time}</div>
                </td>
                <td className="text-center">{booking.guests}</td>
                <td><Badge label={booking.status} variant={statusVariants[booking.status]} /></td>
                <td>
                  <div className="d-flex gap-1">
                    <Btn small variant="outline" onClick={() => setPage('admin-detail')}>Открыть</Btn>
                    <Btn small variant="danger">Удалить</Btn>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Card>
  </PageWrap>
)

export const AdminDetail = ({ setPage }) => {
  const [status, setStatus] = useState('Создана')
  const [showCancel, setShowCancel] = useState(false)

  const changeStatus = nextStatus => {
    setStatus(nextStatus)
    setShowCancel(nextStatus === 'Отменена')
  }

  return (
    <PageWrap medium>
      <button type="button" className="btn btn-link btn-sm px-0 mb-3" onClick={() => setPage('admin-list')}>
        ← Вернуться к списку
      </button>

      <div className="d-flex justify-content-between align-items-start gap-3 mb-4">
        <div>
          <h1 className="h4 fw-bold mb-1">#BR-2024-0847</h1>
          <p className="small text-secondary mb-0">Создана: 14.10.2024 в 09:34</p>
        </div>
        <Badge label={status} variant={statusVariants[status]} />
      </div>

      <div className="row g-3 mb-3">
        <div className="col-md-6">
          <Card className="h-100">
            <SectionCaption>Клиент</SectionCaption>
            <Row label="ФИО" value="Иванов Иван Иванович" />
            <Row label="Телефон" value="+7 (999) 123-45-67" />
          </Card>
        </div>
        <div className="col-md-6">
          <Card className="h-100">
            <SectionCaption>Стол</SectionCaption>
            <Row label="Зона рассадки" value="Основной зал" />
            <Row label="Номер стола" value="№ 3" />
            <Row label="Вместимость" value="4 чел." />
          </Card>
        </div>
      </div>

      <Card className="mb-3">
        <SectionCaption>Детали визита</SectionCaption>
        <div className="row gx-4">
          <div className="col-md-6"><Row label="Дата визита" value="15 октября 2024" /></div>
          <div className="col-md-6"><Row label="Количество гостей" value="2 гостя" /></div>
          <div className="col-md-6"><Row label="Время посадки" value="10:00" /></div>
          <div className="col-md-6"><Row label="Расчетное время ухода" value="12:00" /></div>
          <div className="col-12"><Row label="Комментарий" value="—" /></div>
        </div>
      </Card>

      <Card>
        <SectionCaption>Изменить статус брони</SectionCaption>
        <div className="d-flex flex-wrap gap-2 mb-3">
          {Object.keys(statusVariants).map(item => (
            <button
              type="button"
              key={item}
              onClick={() => changeStatus(item)}
              className={`btn btn-sm ${status === item ? `btn-${statusVariants[item]}` : `btn-outline-${statusVariants[item]}`}`}
            >
              {item}
            </button>
          ))}
        </div>
        {showCancel && (
          <div className="mb-3">
            <Label>Причина отмены</Label>
            <Input placeholder="Укажите причину отмены брони..." />
          </div>
        )}
        <div className="d-flex justify-content-between gap-2">
          <Btn variant="danger">Удалить бронь</Btn>
          <Btn>Сохранить изменения</Btn>
        </div>
      </Card>
    </PageWrap>
  )
}
