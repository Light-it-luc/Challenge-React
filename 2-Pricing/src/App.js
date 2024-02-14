import { useState } from "react";

import { Modal } from "./components/Modal";
import { View } from "./components/View";
import { Header } from "./components/Header";

function App() {
  const [itemsInCart, setItemsInCart] = useState({});
  const [isMonthlyView, setIsMonthlyView] = useState(true);
  const [subscriptionCandidate, setSubscriptionCandidate] = useState(null);
  /* const [isModalVisible, setIsModalVisible] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false); */

  return (
    <main>
      {/* <button onClick={() => setIsCartOpen(true)}><CartIcon /></button> */}
      <Header />
      <View isMonthlyView={isMonthlyView} setIsMonthlyView={setIsMonthlyView} />
      <Modal
        subscriptionCandidate={subscriptionCandidate}
        itemsInCart={itemsInCart}
        setItemsInCart={setItemsInCart}
      />
      {/* <Cart items={items} open /> */}
      {/* <Subscriptions isMonthlyView={isMonthlyView} /> */}
    </main>
  );
}

export default App;
