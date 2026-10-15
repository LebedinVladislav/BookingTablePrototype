import { seatingAreas } from '../data.js'
import { getSeatingAreaText } from '../utils/utils.js'
import {
  Btn,
  Card,
  Input,
  Label,
  PageWrap,
  SectionTitle,
  Select,
  Stepper,
  Textarea,
  FormHeading,
} from '../ui.jsx'



const BookingParamsForm = ({
  bookingParams,
  minVisitDate,
  handleCommentInput,
  handleGuestsNumSelect,
  handleSeatingAreaSelect,
  handleVisitDateSelect,
  handlePrevButtonClick,
  handleFormSubmit
}) => {

  const {
    guestsNum,
    seatingArea,
    visitDate,
    comment
  } = bookingParams

  const guestsNumSelectName = 'guestsNum'
  const seatingAreaSelectName = 'seatingArea'
  const visitDateSelectName = 'visitDate'
  const commentInputName = 'comment'

  return (
    <PageWrap>
      <SectionTitle>Забронировать столик</SectionTitle>
      <Card>
        <Stepper active={1} />
        <FormHeading>Параметры бронирования</FormHeading>
        <form className="vstack gap-3" onSubmit={handleFormSubmit}>
          <div>
            <Label htmlFor={guestsNumSelectName}>Количество гостей</Label>
            <Select
              required
              id={guestsNumSelectName}
              value={guestsNum}
              onChange={handleGuestsNumSelect}
            >
              <option value={1}>1 гость</option>
              <option value={2}>2 гостя</option>
              <option value={3}>3 гостя</option>
              <option value={4}>4 гостя</option>
              <option value={5}>5 гостей</option>
              <option value={6}>6 гостей</option>
            </Select>
          </div>
          <div>
            <Label htmlFor={seatingAreaSelectName}>Зона рассадки</Label>
            <Select
              required
              id={seatingAreaSelectName}
              value={seatingArea.name}
              onChange={handleSeatingAreaSelect}
            >
              {seatingAreas.map(area =>
                <option key={area.name} value={area.name}>
                  {`${getSeatingAreaText(area)} (${area.openTime}-${area.closeTime})`}
                </option>
              )}
            </Select>
          </div>
          <div>
            <Label htmlFor={visitDateSelectName}>Дата визита</Label>
            <Input
              required
              id={visitDateSelectName}
              type="date"
              value={visitDate}
              min={minVisitDate}
              onChange={handleVisitDateSelect} />
          </div>
          <div>
            <Label htmlFor={commentInputName}>Комментарий (необязательно)</Label>
            <Textarea
              id={commentInputName}
              placeholder="Аллергии, особые пожелания..."
              value={comment}
              onChange={handleCommentInput}
            />
          </div>
          <div className="d-flex justify-content-between">
            <Btn variant="outline" onClick={handlePrevButtonClick}>← Назад</Btn>
            <Btn type='submit'>Далее →</Btn>
          </div>
        </form>
      </Card>
    </PageWrap>
  )
}

export default BookingParamsForm