import tv4 from 'tv4'
import schema from 'middlewares/schema'

export default function stateValidate ({ getState }) {
  return function (next) {
    return function (action) {
      next(action)
      const result = tv4.validateMultiple(getState(), schema)
      const { errors, valid } = result
      if (!valid) {
        errors.forEach(err => console.warn(err.message))
      }
    }
  }
}
