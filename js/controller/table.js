import { addInner } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { table } from "../template/html.js";

export let databimbingansemester = {
    tahun_id: parseInt("20222"),
    tipe_bimbingan: "ta",
};
export let token = getCookie("login");

export const url = "https://bimit-be.ulbi.ac.id/api/v1/get_all_bimbingan";

export function AmbilResponse(result) {
        
    console.log(result.data);
   
    
    function isitabelbimbingan(jsonParse) {
      let row = '';
        jsonParse.forEach((data) => {
          let tahunID = data.tahun_id === "20222" ? "Tahun Ajaran Genap 2023/2022" : data.tahun_id;
            let partnernull = data.partner === "0" ? "-" : data.partner;
            let tipeBimbingan = data.tahun_id === "ta" ? "Tugas Akhir" : data.tahun_id;
            let judulPendek = data.judul.substring(0, 10);
            let topikPendek = data.topik.substring(0, 10);   
            let abstrakPendek = data.abstrak.substring(0, 10);   
   
            row = table.replace("#pembimbing1#", data.pembimbing1)
              .replace("#pembimbing2#", data.pembimbing2)
              .replace("#tahun_id#", data.tahun_id)
              .replace("#judul#", judulPendek)
              .replace("#tipe_bimbingan#", tipeBimbingan)
              .replace("#partner#", data.partner)
              .replace("#link_gd#", data.link_gd)
              .replace("#topik#", data.topikPendek)
              .replace("#abstrak#", data.abstrakPendek);
            addInner("userTable", row);
          });
        }    
      isitabelbimbingan(result.data);


}
