
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { stringtable } from "./template/html.js";
export let databimbingansemester = {
    tahun_id: parseInt("20222"),
    tipe_bimbingan: "ta",
};
export let token = getCookie("login");

export const url = "https://bimit-be.ulbi.ac.id/api/v1/get_all_bimbingan";

export function AmbilResponse(result) {
        
    console.log(result.data);
    get(url,tablebimbingan);

    function tablebimbingan(result){
        result.forEach(isitabelbimbingan);
    }
    function isitabelbimbingan(value){
        let content = stringtable.replace("#pembimbing1#", value.pembimbing1)
    }


}
