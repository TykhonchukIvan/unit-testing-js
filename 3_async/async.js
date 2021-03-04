const axios = require('axios')
const wretch = require('wretch')

class Ajax {
  static echo(data) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (data) {
          resolve(data)
        } else {
          reject(new Error('Error'))
        }
      }, 150)
    })
  }

  static async getAxios() {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      return response.data
    } catch (e) {
      console.log(e)
    }
  }

  static async getWretch() {
    try {
      const response = await wretch('https://jsonplaceholder.typicode.com/todos/1').get().json()
      return response
    } catch (e) {
      console.log(e)
    }
  }

  static async getFetch() {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(response => response.json())
        .then(data => data.data)
      return response;
    } catch (e) {
      console.log(e)
    }
  }

}

module.exports = Ajax