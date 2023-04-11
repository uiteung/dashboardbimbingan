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
        jsonParse.forEach((value) => {
        row = table.replace("#pembimbing1#", value.data.pembimbing1)
        .replace("#pembimbing2#", value.data.pembimbing2)
        .replace("#tahun_id#", value.data.tahun_id)
        .replace("#judul#", value.data.judul)
        .replace("#tipe_bimbingan#", value.data.tipe_bimbingan)
        .replace("#partner#", value.data.partner)
        .replace("#topik#", value.data.topik)
        .replace("#abstrak#", value.data.abstrak);
        addInner("userTable",row);
        });
    }
   
}

