module.exports = (db) => {

  //get all users from users table
  const getUsers = () => {

    const query = {
      text: 'SELECT * FROM users'

    }

    return db
      .query(query)
      .then(result => result.rows)
      .catch(err => err)

  }

  return {
    getUsers
  }

}