import {
  Btn,
} from '../ui.jsx'
import { getSeatingAreaText, ISOStringToDate } from '../utils/utils.js'



const BookingSuccessModal = ({
  bookingParams,
  handleBackButtonClick
}) => {

  const localeOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }

  const guestsNum = bookingParams.guestsNum
  const seatingArea = getSeatingAreaText(bookingParams.seatingArea)
  const visitDate = ISOStringToDate(bookingParams.visitDate).toLocaleDateString('ru', localeOptions)
  
  return (
    <>
      <div className="modal-backdrop show" />
      <div className="modal show d-block" tabIndex="-1" role="dialog" aria-modal="true" aria-labelledby="success-title">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content text-center shadow">
            <div className="modal-body p-5">
              <div className="success-mark mx-auto mb-3" aria-hidden="true">Готово</div>
              <h2 id="success-title" className="h5 fw-bold mb-3">Бронь подтверждена!</h2>
              <p className="text-secondary mb-4">
                <strong>{`${seatingArea}, ${visitDate}, TODO`}</strong> 
              </p>
              <Btn onClick={handleBackButtonClick}>На главную страницу</Btn>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BookingSuccessModal