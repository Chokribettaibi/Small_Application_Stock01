let tbodyIphone = document.getElementById('tbodyIphone');
console.log(tbodyIphone);
fetch('../../js/db.json').then(res => res.json()).then(data =>{
    console.log(data)
    for(let i=0; i < 68; i++){
        console.log(i)
        tbodyIphone.innerHTML += `
        <tr>
            <td>iPhone ${data.iphone[i].model}</td>
            <td>${data.iphone[i].qt}</td>
            <td>${data.iphone[i].position}</td>
        </tr>
        `
        };
    // console.log(data.samsung.seriA)
})