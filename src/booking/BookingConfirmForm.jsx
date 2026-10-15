import {
  Btn,
  Card,
  PageWrap,
  Row,
  SectionTitle,
  Stepper,
  FormHeading,
} from '../ui.jsx'
import { getSeatingAreaText, ISOStringToDate } from '../utils/utils.js'


const BookingConfirmForm = ({
  contactData,
  bookingParams,
  visitTime,
  handlePrevButtonClick,
  handleConfirmButtonClick
}) => {

  const localeOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  return (
    <PageWrap>
      <SectionTitle>Забронировать столик</SectionTitle>
      <Card>
        <Stepper active={3} />
        <FormHeading>Проверьте данные брони</FormHeading>
        <div className="mb-4">
          <div className="section-caption mb-2">Клиент</div>
          <Row label="ФИО" value={contactData.name} />
          <Row label="Телефон" value={contactData.phoneNumber} />
        </div>
        <div className="mb-4">
          <div className="section-caption mb-2">Детали</div>
          <Row label="Зона рассадки" value={getSeatingAreaText(bookingParams.seatingArea)} />
          <Row label="Дата визита" 
            value={ISOStringToDate(bookingParams.visitDate).toLocaleDateString('ru', localeOptions)} />
          <Row label="Время посадки" value={visitTime} />
          <Row label="Количество гостей" value="TODO" />
          <Row label="Комментарий" value={bookingParams.comment} />
        </div>
        <div className="alert alert-warning small mb-4" role="alert">
          После подтверждения стол будет зарезервирован. Для отмены свяжитесь с рестораном.
        </div>
        <div className="d-flex justify-content-between">
          <Btn variant="outline" onClick={handlePrevButtonClick}>← Изменить данные</Btn>
          <Btn onClick={handleConfirmButtonClick}>Подтвердить бронь</Btn>
        </div>
      </Card>
    </PageWrap>
  )
}

export default BookingConfirmForm