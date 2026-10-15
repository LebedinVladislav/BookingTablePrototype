import { bookingSteps, navigationItems } from './data.js'
import PhoneNumber from './utils/PhoneNumber.js'

export const Badge = ({ label, variant = 'secondary' }) => (
  <span className={`badge text-bg-${variant} fw-medium`}>{label}</span>
)

export const Card = ({ children, className = '' }) => (
  <section className={`card shadow-sm ${className}`}>
    <div className="card-body">{children}</div>
  </section>
)

export const Label = ({ children, htmlFor }) => (
  <label htmlFor={htmlFor} className="form-label small fw-semibold text-secondary mb-1">
    {children}
  </label>
)

export const Input = (props) => {
  return (
    <input
      {...props}
      className={`form-control ${props.className}`}
    />
  )
}

export const Select = (props) => {
  return (
    <select 
      {...props}
      className={'form-select ' + props.className}
    >
      {props.children}
    </select>
  )
}

export const Textarea = (props) => (
  <textarea
    {...props}
    className={'form-control ' + props.className}
  />
)

export const Btn = ({
  type = 'button',
  children,
  variant = 'primary',
  small,
  onClick,
  className = '',
}) => {
  const bootstrapVariant = variant === 'outline' ? 'outline-primary' : variant
  return (
    <button
      type={type}
      onClick={onClick}
      className={`btn btn-${bootstrapVariant} ${small ? 'btn-sm' : ''} ${className}`}
    >
      {children}
    </button>
  )
}

export const Divider = () => <hr className="my-4" />

export const SectionTitle = ({ children }) => (
  <h1 className="h4 fw-bold mb-4">{children}</h1>
)

export const Topbar = ({ phoneNumber }) => {
  return (
    <nav className="navbar navbar-dark bg-dark sticky-top px-3 py-2">
      <div className="container-fluid justify-content-between p-0 m-0">
        <span className="navbar-brand fs-10 fw-bold">Ресторан</span>
        <a className="navbar-phone-number" href={`tel:+7${phoneNumber}`}>{new PhoneNumber(phoneNumber).value}</a>
      </div>
    </nav>
  )
}

export const Stepper = ({ active }) => (
  <div className="booking-stepper mb-4" aria-label={`Шаг ${active + 1} из ${bookingSteps.length}`}>
    {bookingSteps.map((s, i) => (
      <div key={s} className={`booking-step ${i < active ? 'is-complete' : ''} ${i === active ? 'is-active' : ''}`}>
        <div className="booking-step-marker">
          <span className="booking-step-number">
            {i < active ? '✓' : i + 1}
          </span>
          <span className="booking-step-label">{s}</span>
        </div>
        {i < bookingSteps.length - 1 && <span className="booking-step-line" />}
      </div>
    ))}
  </div>
)

export const PageWrap = ({ children, wide = false, medium = false }) => (
  <div className="page-wrap py-5 px-3">
    <div className={`content-wrap ${wide ? 'content-wrap-wide' : ''} ${medium ? 'content-wrap-medium' : ''}`}>
      {children}
    </div>
  </div>
)

export const Row = ({ label, value }) => (
  <div className="detail-row border-bottom py-2">
    <span className="text-secondary small">{label}</span>
    <span className="small fw-medium">{value}</span>
  </div>
)

export const FormHeading = ({ children }) => <h2 className="h6 fw-semibold mb-3">{children}</h2>

export const Actions = ({ children, end = false }) => (
  <div className={`d-flex ${end ? 'justify-content-end' : 'justify-content-between'} gap-2`}>
    {children}
  </div>
)
