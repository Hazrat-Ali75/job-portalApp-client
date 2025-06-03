export const myPostedJobPromise = email => {
    return fetch(`https://job-portal-app-server-hazel.vercel.app/jobs?email=${email}`).then(res =>
      res.json()
    )
  }