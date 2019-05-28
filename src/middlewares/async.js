export default function async ({ dispatch }) {
  return function (next) {
    return async function (action) {
      const { payload } = action
      if (payload && payload instanceof Promise) {
        const data = await payload
        const updatedAction = { ...action, payload: data }
        return dispatch(updatedAction)
      }
      return next(action)
    }
  }
}
