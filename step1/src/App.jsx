import { createSignal } from 'solid-js';

import { Order } from './components/Order.jsx';
import { Preview } from './components/Preview.jsx';

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

  return (
    <main class="appMain">
      <header class="header">
        <h1>IcecreamShop🍦🍨</h1>
      </header>
      <div class="operationArea">
        <Order />
        <Preview flavors={flavors()} withCone={withCone()} />
      </div>
      <div class="orderButtonArea">
        <button
          class="orderButtonArea__button"
          disabled={flavors().length < 1}
          onClick={() => console.log('My order is', { flavors: flavors(), withCone: withCone() })}
        >
          Order👌
        </button>
      </div>
    </main>
  );
};

export default App;
