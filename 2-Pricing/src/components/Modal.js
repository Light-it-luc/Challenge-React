import { useRef } from "react";

export const Modal = ({
  subscriptionCandidate,
  itemsInCart,
  setItemsInCart,
}) => {
  const modal = useRef(document.getElementById("modal"));

  const addToCart = (subscription) => {
    const inCart = structuredClone(itemsInCart);

    if (subscription.name in inCart) {
      inCart[subscription.name].count++;
    } else {
      inCart[subscription.name].count = 1;
    }

    setItemsInCart(inCart);
  };

  const handleConfirm = () => {
    addToCart(subscriptionCandidate);
  };

  const handleCloseModal = () => {
    modal.close();
  };

  return (
    <dialog id="modal">
      <h2>Add to cart?</h2>
      <p>
        Are you sure you want to add {subscriptionCandidate.name} Pack to your
        cart?
      </p>

      <div>
        <button onClick={handleCloseModal}>Cancel</button>
        <button onClick={handleConfirm}>Confirm</button>
      </div>
    </dialog>
  );
};
