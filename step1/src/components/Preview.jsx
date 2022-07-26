import { IcecreamViewer } from './IcecreamViewer.jsx';

export const Preview = (props) => {
  return (
    <section class="previewArea">
      <h2>Preview</h2>
      <IcecreamViewer order={props} />
    </section>
  );
};
