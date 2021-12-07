import Card from "./Components/Card/Card";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Card
        clr="rgb(248, 143, 6)"
        date="28/11/2021"
        title="Amazon Gift Pay"
        device1="Desktop"
        device2="Mobile"
      />
      <Card
        clr="rgb(248, 143, 6)"
        date="28/11/2021"
        title="Amazon Gift Pay"
        device1="Desktop"
        device2="Mobile"
      />
      <Card
        clr="rgb(204, 195, 195)"
        date="28/11/2021"
        title="Apple Gift Payment"
        device1="Desktop"
        device2="Mobile"
      />
    </div>
  );
}
