class Http {

  get(url) {
    return
  }

  request(url) {
    return new Promise((resolve, reject) => {
      fetch(url)
        .then(response => response)
        .then(response => resolve(response.json()))
        .catch((error) => reject(error))
    })
  }
}