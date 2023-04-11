import { addInner } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { table} from "./template/html.js";

export let databimbingansemester = {
    tahun_id: parseInt("20222"),
    tipe_bimbingan: "ta",
};
export let token = getCookie("login");

export const url = "https://bimit-be.ulbi.ac.id/api/v1/get_all_bimbingan";
get(url,isitabelbimbingan);

export function AmbilResponse(result) {
        
    console.log(result.data);
   
    function isitabelbimbingan(jsonParse){
        let row = '';
        jsonParse.forEach((data) => {
            row = table.replace("#pembimbing1#", data.pembimbing1)
              .replace("#pembimbing2#", data.pembimbing2)
              .replace("#tahun_id#", data.tahun_id)
              .replace("#judul#", data.judul)
              .replace("#tipe_bimbingan#", data.tipe_bimbingan)
              .replace("#partner#", data.partner)
              .replace("#link_gd#", data.link_gd)
              .replace("#topik#", data.topik)
              .replace("#abstrak#", data.abstrak);
            addInner("userTable", row);
          });
        }    
        isitabelbimbingan(result.data);

}



