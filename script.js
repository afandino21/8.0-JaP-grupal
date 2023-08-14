
function loadProducts() {

    const url = "data.json";

    fetch(url)
        .then(response => response.json())
        .then(data => {

            const products = data.products;


            const productsContainer = document.getElementById('products-container');


            products.forEach(product => {
                const productCard = document.createElement('div');

                productCard.innerHTML = `
                    <div>
                        <div class="texto">
                                <h2>${product.name}</h2>
                                <h3>${product.author}</h3>
                                <p>${product.description}</p>
                                <p>${product.cost} ${product.currency}</p>
                                <p>${product.soldCount} vendidos</p>
                                <a href="${product.link}">Escucha la música aquí</a>
                        </div>
                        
                        <div>
                            <img src="${product.image}" alt="${product.name}">
                        </div>
                    </div>
                `;


                productsContainer.appendChild(productCard);
            });
        })
        .catch(error => {
            console.error('Error al cargar los productos:', error);
        });
}


document.addEventListener('DOMContentLoaded', loadProducts);