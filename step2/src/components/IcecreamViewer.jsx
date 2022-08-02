export const IcecreamViewer = (props) => {
  return <pre class="icecreamViewer">{JSON.stringify(props.order, null, 2)}</pre>;
};
