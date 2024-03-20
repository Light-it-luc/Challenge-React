import { useState } from "react";

import { Modal } from "./components/Modal";
import { View } from "./components/View";
import { Header } from "./components/Header";
import { Subscriptions } from "./components/Subscriptions";

import { Subscription, subscriptions } from "./constants";
import { CartIcon } from "./ui/icons";
import { Cart as CartComponent } from "./components/Cart";

function App() {
  const [isMonthlyView, setIsMonthlyView] = useState(true);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [subscriptionCandidate, setSubscriptionCandidate] =
    useState<Subscription>(subscriptions.bravo);

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
        />
      )}

      {isCartOpen && (
        <CartComponent
          isMonthlyView={isMonthlyView}
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
