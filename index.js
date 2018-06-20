var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}


function addToCart(item) {
 // write your code here
 var itemPrice = Math.floor((Math.random() * 100) + 1)
 var cartStuff = {itemName:`${item}`, itemPrice: itemPrice }
 cart = [...cart, cartStuff]
 return `${item} has been added to your cart.`
}


function viewCart() {
  var cartLength = cart.length
  if(cartLength === 0) {
    return `Your shopping cart is empty.`
  }
  else if(cartLength === 1) {
      return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}.`
    }
  
  else if(cartLength === 2) {
    return `In your cart, you have ${cart[0].itemName} at $${cart[0].itemPrice}, and ${cart[1].itemName} at $${cart[1].itemPrice}.`
  }
  else {
    var cartFull = {}
    //loop through array and print each the item name and price at each index 
    for (var num = 0; num < cart.length; num++) {
      cartFull = [...cartFull, ` ${cart[num].itemName} at $${cart[num].itemPrice}`]
      
      //remove last item from cart and re-add in return 
      var cartFullLastItem = cartFull.slice(0, cart.length - 1)
 

  } return `In your cart, you have${cartFullLastItem}, and ${cart[cart.length - 1].itemName} at $${cart[cart.length - 1].itemPrice}.`
  //cartFull = [...cartFull, `In your cart, you have ${cart[num].itemName} at ${cart[num].itemPrice}.`]
}
}

//Example of loop: minute 14:58
//https://www.youtube.com/watch?v=BxFi7vVZx4s
function total() {
  // write your code here
  var cartTotal = 0
  for( var i=0; i < cart.length; i++) {
    cartTotal = cartTotal + cart[i].itemPrice
  }
   return cartTotal
}

function removeFromCart(item) {
  // write your code here
  var removeItems = {}
  
  if (item != removeItems.itemName) {
    return `That item is not in your cart.`
    }
    
    //return [...item.splice([i]], 0), ...item.slice(3)]
    else {
      for( var i = 0; i < cart.length; i++) {
        removeItems = cart.splice(itemName[i], 0)
      } return removeItems
    }
  }

function placeOrder(cardNumber) {
  // write your code here
  var passedDownTotal = total()
  if( cardNumber ) {
    //About clearing an array 
    //https://stackoverflow.com/questions/1232040/how-do-i-empty-an-array-in-javascript
    cart.splice(0,cart.length)
    // **** Question: Why when I pass total() directly in it does not work. 
    // But when I store the value in a variable and call it, it works perfectly
    return `Your total cost is $${ passedDownTotal }, which will be charged to the card ${ cardNumber }.`
    } else
    return `Sorry, we don't have a credit card on file for you.`
    }

