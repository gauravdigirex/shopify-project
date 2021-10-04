function showDetails(price) {
  var manualPrice = 7000;
  var productPrice = price.getAttribute("data-product-price");
  
  if (productPrice < manualPrice){
  	alert(productPrice );
  }
  else
  {
  	 alert("The " + price.innerHTML + " is a " + productPrice + ".");
  }
  

 }
      
    