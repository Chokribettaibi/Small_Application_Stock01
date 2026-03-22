let tbodyInfinixSmart = document.getElementById('tbodyInfinixSmart');
console.log(tbodyInfinixSmart)
fetch('../../js/db.json').then(res => res.json()).then(data =>{
    console.log(data)
    for(let i=0; i< data.infinix.smart.length; i++){
        console.log(i)
        tbodyInfinixSmart.innerHTML += `
        <tr>
            <td>Smart ${data.infinix.smart[i].model}</td>
            <td>${data.infinix.smart[i].qt}</td>
            <td>${data.infinix.smart[i].position} </td>
        </tr>
        `
        };
    // console.log(data.samsung.seriA)
})