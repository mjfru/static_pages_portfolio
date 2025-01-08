import Pizza from "./Pizza";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function Menu() {
  const pizzas = pizzaData;
  const numPizzas = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu</h2>
      
      {numPizzas > 0 ? (
        //* The fragment allows us to keep the <p> and <ul> seperately, leaving no trace in the HTML tree, and serves as a parent element.
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose form. All from our stone oven, all organic, all delicious.
          </p>
          <ul className="pizzas">
            {pizzas.map(pizza => (
              <Pizza pizzaObj={pizza} key={pizza.name}/>))}
          </ul>
        </>
      ): <p>Our new menu is coming soon! Please visit us at a later this month.</p>
      }

        {/* <Pizza 
          name='Pizza Spinaci' 
          ingredient='Tomato, mozarella, spinach, and ricotta cheese' 
          photoName='/pizzas/spinaci.jpg' 
          price={10}
        />
        <Pizza 
          name='Pizza Funghi'
          ingredient='Tomato, mushrooms, and onion'
          photoName='/pizzas/funghi.jpg'
          price={11}
        /> */}
    </main>
  )
}

export default Menu;