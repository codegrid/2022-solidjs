import {createSignal, createResource} from 'solid-js';

import {Order} from './components/Order.jsx';
import {Preview} from './components/Preview.jsx';

const fetchFlavorsList = async () => {
  // Loading表示のため、わざと遅延させています
  await new Promise(resolve => setTimeout(resolve, 2000))

  return (await fetch('/2022-solidjs/api-mock/flavors.json')).json();
}

const App = () => {
  const [flavorsList] = createResource(fetchFlavorsList);
  const [flavors, setFlavors] = createSignal([]);
  const [withCone, setWithCone] = createSignal(true);
  const [currentFlavorIdx, setCurrentFlavorIdx] = createSignal(0);

  const addFlavor = () => {
    if (flavors().length >= 3) return;
    const nextFlavors = [...flavors(), flavorsList()[currentFlavorIdx()]];
    setFlavors(nextFlavors);
  };
  const deleteFlavor = () => {
    const nextFlavors = [...flavors()];
    nextFlavors.pop();
    setFlavors(nextFlavors);
  };

  return (
    <main class="appMain">
      <header class="header">
        <h1>IcecreamShop🍦🍨</h1>
      </header>
      <div class="operationArea">
        <Order
          flavorsList={flavorsList()}
          isLoading={flavorsList.loading}
          currentFlavorIdx={currentFlavorIdx()}
          setCurrentFlavorIdx={setCurrentFlavorIdx}
          addFlavor={addFlavor}
          deleteFlavor={deleteFlavor}
          withCone={withCone()}
          setWithCone={setWithCone}
        />
        <Preview flavors={flavors()} withCone={withCone()} />
      </div>
      <div class="orderButtonArea">
        <button
          class="orderButtonArea__button"
          disabled={flavors().length < 1}
          onClick={() => console.log('My order is', {flavors: flavors(), withCone: withCone()})}
        >
          Order👌
        </button>
      </div>
    </main>
  );
};

export default App;
