var nameWebsite = document.getElementById("nameWebsite");
var urlWebsite = document.getElementById("urlWebsite");
var allSites=[];

if (localStorage.getItem("allSites") !=0) {
    allSites = JSON.parse(localStorage.getItem("allSites"))
display();
}
function getAdd(){
    var site = {
        name:nameWebsite.value,
        url:urlWebsite.value,

    }
    allSites.push(site)
    console.log(allSites);

    localStorage.setItem("allSites" , JSON.stringify(allSites))
    clearForm()
    display()
    
}
function clearForm(){
    nameWebsite.value="";
    urlWebsite.value="";

}
function display() {
    var cartoona = "";
    for (i = 0; i < allSites.length; i++) {

        cartoona += `<div class=" my-2 py-5 demo-bg px-5">
        <div class="row w-100">
            <div class="col-4">
                <h3 class="demo-h3">${allSites[i].name}</h3>

            </div>
            <div class="col-4">
            <a href="${allSites[i].url}"><button class="btn btn-primary ">visite</button></a>
                
                <button onclick="delet(${i})" class="btn btn-danger ">delete</button>
            </div>
            <div class="col-4"></div>
        </div>
    </div>`

    }

    document.getElementById('demo').innerHTML = cartoona;
}
function delet(index) {
    allSites.splice(index, 1)
    display();
    localStorage.setItem("allSites" , JSON.stringify(allSites))
}










































// var pn = document.getElementById("pn");
// var pp = document.getElementById("pp");
// var pc = document.getElementById("pc");
// var pd = document.getElementById("pd");
// var allproducts = [];
// function getAdd() {

//     var product = {
//         name: pn.value,
//         price: Number(pp.value),
//         catogary: pc.value,
//         description: pd.value
//     }
//     console.log(product);

//     allproducts.push(product);
//     console.log(allproducts);

//     clearForm()
//     display()

// }
// function clearForm() {
//     pn.value = ""
//     pp.value = ""
//     pc.value = ""
//     pd.value = ""
// }



// function display() {
//     var cartoona = "";
//     for (i = 0; i < allproducts.length; i++) {

//         cartoona += `<tr>
//         <td>${i}</td>
//         <td>${allproducts[i].name}</td>
//         <td>${allproducts[i].price}</td>
//         <td>${allproducts[i].catogary}</td>
//         <td><button onclick="delet(${i})" class="btn btn-danger">delete</button></td>
//         <td><button class="btn btn-warning">update</button></td>
//         </tr>`

//     }

//     document.getElementById('tbody').innerHTML = cartoona;
// }

// function delet(index) {
//     allproducts.splice(index, 1)
//     display();
// }



