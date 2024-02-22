import { useState } from "react";

import { Modal } from "./components/Modal";
import { View } from "./components/View";
import { Header } from "./components/Header";
import { Subscriptions } from "./components/Subscriptions";

import { Subscription, subscriptions } from "./constants";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { CartIcon } from "./ui/icons";
import { Cart as CartComponent } from "./components/Cart";

export interface Cart {
  alpha?: number;
  bravo?: number;
  charlie?: number;
  extra?: number;
}

function App() {
  const [cart, setCart] = useLocalStorage<Cart>("cart", {});
  const [isMonthlyView, setIsMonthlyView] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [subscriptionCandidate, setSubscriptionCandidate] =
    useState<Subscription>(subscriptions.bravo);

  const addToCart = (subscription: Subscription) => {
    const cartKey = subscription.name.toLowerCase() as keyof Cart;
    const quantity = cart[cartKey] ?? 0;
    const updatedCart = { ...cart };
    updatedCart[cartKey] = quantity + 1;
    setCart(updatedCart);
  };

  return (
    <>
      <button
        id="cart-icon"
        className={`${isCartOpen ? "first-layer" : "second-layer"}`}
        onClick={() => setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen)}
      >
        <CartIcon />
      </button>

      {isModalVisible && (
        <Modal
          setIsModalVisible={setIsModalVisible}
          subscriptionCandidate={subscriptionCandidate}
          addToCart={() => addToCart(subscriptionCandidate)}
        />
      )}

      {isCartOpen && (
        <CartComponent
          isMonthlyView={isMonthlyView}
          cart={cart}
          setCart={setCart}
          setIsCartOpen={setIsCartOpen}
        />
      )}

      <main className={`${isCartOpen || isModalVisible ? "no-scroll" : ""}`}>
        <Header />

        <View
          isMonthlyView={isMonthlyView}
          setIsMonthlyView={setIsMonthlyView}
        />

        <Subscriptions
          isMonthlyView={isMonthlyView}
          setSubscriptionCandidate={setSubscriptionCandidate}
          setIsModalVisible={setIsModalVisible}
        />
      </main>
    </>
  );
}

export default App;
