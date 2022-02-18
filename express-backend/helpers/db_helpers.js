
module.exports = (db) => {


  //----------------------------users---------------------------------------

  //get all users
  const getUsers = () => {

    const query = {
      text: 'SELECT * FROM users'
    }

    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err)
  }

    //get single user by user id
    const getUser = (userId) => {

      const query = {
        text: 'SELECT * FROM users WHERE id = $1',
        values: [userId]
      }
  
      return db
        .query(query)
        .then(result => result.rows)
        .catch(err => err)
    }

  //---------------------------snow removers-------------------------------

  //get all snow removers
  const getSnowRemovers = () => {

    const query = {
      text: 'SELECT * FROM snow_removers'
    }

    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err)
  }

      //get single snow remover by user id
      const getRemover = (removerId) => {

        const query = {
          text: 'SELECT * FROM snow_removers WHERE id = $1',
          values: [removerId]
        }
    
        return db
          .query(query)
          .then(result => result.rows)
          .catch(err => err)
      }
  


  //---------------------------addresses-------------------------------

  //get all addresses
  const getAddresses = () => {

    const query = {
      text: 'SELECT * FROM addresses'
    }

    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err)
  }


  //get address by user id
  const getAddressByUserId = (userId) => {

    const query = {
      text: 'SELECT * FROM addresses WHERE user_id = $1',
      values: [userId]
    }

    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err)
  }

  //add new address
  const addAddress = (address) => {

    const query = {
      text: 'INSERT INTO addresses (title, lat, lng, user_id) VALUES ($1, $2, $3, $4) RETURNING *;',
      values: [address.title, address.lat, address.lng, address.user_id]
    }

    return db
      .query(query)
      .then(results => results.rows)
      .catch(err => err)
  }



  //---------------------------removal requests-------------------------------
  
  //get all removal requests

  const getRequests = () => {

    const query = {
      text: 'SELECT * FROM removal_requests'
    }

    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err)
  }

  //get completed requests
  const getCompletedRequestsByUserId = (userId) => {

    const query = {
      text: 'SELECT * FROM removal_requests WHERE user_id = $1 AND completed_at IS NOT NULL',
      values: [userId]
    }

    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err)
  }

  //get requests where started_at is null
  const getUnstartedRequests = () => {

    const query = {
      text: 'SELECT * FROM removal_requests WHERE started_at IS NULL',
    }

    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err)
  }

  //update started at time for request
  const updateStartedAt = (requestId) => {
    const query = {
      text: 'UPDATE removal_requests SET started_at = NOW() WHERE id= $1;',
      values: [requestId]
    }
    return db
    .query(query)
    .then(result => result.rows)
    .catch(err => err)
  }

  //update started at time for request
  const updateCompletedAt = (requestId) => {
    const query = {
      text: 'UPDATE removal_requests SET completed_at = NOW() WHERE id= $1;',
      values: [requestId]
    }

    return db
    .query(query)
    .then(result => result.rows)
    .catch(err => err)
  }


  //get removal request by user id
  const getRequestByUserId = (userId) => {

    const query = {
      text: 'SELECT * FROM removal_requests WHERE user_id = $1',
      values: [userId]
    }

    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err)
  }

  //get request by request id
  const getRequestById = (requestId) => {
    const query = {
      text: 'SELECT * FROM removal_requests WHERE id = $1',
      values: [requestId]
    }
    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err)
  }
  

  //takes in request object and adds to request table
  const addRequest = (request) => {

    const query = {
      text: 'INSERT INTO removal_requests (created_at, started_at, completed_at, users_email, total_cents, size, note, user_id, snow_remover_id, address_id) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *;',
      values: [request.created_at, request.started_at, request.completed_at, request.users_email, request.total_cents, request.size, request.note, request.user_id, request.snow_remover_id, request.address_id]
    }

    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err)
  }

  return {
    getUsers,
    getSnowRemovers,
    getUser,
    getRemover,
    getAddresses,
    getAddressByUserId,
    getRequests,
    getCompletedRequestsByUserId,
    getUnstartedRequests,
    getRequestByUserId,
    getRequestById,
    updateStartedAt,
    updateCompletedAt,
    addRequest,
    addAddress
  }
}
