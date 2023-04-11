
export const rowsPerPage = 10;
export let currentPage = 1;
export function pagination(){
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;
    const rows = jsonParse.slice(start, end);
}
