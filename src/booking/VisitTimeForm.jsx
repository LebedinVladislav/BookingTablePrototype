import { useState } from 'react'
import { freeIntervals } from '../data.js'
import {
  Badge,
  Btn,
  Card,
  Input,
  Label,
  PageWrap,
  SectionTitle,
  Stepper,
  FormHeading,
} from '../ui.jsx'



const VisitTimeForm = ({ 
  visitTime,
  handleVisitTimeInput,
  handlePrevButtonClick,
  handleFormSubmit
 }) => {
  
  const visitTimeInputName = 'visitTime'

  return (
    <PageWrap>
      <SectionTitle>Забронировать столик</SectionTitle>
      <Card>
        <Stepper active={2} />
        <FormHeading>Выбор времени визита</FormHeading>
        <form className="vstack border rounded bg-body-tertiary p-3 gap-3" onSubmit={handleFormSubmit}>
          <div className="section-caption">Доступные для бронирования интервалы</div>
          <div className="vstack gap-2">
            {freeIntervals.map(interval => (
              <div key={interval.from} className="d-flex align-items-center gap-2 border rounded bg-white p-3">
                <span className="font-monospace fw-semibold text-success">{interval.from}</span>
                <span className="text-secondary">—</span>
                <span className="font-monospace fw-semibold text-success">{interval.to}</span>
                <Badge label="свободно" variant="success" />
              </div>
            ))}
          </div>
          <label htmlFor={visitTimeInputName} className="form-label small fw-semibold text-secondary m-0">
            Введите желаемое время начала визита
          </label>
          <div className="d-flex flex-column flex-sm-row align-items-sm-center gap-2">
            <Input
              id={visitTimeInputName}
              required
              type="time"
              value={visitTime}
              onChange={handleVisitTimeInput}
              className="time-input font-monospace"
            />
            <span className="small text-secondary">Укажите время из одного из доступных интервалов</span>
          </div>
          <div div className="d-flex justify-content-between pt-2">
            <Btn variant="outline" onClick={handlePrevButtonClick}>← Назад</Btn>
            <Btn type='submit'>Далее →</Btn>
          </div>
        </form>
      </Card>
    </PageWrap>
  )
}

export default VisitTimeForm