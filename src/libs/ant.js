// ? FUNCS ANT LIBRARY COMPONENTS

import { jobStates } from '@/static/enums'

// rules for inputs validations
export const RULES_INPUT_ANT = {
  required: { required: true, message: 'Complete este campo' },
  email: {
    type: 'email',
    message: 'El correo no es válido!'
  },
  number: {
    type: 'number',
    message: 'Debe ser un número'
  },
  confirmPassword: [ // this need a 'dependency->password' atribute in component
    {
      required: true,
      message: 'Por favor, confirma tu contraseña!'
    },
    ({ getFieldValue }) => ({
      validator (_, value) {
        if (!value || getFieldValue('password') === value) {
          return Promise.resolve()
        }
        return Promise.reject(new Error('La contraseñas que escribió no coinciden!'))
      }
    })
  ]
}

// To select component,  filter options when typing
export const filterOption = (input, option) => (option?.label ?? '').toLowerCase().includes(input.toLowerCase())

// the colors are defined by ant colors tag
export const colorStatus = {
  [jobStates.closed]: 'red',
  [jobStates.inReview]: 'geekblue',
  [jobStates.published]: 'green'
  // [jobStates.pendingPublication]: '',
  // [jobStates.receivingApplications]: '',
}
