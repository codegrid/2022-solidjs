export const Preview = (props) => {
  return (
    <section class="previewArea">
      <h2>Preview</h2>
      <pre class="icecreamViewer">
        {JSON.stringify({flavors: props.flavors, withCone: props.withCone}, null, 2)}
      </pre>
    </section>
  );
};
