const Ajax = require('./async');
const wretch = require('wretch');
const axios = require('axios')

jest.mock('wretch')
jest.mock('axios')

describe('Ajax: echo', () => {
  test('should return value async', async () => {
    const result = await Ajax.echo('some data')
    expect(result).toBe('some data')
  })

  test('should return value with promise', () => {
    return Ajax.echo('some data').then(data => {
      expect(data).toBe('some data')
    })
  })

  test('should catch error with promise', () => {
    return Ajax.echo().catch(err => {
      expect(err).toBeInstanceOf(Error)
    })
  })

  test('should catch error with async', async () => {
    try {
      await Ajax.echo()
    } catch (e) {
      expect(e.message).toBe('Error')
    }
  })

})

describe('Ajax: Get axios', () => {

  let response;
  let todos;

  beforeEach(() => {
    todos = [{ id: 1, title: '321asd' }]
    response = { data: { todos } }
  })

  test('should return data from backend', () => {
    axios.get.mockReturnValue(response)
    return Ajax.getAxios().then(data => {
      expect(data.todos).toEqual(todos)
    })
  })

})

describe('Ajax: wretch', () => {

  let response;
  let todos;

  beforeEach(() => {
    todos = [{ id: 1, title: '321asd' }]
    response = { data: { todos } }
  })

  test('should return data from backend two test ', () => {
    wretch.mockReturnValue(todos)
    return Ajax.getWretch().then(todos => {
      expect(todos).toEqual(todos)
    })
  })

})
