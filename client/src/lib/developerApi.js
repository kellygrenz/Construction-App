const ajaxRequest = (uri, method, body) => {
  const headers = new Headers({
    'Content-Type': 'application/json'
  })

  const options = {
    headers: headers,
    method: method,
    body: JSON.stringify(body),
    credentials: 'include'
  }

  return fetch(`/api/${uri}`, options)
    .then(handleErrors)
    .then(response => response.json())
    .then(json => json.data)
}

const handleErrors = response => {
  if (!response.ok) {
    console.log('an error was found')
    return response.json()
      .then(({message, data}) => {
        const err = Error(message)
        Object.assign(err, data)
        err.status = response.status
        throw err
      })
  }
  return response
}

export const signupDeveloper = (developer) => ajaxRequest('developer-sign-up', 'POST', developer)

export const loginDeveloper = (developerEmail, developerPassword) => ajaxRequest('developer-login', 'POST', {developerEmail, developerPassword})

export const getDeveloper = (developer) => ajaxRequest(`developers/${developer}`, 'GET')

export const logoutDeveloper = () => ajaxRequest('developer-logout', 'GET')
