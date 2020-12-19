export default function ({ $axios, params, redirect }) {
  const tokenC = params.token
  const rv = $axios.$get(`/auth/jwt/confirm/${tokenC}`).then((data) => {
    return data
  }).catch((_error) => {
    return redirect('/error-404')
  })
  return rv
}
