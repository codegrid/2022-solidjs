import {createSignal} from 'solid-js';

import {Order} from './components/Order.jsx';
import {Preview} from './components/Preview.jsx';

const App = () => {
  const [flavors, setFlavors] = createSignal(['chocolate']);
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
    </main>
  );
};

export default App;
