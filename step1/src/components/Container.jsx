const Container = (props) => {
  return (
    <main className="Container">
      <div className="ItemListArea Container__flex">
        <h2>商品一覧 / 品数: {props.listItems.length}</h2>
        // 商品一覧
      </div>

      <div className="CartArea">
        <h4>カート</h4>
        // カートの中身
      </div>
    </main>
  )
}

export default Container;
