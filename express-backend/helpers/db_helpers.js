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




  return {
    getUsers,
    getSnowRemovers,
    getUser,
    getRemover,
    getAddresses,
    getAddressByUserId,
    getRequests,
    getRequestByUserId
  }

}
