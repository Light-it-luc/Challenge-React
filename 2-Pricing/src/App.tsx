import { useState } from "react";

import { Modal } from "./components/Modal";
import { View } from "./components/View";
import { Header } from "./components/Header";
import { Subscriptions } from "./components/Subscriptions";

import { Subscription, subscriptions } from "./constants";
import { useLocalStorage } from "./hooks/useLocalStorage";

export interface Cart {
  alpha: number;
  bravo: number;
  charlie: number;
  extra: number;
}

function App() {
  const [itemsInCart, setItemsInCart] = useLocalStorage<Cart>("cart", {
    alpha: 0,
    bravo: 0,
    charlie: 0,
    extra: 0,
  });
  const [isMonthlyView, setIsMonthlyView] = useState(true);
  const [subscriptionCandidate, setSubscriptionCandidate] =
    useState<Subscription>(subscriptions.bravo);
  const [isModalVisible, setIsModalVisible] = useState(false);
  //const [isCartOpen, setIsCartOpen] = useState(false);

  return (
    <main>
      {/* <button onClick={() => setIsCartOpen(true)}><CartIcon /></button> */}
      <Header />
      <View isMonthlyView={isMonthlyView} setIsMonthlyView={setIsMonthlyView} />
      {isModalVisible && (
        <Modal
          setIsModalVisible={setIsModalVisible}
          subscriptionCandidate={subscriptionCandidate}
          itemsInCart={itemsInCart}
          setItemsInCart={setItemsInCart}
        />
      )}
      {/* <Cart items={items} open /> */}
      <Subscriptions
        isMonthlyView={isMonthlyView}
        setSubscriptionCandidate={setSubscriptionCandidate}
        setIsModalVisible={setIsModalVisible}
      />
    </main>
  );
}

export default App;
