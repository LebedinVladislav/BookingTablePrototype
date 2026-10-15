import { Topbar } from '../ui.jsx'
import ContactInfoForm from './ContactInfoForm.jsx'
import BookingParamsForm from './BookingParamsForm.jsx'
import VisitTimeForm from './VisitTimeForm.jsx'
import BookingConfirmForm from './BookingConfirmForm.jsx'
import BookingSuccessModal from './BookingSuccess.jsx'
import PhoneNumber from '../utils/PhoneNumber.js'
import { seatingAreas } from '../data.js'
import { dateToISOString } from '../utils/utils.js'
import useLocalStorage from '../utils/useLocalStorage.js'
import { useState } from 'react'



const Booking = () => {

  const [step, setStep] = useLocalStorage('step', 1)
  const [contactData, setContactData] = useLocalStorage('contactData',{
    name: '', 
    phoneNumber: ''
  })
  const minVisitDate = dateToISOString(new Date())
  const [bookingParams, setBookingParams] = useLocalStorage('bookingParams', {
    guestsNum: 1,
    seatingArea: seatingAreas[0],
    visitDate: minVisitDate,
    comment: ''
  })
  const [visitTime, setVisitTime] = useLocalStorage('visitTime', '')
  const [isSuccess, setIsSuccess] = useState(false)


  const goToNextStep = (e, nextStep) => {
    e.preventDefault()
    setStep(nextStep)
  }

  const goToPrevStep = (prevStep) => {
    setStep(prevStep)
  }

  const handleNameInput = (e) => {
    setContactData({
      ...contactData, 
      name: e.target.value
    })
  }

  const handlePhoneNumberInput = (e) => {
    const phoneNumber = new PhoneNumber(e.target.value)
    setContactData({
      ...contactData, 
      phoneNumber: phoneNumber.value
    })
  }

  const handleGuestsNumSelect = (e) => {
    setBookingParams({
      ...bookingParams,
      guestsNum: e.target.value
    })
  }

  const handleSeatingAreaSelect = (e) => {
    setBookingParams({
      ...bookingParams,
      seatingArea: seatingAreas.find(area => area.name === e.target.value)
    })
  }

  const handleVisitDateSelect = (e) => {
    setBookingParams({
      ...bookingParams,
      visitDate: e.target.value
    })
  }

  const handleCommentInput = (e) => {
    setBookingParams({
      ...bookingParams,
      comment: e.target.value
    })
  }

  const handleVisitTimeInput = (e) => {
    setVisitTime(e.target.value)
  }  

  const onBookingConfirm = () => {
    // создание брони
    setIsSuccess(true)
  }

  const onCloseSuccessModal = () => {
    setIsSuccess(false)
    goToPrevStep(4)
  }

  return (
    <div className="app-shell">
      <Topbar phoneNumber={'9991234567'} />
      <main>
        {step === 1 && 
          <ContactInfoForm
            contactData={contactData}
            handleNameInput={handleNameInput}
            handlePhoneNumberInput={handlePhoneNumberInput}
            handleFormSubmit={(e) => goToNextStep(e, 2)}
          />
        }
        {step === 2 && 
          <BookingParamsForm
            bookingParams={bookingParams}
            minVisitDate={minVisitDate}
            handleGuestsNumSelect={handleGuestsNumSelect}
            handleSeatingAreaSelect={handleSeatingAreaSelect}
            handleVisitDateSelect={handleVisitDateSelect}
            handleCommentInput={handleCommentInput}
            handlePrevButtonClick={() => goToPrevStep(1)}
            handleFormSubmit={(e) => goToNextStep(e, 3)}
          />
        }
        {step === 3 && 
          <VisitTimeForm
            visitTime={visitTime}
            handleVisitTimeInput={handleVisitTimeInput}
            handlePrevButtonClick={() => goToPrevStep(2)}
            handleFormSubmit={(e) => goToNextStep(e, 4)}
          />
        }
        {step === 4 && 
          <BookingConfirmForm
            contactData={contactData}
            bookingParams={bookingParams}
            visitTime={visitTime}
            handlePrevButtonClick={() => goToPrevStep(3)}
            handleConfirmButtonClick={onBookingConfirm}
          />
        }
        {isSuccess &&
          <BookingSuccessModal 
            bookingParams={bookingParams}  
            handleBackButtonClick={onCloseSuccessModal}
          />
        }
      </main>
    </div>
  )
}

export default Booking