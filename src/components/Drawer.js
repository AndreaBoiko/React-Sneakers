function Drawer() {
  return (
    <div className="overlay">
      <div className="drawer">
        <h2 className="mb-30">
          Корзина <img className="removeBtn" src="/img/remove.svg" alt="remove" />
        </h2>

        <div className="items">
          <div className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              width={70}
              height={70}
              src="/img/sneakers/sneakers1.jpg"
              alt="sneakers"
            />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999руб.</b>
            </div>
            <img className="removeBtn" src="/img/remove.svg" alt="remove" />
          </div>

          <div className="cartItem d-flex align-center mb-20">
            <img
              className="mr-20"
              width={70}
              height={70}
              src="/img/sneakers/sneakers1.jpg"
              alt="sneakers"
            />
            <div className="mr-20">
              <p className="mb-5">Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b>12 999руб.</b>
            </div>
            <img className="removeBtn" src="/img/remove.svg" alt="remove" />
          </div>
        </div>

        <div className="cartTotalBlock">
          <ul>
            <li>
              <span>Итого: </span>
              <div></div>
              <b>21 498руб. </b>
            </li>
            <li>
              <span>Налог 5%: </span>
              <div></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/arrow.svg" alt="Arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
