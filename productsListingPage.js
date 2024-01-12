let productsItemsContainer = document.getElementById('productItemsContainer')

function searchItem() {
    let searchInput = document.getElementById('searchInput').value;


}


function displayResults(data) {
    const {
        productTitle,
        productBadge,
        productImage,
        productVariants
    } = data;
    const [var1, var2, var3] = productVariants;



    let productCard = document.createElement('li')
    productCard.classList.add('product-card')
    productsItemsContainer.appendChild(productCard);

    let imageContainer = document.createElement('div')
    imageContainer.classList.add("img-container")
    productCard.appendChild(imageContainer);



    let itemImage = document.createElement('img');
    itemImage.classList.add('img')
    itemImage.setAttribute('src', productImage);
    imageContainer.appendChild(itemImage);

    let badgeEle = document.createElement('h1');
    badgeEle.classList.add('badge-title');
    badgeEle.textContent = productBadge;
    imageContainer.appendChild(badgeEle);

    let productDataContainer = document.createElement('div');
    productDataContainer.classList.add('data-container');
    productCard.appendChild(productDataContainer);

    let productName = document.createElement('h1');
    productName.classList.add('product-title');
    productName.textContent = productTitle;
    productDataContainer.appendChild(productName);



    let variant1 = document.createElement('p');
    variant1.classList.add('vairant');
    variant1.textContent = var1.v1;
    productDataContainer.appendChild(variant1)

    let variant2 = document.createElement('p');
    variant2.classList.add('vairant');
    variant2.textContent = var2.v2;
    productDataContainer.appendChild(variant2)

    let variant3 = document.createElement('p');
    variant3.classList.add('vairant');
    variant3.textContent = var3.v3;
    productDataContainer.appendChild(variant3)
}

function showListView() {
    productsItemsContainer.classList.add('products-items-container-list-view')
    productsItemsContainer.classList.remove('products-items-container-grid-view')

}

function showGridView() {
    productsItemsContainer.classList.remove('products-items-container-list-view')
    productsItemsContainer.classList.add('products-items-container-grid-view')


}



let url = "https://mocki.io/v1/0934df88-6bf7-41fd-9e59-4fb7b8758093";
let options = {
    method: 'GET'
}
fetch(url, options).then(function(response) {
    return response.json()
}).then(function(jsondata) {
        let dataArray = jsondata.data;
        // console.log(dataArray)
        for (let eachItem of dataArray) {
            let dataObject = {
                productImage: eachItem.product_image,
                productBadge: eachItem.product_badge,
                productTitle: eachItem.product_title,
                productVariants: eachItem.product_variants,
            }


            displayResults(dataObject, )
        }
    }

)