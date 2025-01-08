function Order({ closeHour, openHour }) {
  return (
  <div className="order">
    <p>
      We are open from {openHour}:00 until {closeHour}:00. Come on in or visit us online.
    </p>
    <button className="btn">Order</button>
  </div>
  )
}

export default Order;