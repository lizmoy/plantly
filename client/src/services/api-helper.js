const baseUrl = 'https://boiling-sands-66126.herokuapp.com/'

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

  return fetch(`${baseUrl}/users`, opts)
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

export const showUserPlants = (id) => {
    console.log('GETTING PLANTS!!!!!', id)
    const opts = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        }
    }
    return fetch(`${baseUrl}/users/${id}`, opts)
    .then(resp => resp.json())
}

export const showUserPlant = (id) => {
    const opts = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        }
    }
    return fetch(`${baseUrl}/plants/${id}`, opts)
    .then(resp => resp.json())
}

export const updatePlant = (id, data) => {
    const opts = {
        method: 'PUT',
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
    console.log(`deleting from endpoint: ${baseUrl}/plants/${id}`)
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
    const opts = {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${localStorage.getItem('jwt')}`
        }
    }
    return fetch(`${baseUrl}/plants/:${plant_id}/logs`, opts)
    .then(resp => resp.json())
}

export const showPlantLog = (plant_id, id) => {
    return fetch(`${baseUrl}/plants/:${plant_id}/logs/:${id}`)
    .then(resp => resp.json())
}


