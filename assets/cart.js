  /* Set rates + misc */ 
var fadeTime = 300;


/* Assign actions */
$('.product-quantity input').change( function() {
  updateQuantity(this);
});

$('.product-removal button').click( function() {
  removeItem(this);
});
/* Update quantity */
function updateQuantity(quantityInput)
{
  /* Calculate line price */
   var productRow = $(quantityInput).parent().parent(),id = productRow.children('.product-price').attr("data-variant");
   function updateCart(d,id){
      for(var i=0;i<d.items.length;i++){
        if(id==d.items[i].id){}
        $(".line--"+id).html(Shopify.formatMoney(d.items[i].price * d.items[i].quantity,Shopify.moneyformat));
           $(".discounted-price--"+id).html(Shopify.formatMoney(d.items[i].price * d.items[i].quantity/2,Shopify.moneyformat));  
      }
      $("#order-total").html(Shopify.formatMoney(d.total_price*2,Shopify.moneyformat));
      $("#order-discount").html(Shopify.formatMoney(d.total_price,Shopify.moneyformat));
      $("#cart-subtotal, #cart-total").html(Shopify.formatMoney(d.total_price,Shopify.moneyformat));
   }
   fetch(window.Shopify.routes.root + 'cart/change.js',{method:"POST",headers:{"Content-Type":"application/json",Accept:`application/javascript`},body:JSON.stringify({"id": id,"quantity":$(quantityInput).val()})}).then(r => { return r.json();}).then(d => { updateCart(d,id);});
}
/* Remove item from cart */
function removeItem(removeButton)
{
  /* Remove row from DOM and recalc cart total */
  var productRow = $(removeButton).parent().parent();
  productRow.slideUp(fadeTime, function() {
    productRow.remove();
  });
}
