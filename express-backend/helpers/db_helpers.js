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




  //---------------------------addresses-------------------------------

  //get address by user id




  //---------------------------removal requests-------------------------------
  



  // get requests for by user id

  return {
    getUsers,
    getSnowRemovers,
    getUser
  }

}