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
  const [inCart, setinCart] = useLocalStorage<Cart>("cart", {});
  const [isMonthlyView, setIsMonthlyView] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [subscriptionCandidate, setSubscriptionCandidate] =
    useState<Subscription>(subscriptions.bravo);

  return (
    <main className={`${isCartOpen || isModalVisible ? "no-scroll" : ""}`}>
      <button
        id="cart-icon"
        className={`${isCartOpen ? "first-layer" : "second-layer"}`}
        onClick={() => setIsCartOpen((prevIsCartOpen) => !prevIsCartOpen)}
      >
        <CartIcon />
      </button>

      <Header />

      <View isMonthlyView={isMonthlyView} setIsMonthlyView={setIsMonthlyView} />

      {isModalVisible && (
        <Modal
          setIsModalVisible={setIsModalVisible}
          subscriptionCandidate={subscriptionCandidate}
          inCart={inCart}
          setInCart={setinCart}
        />
      )}

      {isCartOpen && (
        <CartComponent
          isMonthlyView={isMonthlyView}
          inCart={inCart}
          setInCart={setinCart}
          setIsCartOpen={setIsCartOpen}
        />
      )}

      <Subscriptions
        isMonthlyView={isMonthlyView}
        setSubscriptionCandidate={setSubscriptionCandidate}
        setIsModalVisible={setIsModalVisible}
      />
    </main>
  );
}

export default App;
