import { addInner } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { table} from "./template/html.js";

export let databimbingansemester = {
    tahun_id: parseInt("20222"),
    tipe_bimbingan: "ta",
};
export let token = getCookie("login");

export const url = "https://bimit-be.ulbi.ac.id/api/v1/get_all_bimbingan";

export function AmbilResponse(result) {
        
    console.log(result.data);
   
    function isitabelbimbingan(jsonParse){
        let row = '';
        jsonParse.forEach((result) => {
        row = table.replace("#pembimbing1#", result.data.pembimbing1)
        .replace("#pembimbing2#", result.data.pembimbing2)
        .replace("#tahun_id#", result.data.tahun_id)
        .replace("#judul#", result.data.judul)
        .replace("#tipe_bimbingan#", result.data.tipe_bimbingan)
        .replace("#partner#", result.data.partner)
        .replace("#topik#", result.data.topik)
        .replace("#abstrak#", result.data.abstrak);
        addInner("userTable",row);
        });
    }
   
}

