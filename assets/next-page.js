var product_on_page = $('.products-on-page');
var next_url = product_on_page.data('next-url');

function loadpage(price)
{
   var manualPrice = 7000;
   var productPrice = price.getAttribute("data-product-price");
  if (productPrice < manualPrice){
//   	alert(productPrice );
  
	$.ajax(
      {
        url:next_url,
        type:'GET',
        dataType:'html'
      }
	).done(function(next_page) {
	var new_products = $(next_page).find('.products-on-page');
    var new_url = new_products.data('next-url');
  
  	next_url = new_url;
  	product_on_page.append(new_products.html());
	})
    }
    alert("Hi");
    

}

                                    