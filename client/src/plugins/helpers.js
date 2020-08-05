var moment = require("moment");

var helpers = {
    fechaLocal: (fecha) => {
        nuevaFecha = moment(fecha).format("YYYY/MM/DD HH:mm:ss")
        return nuevaFecha
    }
}
      
module.exports = helpers;