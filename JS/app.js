



const minus = document.querySelector('.minus');
const plus = document.querySelector('.plus');
const midnumber = document.querySelector('.mid-number');




let cart = [];

function addToCart(name, price, imageUrl) {
    let found = false;
    cart.forEach(item => {
        if (item.name === name) {
            item.quantity++;
            found = true;
        }
    });

    if (!found) {
        const product = { name, price, imageUrl, quantity: 1 };
        cart.push(product);
    }

    saveCartToSessionStorage();
}

function saveCartToSessionStorage() {
    sessionStorage.setItem('cart', JSON.stringify(cart));
}

function loadCartFromSessionStorage() {
    const cartFromStorage = sessionStorage.getItem('cart');
    if (cartFromStorage) {
        cart = JSON.parse(cartFromStorage);
    }
}

window.onload = function() {
    loadCartFromSessionStorage();
};


function showCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = 'block';

    const cartItems = document.getElementById('cart-items');
    cartItems.innerHTML = '';

    let total = 0;
    cart.forEach(product => {
        const listItem = document.createElement('li');
        const image = document.createElement('img');
        image.src = product.imageUrl;
        image.alt = product.name;
        image.style.width = '50px';
        image.style.height = '50px';
        listItem.appendChild(image);

        const itemInfo = document.createElement('div');
        itemInfo.classList.add('item-info');

        const itemName = document.createElement('p');
        itemName.textContent = product.name;
        itemInfo.appendChild(itemName);

        const itemPrice = document.createElement('p');
        itemPrice.textContent = `Preço: R$${product.price.toFixed(2)}`;
        itemInfo.appendChild(itemPrice);

        const itemQuantity = document.createElement('p');
        itemQuantity.textContent = `Quantidade: ${product.quantity}`;
        itemInfo.appendChild(itemQuantity);

        listItem.appendChild(itemInfo);

        cartItems.appendChild(listItem);

        total += product.price * product.quantity;
    });

    const cartTotal = document.getElementById('cart-total');
    cartTotal.textContent = `Total: R$${total.toFixed(2)}`;
}

function closeCart() {
    const modal = document.getElementById('cart-modal');
    modal.style.display = 'none';
}

let contador = 0;

plus.addEventListener('click', () =>{
    contador++
    atualizarcontador();

});

function atualizarcontador(){
    midnumber.textContent = contador;
}

minus.addEventListener('click', () =>{
    if(contador > 0){
        contador--;
        atualizarcontador();
    }
})