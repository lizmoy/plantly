const baseUrl = 'http://localhost:3000'

export const loginUser = (loginData) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify(loginData),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(`${baseUrl}/auth/login`, opts)
    .then(resp => resp.json())
}

export const registerUser = (registerData) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify({ user: registerData }),
    headers: {
      'Content-Type': 'application/json'
    }
  };

  return fetch(`${baseUrl}/users/`, opts)
    .then(resp => resp.json())
}

export const createPlant = (data) => {
  const opts = {
    method: 'POST',
    body: JSON.stringify({ plant: data }),
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${localStorage.getItem('jwt')}`
    }
  }
  return fetch(`${baseUrl}/plants`, opts)
    .then(resp => resp.json())
    .catch( e => e )
}

export const showUserPlants = (data) => {
    const opts = {
        method: 'GET',
        body: JSON.stringify({ plant: data }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        }
    }
    return fetch(`${baseUrl}/plants`, opts)
    .then(resp => resp.json())
}

export const showUserPlant = (id) => {
    return fetch(`${baseUrl}/plants/${id}`)
    .then(resp => resp.json())
}

export const updatePlant = (id, data) => {
    const opts = {
        method: 'POST',
        body: JSON.stringify({ plant: data }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        }
      }
      return fetch(`${baseUrl}/plants/${id}`, opts)
        .then(resp => resp.json())
        .catch( e => e )
}

export const destroyPlant = (id) => {
    const opts = {
        method: 'DELETE',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        }
    }

    return fetch(`${baseUrl}/plants/${id}`, opts)
        .catch( e => e)
}

export const createLog = (plant_id, data) => {
    const opts = {
        method: 'POST',
        body: JSON.stringify({ log: data }),
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        }
    }
    return fetch(`${baseUrl}/plants/${plant_id}/logs`, opts)
        .then(resp => resp.json())
        .catch( e => e )
}

export const showUserLogs = (plant_id) => {
    return fetch(`${baseUrl}/plants/:${plant_id}/logs`)
    .then(resp => resp.json())
}

export const showPlantLog = (plant_id, id) => {
    return fetch(`${baseUrl}/plants/:${plant_id}/logs/:${id}`)
    .then(resp => resp.json())
}


