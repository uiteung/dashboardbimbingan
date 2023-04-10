import {postWithToken}from "https://jscroot.github.io/api/croot.js";
import { get } from "https://jscroot.github.io/api/croot.js";
import { setInner, addInner } from "https://jscroot.github.io/element/croot.js";

function response(jsonParse) {
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
  
  get("https://bimit-be.ulbi.ac.id/api/v1/get_bimbingan", response);