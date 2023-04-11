
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
// import { stringtable} from "./template/html.js";

export let databimbingansemester = {
    tahun_id: parseInt("20222"),
    tipe_bimbingan: "ta",
};
export let token = getCookie("login");

export const url = "https://bimit-be.ulbi.ac.id/api/v1/get_all_bimbingan";

export function AmbilResponse(result) {
        
    console.log(result.data);

    // function tablebimbingan(result){
    //     isitabelbimbingan(result);
    // }
 
    // function isitabelbimbingan(jsonParse){
    //     let row = '';
    //     jsonParse.forEach((element) => {
    //     row = stringtable.replace("#pembimbing1#", value.dapembimbing1)
    //     .replace("#pembimbing2#", value.pembimbing2)
    //     .replace("#tahun_id#", value.tahun_id)
    //     .replace("#judul#", value.judul)
    //     .replace("#tipe_bimbingan#", value.tipe_bimbingan)
    //     .replace("#partner#", value.partner)
    //     .replace("#topik#", value.topik)
    //     .replace("#abstrak#", value.abstrak);
    //     addChild("userTable",content);
    //     addInner("userTable",row);
    //     });
    // }
   
}
