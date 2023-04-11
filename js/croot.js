import { get,postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner } from "https://jscroot.github.io/element/croot.js";

function postData(token) {
  let data = {
    tahun_id: "20222",
    tipe_bimbingan: "ta",
  };

  postWithToken("https://bimit-be.ulbi.ac.id/api/v1/get_all_bimbingan", data, token).then(() => {
    get("https://bimit-be.ulbi.ac.id/api/v1/get_all_bimbingan", token).then((response) => {
      response.json().then((jsonParse) => {
        let stringtable = '';
        jsonParse.data.forEach((user, index) => {
          stringtable += `
            <tr class="${index % 2 === 0 ? "bg-gray-50" : ""} text-xs">
              <td class="pl-6 py-4">${user.pembimbing1}</td>
              <td class="pl-6 py-4">${user.pembimbing2}</td>
              <td class="pl-6 py-4">${user.tahun_id}</td>
              <td class="pl-6 py-4">${user.judul}</td>
              <td class="pl-6 py-4">${user.tipe_bimbingan}</td>
              <td class="pl-6 py-4">${user.partner}</td>
              <td class="pl-6 py-4">${user.link_gd}</td>
              <td class="pl-6 py-4">${user.topik}</td>
              <td class="pl-6 py-4">${user.abstrak}</td>
            </tr>
          `;
        });

        setInner("userTable", stringtable);
      });
    });
  }).catch((error) => {
    console.log(error);
  });
}

function responseFunction(result) {
  setInner("alert", result.status);
}
