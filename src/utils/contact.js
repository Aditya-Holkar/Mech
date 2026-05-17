export const EMAIL = 'niranjanholkar4545@gmail.com'
export const PHONE = '9527706993'

const emailSubject = encodeURIComponent('Enquiry — Product Design Engineering Services')
const emailBody = encodeURIComponent(
  `Hi Niranjan,\n\nI came across your portfolio and would like to discuss a potential opportunity.\n\nLooking forward to your response.\n\nBest regards`
)

export const mailtoHref = `mailto:${EMAIL}?subject=${emailSubject}&body=${emailBody}`
export const waHref = `https://wa.me/${PHONE}?text=${encodeURIComponent('Hi Niranjan, I saw your portfolio and would like to connect.')}`
export const linkedinHref = 'https://www.linkedin.com/in/niranjan-anil-holkar-6a4978207/'
