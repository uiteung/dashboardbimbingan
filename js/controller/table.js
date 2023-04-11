import { addInner, setInner, onClick  } from "https://jscroot.github.io/element/croot.js";
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
              let tahunID = data.tahun_id === "20222" ? "Tahun Ajaran Genap 2022/2023" : data.tahun_id;
              let partnernull = data.partner === "0" ? "-" : data.partner;
              let tipeBimbingan = data.tipe_bimbingan === "ta" ? "Tugas Akhir" : data.tipe_bimbingan;
              let judulPendek = data.judul.substring(0, 10);
              let topikPendek = data.topik.substring(0, 10);   
              let abstrakPendek = data.abstrak.substring(0, 10);   
     
              row = table.replace("#pembimbing1#", data.pembimbing1)
                .replace("#pembimbing2#", data.pembimbing2)
                .replace("#tahun_id#", tahunID)
                .replace("#judul#", judulPendek)
                .replace("#tipe_bimbingan#", tipeBimbingan)
                .replace("#partner#", partnernull)
                .replace("#link_gd#", data.link_gd)
                .replace("#topik#", topikPendek)
                .replace("#abstrak#", abstrakPendek);
              setInner("userTable", row);
            });
          }    
        isitabelbimbingan(result.data);
       
  
  }