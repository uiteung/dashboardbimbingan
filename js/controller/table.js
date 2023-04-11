import { addInner, setInner, onClick } from "https://jscroot.github.io/element/croot.js";
import { getCookie } from "https://jscroot.github.io/cookie/croot.js";
import { table } from "../template/html.js";

export let databimbingansemester = {
  tahun_id: parseInt("20222"),
  tipe_bimbingan: "ta",
};
export let token = getCookie("login");

export const url = "https://bimit-be.ulbi.ac.id/api/v1/get_all_bimbingan";

const perPage = 10;
let currentPage = 1;
let totalPage = 0;
let data = [];

export function AmbilResponse(result) {
  data = result.data;
  totalPage = Math.ceil(data.length / perPage);
  showData();
}

function showData() {
  let start = (currentPage - 1) * perPage;
  let end = start + perPage;
  let pageData = data.slice(start, end);

  setInner("userTable", "");

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
      addInner("userTable", row);
    });
  }

  isitabelbimbingan(pageData);
  showPagination();
}

function showPagination() {
  setInner("pagination", "");

  let prevBtn = '<button onclick="prevPage()">Prev</button>';
  let nextBtn = '<button onclick="nextPage()">Next</button>';
  let pageBtns = '';

  for (let i = 1; i <= totalPage; i++) {
    pageBtns += `<button ${i === currentPage ? "disabled" : ""} onclick="gotoPage(${i})">${i}</button>`;
  }

  addInner("pagination", prevBtn + pageBtns + nextBtn);
}

function prevPage() {
  if (currentPage > 1) {
    currentPage--;
    showData();
  }
}

function nextPage() {
  if (currentPage < totalPage) {
    currentPage++;
    showData();
  }
}

function gotoPage(page) {
  currentPage = page;
  showData();
}