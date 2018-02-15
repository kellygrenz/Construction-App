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

export const signupAdmin = (admin) => ajaxRequest('admin-sign-up', 'POST', admin)

export const loginAdmin = (adminEmail, adminPassword) => ajaxRequest('admin-login', 'POST', {adminEmail, adminPassword})

export const getAdmin = (admin) => ajaxRequest(`admins/${admin}`, 'GET')

export const logoutAdmin = () => ajaxRequest('admin-logout', 'GET')
