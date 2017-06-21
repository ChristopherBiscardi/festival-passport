import XLSX from "xlsx";
import fs from 'fs';
const workbook = XLSX.readFile("Festival Passport 2017.xlsx");
import { format } from "date-fns";

const JSON = XLSX.utils
  .sheet_to_json(workbook.Sheets[workbook.SheetNames[0]])
  .map(v => ({
    ...v,
    "Start Date": normalizeDate(v["Start Date"]),
    "End Date": normalizeDate(v["End Date"])
  }));

const csv = XLSX.utils.sheet_to_csv(XLSX.utils.json_to_sheet(JSON));

fs.writeFileSync('festival-pass.csv', csv);

function normalizeDate(sheetDate) {
  if (sheetDate) {
    const dayMonthDate = sheetDate.split(" ").splice(1, Infinity).join(" ");
    const str = `${dayMonthDate}, 2017`;
    return format(new Date(str), "MM/DD/YYYY");
  } else {
    return undefined;
  }
}
