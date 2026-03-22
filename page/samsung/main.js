let tbodySeriA = document.getElementById('tbodySeriA');
// tbodySeriA.innerHTML = '<p>Hello</p>'
console.log(tbodySeriA)
fetch('../../js/db.json').then(res => res.json()).then(data =>{
    let arr = data.samsung.seriA;
    console.log(arr.length)
    for(let i=0; i< data.samsung.seriA.length; i++){
        console.log(i)
        tbodySeriA.innerHTML += `
        <tr>
            <td>Galaxy ${data.samsung.seriA[i].model}</td>
            <td>${data.samsung.seriA[i].qt}</td>
            <td>${data.samsung.seriA[i].position} </td>
        </tr>
        `
        };
    // console.log(data.samsung.seriA)
})