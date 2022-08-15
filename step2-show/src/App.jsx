import {createSignal, Show} from 'solid-js';

import {Order} from './components/Order.jsx';
import {Preview} from './components/Preview.jsx';

const flavorsList = [
  'mintcream',
  'lemonchiffon',
  'wheat',
  'plum',
  'lime',
  'skyblue',
  'tomato',
  'green',
  'chocolate',
  'maroon',
];

const App = () => {
  const [flavors, setFlavors] = createSignal([flavorsList[4]]);
  const [withCone, setWithCone] = createSignal(true);
  const [currentFlavorIdx, setCurrentFlavorIdx] = createSignal(0);

  const addFlavor = () => {
    if (flavors().length >= 3) return;
    const nextFlavors = [...flavors(), flavorsList[currentFlavorIdx()]];
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
          flavorsList={flavorsList}
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
        <Show
          when={flavors().length >= 3}
          fallback={<p>フレーバーを3つ選んでください</p>}
        >
          <button
            class="orderButtonArea__button"
            onClick={() => console.log('My order is', {flavors: flavors(), withCone: withCone()})}
          >
            Order👌
          </button>
        </Show>
      </div>
    </main>
  );
};

export default App;
