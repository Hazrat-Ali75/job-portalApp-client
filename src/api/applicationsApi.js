export const myApplicationPromise = email => {
    return fetch(`https://job-portal-app-server-hazel.vercel.app/applications?email=${email}`).then(res =>
      res.json()
    )
  }