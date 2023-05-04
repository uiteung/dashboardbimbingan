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
    
    if (!token) {
      window.location.replace = 'https://iteung.ulbi.ac.id';
      return; 
    }
   
    function isitabelbimbingan(jsonParse) {
        let row = '';
        const pembimbingMapping = {
          'NN056L': 'Cahyo Prianto, S.Pd., M.T.,CDSP, SFPC',
          'TI126L': 'M. Yusril Helmi Setyawan, S.Kom., M.Kom.,SFPC',
          'TI122L': 'Mohamad Nurkamal Fauzan, S.T., M.T., SFPC',
          'NN222L': 'Nisa Hanum Harani, S.Kom., M.T.,CDSP, SFPC',
          'NN225L': 'Noviana Riza, S.Si., M.T., SFPC',
          'LB053L': 'Rd. Nuraini Siti Fatonah, S.S., M.Hum., SFPC',
          'NN257L': 'Rolly Maulana Awangga,S.T.,MT.,CAIP, SFPC',
          'NN258L': 'Roni Andarsyah, S.T., M.Kom., SFPC',
          'TI117L': 'Roni Habibi, S.Kom., M.T., SFPC',
          'TI125L': 'Syafrial Fachri Pane,ST. MTI,EBDP.CDSP,SFPC',
          'TI041L': 'Woro Isti Rahayu, S.T., M.T., SFPC',
        };
          jsonParse.forEach((data) => {
              let tahunID = data.tahun_id === "20222" ? "Tahun Ajaran Genap 2022/2023" : data.tahun_id;
              let partnernull = data.partner === "0" ? "-" : data.partner;
              let tipeBimbingan = data.tipe_bimbingan === "ta" ? "Tugas Akhir" : data.tipe_bimbingan;
              let judulPendek = data.judul.substring(0, 10);
              let topikPendek = data.topik.substring(0, 10);   
              let abstrakPendek = data.abstrak.substring(0, 10);   
              const pembimbing1 = pembimbingMapping[data.pembimbing1] || data.pembimbing1;
              const pembimbing2 = pembimbingMapping[data.pembimbing2] || data.pembimbing2;
              row = table.replace("#npm#", data.npm)
                .replace("#pembimbing1#", pembimbing1)
                .replace("#pembimbing2#", pembimbing2)
                .replace("#tahun_id#", tahunID)
                .replace("#judul#", judulPendek)
                .replace("#tipe_bimbingan#", tipeBimbingan)
                .replace("#partner#", partnernull)
                .replace("#link_gd#", data.link_gd)
                .replace("#topik#", topikPendek)
                .replace("#abstrak#", abstrakPendek);
              addInner("userTable", row);
            });
          }    
        isitabelbimbingan(result.data);
       
  
  }