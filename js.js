var productList = ["Iphone X", "Samsung Galaxy Y", "Note 20", "Nokia 1280"];
function showAllProduct() {
    let data = "<table border='1px'>";
    data += "<tr>" +
        "<td>Product Name</td>"+
        "<td>Action</td>" +
        "</tr>";
    for (let i = 0; i < productList.length; i++) {
        data+= "<tr>" +
            "<td id='productName"+i+"'>"+productList[i]+ "</td>"+
            "<td>" +
            "<button onclick='editProduct("+i+")'>Edit</button>" +
            "<button onclick='deleteProduct("+ i +")'>Delete</button>" +
            "</td>" +
            "</tr>"
    }
    data += "</table>"

    document.getElementById("listProdcut").innerHTML = data;
}

function addNewProduct() {
    let newProductName =  document.getElementById("newProduct").value;
    productList.push(newProductName);
    showAllProduct();
}

function deleteProduct(index) {
    if(confirm("Are you sure?")){
        productList.splice(index, 1);
        showAllProduct()
    }
}


function confirmEditProduct(index, e) {
    let newNameProduct = e.value;
    productList[index] = newNameProduct;
    showAllProduct();
}


function editProduct(i) {
    // let newName = prompt("Moi ban nhap ten moi", productList[index]);
    // productList[index] = newName;
    let eProduct = "productName" + i;
    let oldProductName = productList[i];
    let data = "<input onchange='confirmEditProduct("+i+", this)'/>";
    document.getElementById(eProduct).innerHTML = data;

}




