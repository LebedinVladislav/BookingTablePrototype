import { useState } from 'react'
import { freeIntervals } from '../data.js'
import PhoneNumber from '../utils/PhoneNumber.js'
import {
  Badge,
  Btn,
  Card,
  Divider,
  Input,
  Label,
  PageWrap,
  Row,
  SectionTitle,
  Select,
  Stepper,
  Textarea,
  FormHeading,
  Actions
} from '../ui.jsx'



const ContactDataForm = ({
  contactData,
  handleNameInput,
  handlePhoneNumberInput,
  handleFormSubmit
}) => {

  const nameInputName = 'name'
  const phoneNumberInputName = 'phoneNumber'


  return (
    <PageWrap>
      <SectionTitle>Забронировать столик</SectionTitle>
      <Card>
        <Stepper active={0} />
        <FormHeading>Контактные данные</FormHeading>
        <form className="vstack gap-3" onSubmit={handleFormSubmit}>
          <div>
            <Label htmlFor={nameInputName}>Имя Фамилия</Label>
            <Input
              id={nameInputName}
              name={nameInputName}
              required
              placeholder="Сильвестр Андреевич"
              value={contactData.name}
              onChange={handleNameInput}
            />
          </div>
          <div>
            <Label htmlFor={phoneNumberInputName}>Номер телефона</Label>
            <Input
              id={phoneNumberInputName}
              name={phoneNumberInputName}
              required
              placeholder="+7 (999) 123-45-67"
              type="tel"
              value={contactData.phoneNumber}
              onChange={handlePhoneNumberInput}
              minLength={'+7 (999) 123-45-67'.length}
              maxLength={'+7 (999) 123-45-67'.length}
            />
          </div>
          <div className="d-flex justify-content-end">
            <Btn type='submit'>Далее →</Btn>
          </div>
        </form>
      </Card>
    </PageWrap>
  )
}

export default ContactDataForm