import { get, postWithToken } from "https://jscroot.github.io/api/croot.js";
import { setInner, addInner } from "https://jscroot.github.io/element/croot.js";

const url = "https://bimit-be.ulbi.ac.id/api/v1/get_bimbingan";


const data = {
  tahun_id: 20222,
  tipe_bimbingan: 'ta'
};
function showData(jsonParse) {
    let stringtable = '';
    jsonParse.data.forEach((user, index) => {
      stringtable += `
        <tr class="${index % 2 === 0 ? "bg-gray-50" : ""} text-xs">
          <td class="pl-6 py-4">${user.id}</td>
          <td class="pl-6 py-4">${user.email}</td>
          <td class="pl-6 py-4">${user.first_name}</td>
          <td class="pl-6 py-4">${user.last_name}</td>
          <td class="pl-6 py-4"></td>
        </tr>
      `;
    });
  
    setInner("userTable", stringtable);
  }

  function getToken() {
    const postData = {
      tahun_id: "20222",
      tipe_bimbingan: "ta"
    };
    
    postWithToken(`${apiUrl}/get_token`, postData, (response) => {
      const token = response.token;
      get(`${apiUrl}/get_bimbingan`, (data) => {
        showData(data);
      }, token);
    });
  }
  function AmbilResponse(result) {
    setInner("alert", result.status);
  }
  
  getToken();
