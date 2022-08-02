import {For} from 'solid-js';

export const Order = (props) => {
  return (
    <section class="orderArea">
      <h2>Order</h2>

      <div class="flavorPicker">
        <For each={props.flavorsList}>
          {(f, idx) => (
            <div
              class="flavorPicker__item"
              classList={{'flavorPicker__item--selected': idx() === props.currentFlavorIdx}}
              style={{'background-color': f}}
              onClick={() => props.setCurrentFlavorIdx(idx())}
            />
          )}
        </For>
      </div>
      <div class="flavorOperation">
        <button class="flavorOperation__button" onClick={props.addFlavor}>
          Add
        </button>
        <button class="flavorOperation__button" onClick={props.deleteFlavor}>
          Delete
        </button>
      </div>
      <div class="flavorOperation">
        <label>
          <input
            type="radio"
            name="serve"
            onClick={() => props.setWithCone(true)}
            checked={props.withCone}
          />{' '}
          with Cone 🍦
        </label>
        <label>
          <input
            type="radio"
            name="serve"
            onClick={() => props.setWithCone(false)}
            checked={!props.withCone}
          />{' '}
          with Cup 🍨
        </label>
      </div>
    </section>
  );
};
