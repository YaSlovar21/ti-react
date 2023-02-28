const path = require('path');
const xlsx = require('xlsx');
const fs = require('fs');


const filePath = path.resolve(__dirname, "table-plast-uplot.xlsx");
console.log(filePath);

const workBook = xlsx.readFile(filePath);
console.log(workBook);


const sheetNames = workBook.SheetNames;
console.log(sheetNames); 

const dataPlast = xlsx.utils.sheet_to_json(workBook.Sheets['plasts']);
const dataUplot = xlsx.utils.sheet_to_json(workBook.Sheets['uplot']);


const pricesWithId = 
//    console.log(
        dataPlast.map((p) => { 
        return ['0000', '1234', '1004', '0230'].map((typePlast)=> {
            return ['H', 'L'].map((angel) => {
                return {
                    id: `${p.name}-${p.type}-${typePlast}-${angel}-${p.metall.split(' ').join('')}-${parseFloat(p.thinkness)*1000}`,
                    price: parseFloat(p.price * 2.5641025).toFixed(2) ,
                    alias: `Пластина ТИ${p.type} ${typePlast}${angel} ${p.metall.split(' ').join('')} ${parseFloat(p.thinkness)*1000}mm`,
                }
            })
        }).flat(); 
    }
).flat().concat(
    dataUplot.map((u) => { 
        return ['start', 'end', 'center'].map((whereUp) => {
            return {
                id: `${u.name}-${u.type}-${u.material.split('(')[0]}-${whereUp}`,
                price: parseFloat(u.price).toFixed(2),
                alias: `Уплотнение ТИ${u.type} ${u.material.split('(')[0]}${whereUp==='center' ? '' : ' ' + whereUp}`,
            }
        });
    }).flat()
);

console.log(pricesWithId);

fs.writeFileSync('output.txt', JSON.stringify(pricesWithId));