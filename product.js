let cartItems = [];
let likes = [0, 0, 0, 0];

function addToCart(productName, price, commentId, submitId, likeCountId) {
    const comment = document.getElementById(commentId).value;
    const item = { productName, price, comment, likes: 0, likeCountId };
    
    cartItems.push(item);

    // Update the cart display
    updateCartDisplay();
    
    // Update the comments display
    updateCommentsDisplay(commentId, submitId);

    // For simplicity, log the cart items to the console
    console.log("Cart Items:", cartItems);

    // Initialize likes
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

// Add a variable to store the total price
let totalPrice = 0;

function addToCart(productName, productPrice) {
    // Assume you have a function to add the item to the cart list
    addItemToCart(productName, productPrice);

    // Update the total price
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
    // Update the total price in the HTML
    const totalPriceElement = document.getElementById('totalPrice');
    totalPriceElement.textContent = `Total: $${totalPrice.toFixed(2)}`;
}
