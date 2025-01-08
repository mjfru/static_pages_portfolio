import Order from "./Order";

function Footer() {
  const hour = new Date().getHours();
  const openHour = 11;
  const closeHour = 22;

  const isOpen = hour >= openHour && hour <= closeHour
  console.log(`Open? ${isOpen}`);
  // if (hour >= openHour && hour <= closeHour) {
  //   alert("We are currently open!");
  // } else {
  //   alert("Sorry, we're closed. See you next time!");
  // }
  // if(!isOpen)
  //   return (
  //     <p>
  //       We&#39;re happy to welcome you between {openHour}:00 and {closeHour}:00!
  //     </p>
  //   );

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closeHour={closeHour} openHour={openHour} />
      ) : (
        <p>
          We&#39;re happy to welcome you between {openHour}:00 and {closeHour}:00.
        </p>)}
    </footer>
)}

export default Footer;