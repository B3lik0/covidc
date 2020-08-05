import Vue from "vue";
import axios from "axios";
import VueAxios from "vue-axios";
Vue.use(VueAxios, axios);

// export default async () => {
//   const Api = await axios.create("http://localhost:8081");
//   if (Api) {
//     return Api;
//   } else {
//     console.log(Api)
//   }
// };


export default ()=>{
    return axios.create({
        baseURL: 'http://localhost:8081'
    })
}