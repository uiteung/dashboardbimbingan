import { addInner, setInner, onClick } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { table } from "../template/html.js";

export let databimbingansemester = {
  tahun_id: parseInt("20222"),
  tipe_bimbingan: "ta",
};

export let token = getCookie("login");

export const url = "https://bimit-be.ulbi.ac.id/api/v1/get_all_bimbingan";

const userTable = document.getElementById('userTable');
const pageInfo = document.getElementById('pageInfo');

let currentPage = 1;
let rowsPerPage = 10;
let maxPage;

export function AmbilResponse(result) {
  console.log(result.data);

  function isitabelbimbingan(jsonParse) {
    let row = '';
    userTable.innerHTML = '';
    const start = (currentPage - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const paginatedData = jsonParse.slice(start, end);

    paginatedData.forEach((data) => {
      row = table.replace("#pembimbing1#", data.pembimbing1)
        .replace("#pembimbing2#", data.pembimbing2)
        .replace("#tahun_id#", tahunID)
        .replace("#judul#", judulPendek)
        .replace("#tipe_bimbingan#", tipeBimbingan)
        .replace("#partner#", partnernull)
        .replace("#link_gd#", data.link_gd)
        .replace("#topik#", topikPendek)
        .replace("#abstrak#", abstrakPendek);
      addInner("userTable", row);
    });

    maxPage = Math.ceil(jsonParse.length / rowsPerPage);

    const startRow = ((currentPage - 1) * rowsPerPage) + 1;
    const endRow = Math.min(currentPage * rowsPerPage, jsonParse.length);
    const totalRows = jsonParse.length;
    const pageInfoText = `Showing ${startRow} to ${endRow} of ${totalRows} results`;
    setInner(pageInfo, pageInfoText);
  }

  isitabelbimbingan(result.data);

  const prevBtn = document.getElementById('prevBtn');
  const nextBtn = document.getElementById('nextBtn');

  onClick("prevBtn", () => {
    if (currentPage > 1) {
      currentPage--;
      isitabelbimbingan(result.data);
    }
  });

  onClick("nextBtn", () => {
    if (currentPage < maxPage) {
      currentPage++;
      isitabelbimbingan(result.data);
    }
  });
}
