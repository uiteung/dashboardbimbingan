
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


    // function tablebimbingan(result){
    //     isitabelbimbingan(result);
    // }
 
    // function isitabelbimbingan(jsonParse){
    //     let row = '';
    //     jsonParse.forEach((element) => {
    //     row = table.replace("#pembimbing1#", value.dapembimbing1)
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

export  function populateTable(data) {
    let tableRows = "";
  
    data.forEach((item) => {
      const row = `
        <tr class="text-xs">
          <td class="pl-6 py-4">${item.pembimbing1}</td>
          <td class="pl-6 py-4">${item.pembimbing2}</td>
          <td class="pl-6 py-4">${item.tahun_id}</td>
          <td class="pl-6 py-4">${item.judul}</td>
          <td class="pl-6 py-4">${item.tipe_bimbingan}</td>
          <td class="pl-6 py-4">${item.partner}</td>
          <td class="pl-6 py-4">${item.link_gd}</td>
          <td class="pl-6 py-4">${item.topik}</td>
          <td class="pl-6 py-4">${item.abstrak}</td>
        </tr>
      `;
      tableRows += row;
    });
  
    tableContainer.innerHTML = table.replace("#data#",'userTable', tableRows);
  }
export function isitabelbimbingan(value){
    console.log(value)
}
