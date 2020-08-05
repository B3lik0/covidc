import Api from '../services/Api'

export default {
  async busqueda () {
    const data = await Api().get('/buscar')
    return data
  }
}
