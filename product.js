let cartItems = [];
let likes = [0, 0, 0, 0];

function addToCart(productName, price, commentId, submitId, likeCountId) {
    const comment = document.getElementById(commentId).value;
    const item = { productName, price, comment, likes: 0, likeCountId };
    
    cartItems.push(item);

    
    updateCartDisplay();
    
  
    updateCommentsDisplay(commentId, submitId);

   
    console.log("Cart Items:", cartItems);


    document.getElementById(likeCountId).addEventListener('click', function () {
        likeProduct(likeCountId);
    });
}

function updateCartDisplay() {
    const cartList = document.getElementById("cartItems");
    cartList.innerHTML = "";

    cartItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.productName} - Price: $${item.price}`;
        cartList.appendChild(listItem);
    });
}

function updateCommentsDisplay(commentId, commentsDivId) {
    const commentsList = document.getElementById(commentsDivId);
    commentsList.innerHTML = "";

    cartItems.forEach(item => {
        if (item.comment.trim() !== "" && commentsDivId === commentId) {
            const listItem = document.createElement("div");
            listItem.textContent = `Comment: ${item.comment}`;
            commentsList.appendChild(listItem);
        }
    });
}

function submitComment(commentId, commentsDivId) {
    const comment = document.getElementById(commentId).value;

    if (comment.trim() !== "") {
        const commentsList = document.getElementById(commentsDivId);
        const listItem = document.createElement("div");
        listItem.textContent = `Comment: ${comment}`;
        commentsList.appendChild(listItem);
    }
}

function likeProduct(likeCountId) {
    const productId = likeCountId.charAt(likeCountId.length - 1);
    likes[productId - 1]++;
    const likeCount = document.getElementById(likeCountId);
    likeCount.textContent = `${likes[productId - 1]} Likes`;
}


let totalPrice = 0;

function addToCart(productName, productPrice) {
   
    addItemToCart(productName, productPrice);

   
    totalPrice += productPrice;
    updateCartTotal();
}

function addItemToCart(productName, productPrice) {
    const cartItemsList = document.getElementById('cartItems');
    const listItem = document.createElement('li');
    listItem.textContent = `${productName} - $${productPrice.toFixed(2)}`;
    cartItemsList.appendChild(listItem);
}

function updateCartTotal() {
   
    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}
