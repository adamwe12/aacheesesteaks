function checkout(item) {
  const stripe = Stripe("pk_test_replace_with_your_key");
  let priceId = "";

  if (item === "standard") priceId = "price_standard001";
  if (item === "specialty") priceId = "price_specialty001";

  stripe.redirectToCheckout({
    lineItems: [{ price: priceId, quantity: 1 }],
    mode: "payment",
    successUrl: "[aacheesesteaks.com](https://aacheesesteaks.com/?success=true)",
    cancelUrl: "[aacheesesteaks.com](https://aacheesesteaks.com/?cancel=true)"
  });
}
