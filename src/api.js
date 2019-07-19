import axios from 'axios';

const apiUrlC = process.env.VUE_APP_API_URLC;

function buildurlC(path) {
    return `${ apiUrlC }${ path } `
}
let key = 'a0140ffded49c46524e80fbb89e1c6a737f32a236a1d4dcdd5c3760532db75ae';

export default {
      photosList(credentials, path) {

          let url = buildurlC(path);
          return axios.get(url+'page='+credentials.page+'&query='+credentials.query+'&client_id='+key,{}).then(res => res)

    },

    searchPhoto(credentials, path) {

        let url = buildurlC(path);

        return axios.get(url+'page='+credentials.page+'&query='+credentials.query+'&orientation='+credentials.orientation+'&client_id='+key,{}).then(res => res)
    }

}
