module.exports = (db) => {

  //get all users from users tabls
  const getUsers = () => {

    const query = {
      text: 'SELECT * FROM users'
    }

    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err)
  }



  const getSnowRemovers = () => {

    const query = {
      text: 'SELECT * FROM snow_removers'
    }

    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err)
  }


  return {
    getUsers,
    getSnowRemovers
  }

}