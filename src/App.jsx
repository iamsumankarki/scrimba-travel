import Header from "./components/Header";
import Card from "./components/Card";

import data from "./data";

function App() {
  const cards =
    data &&
    data.length > 0 &&
    data.map((item) => <Card key={item.id} item={item} />);

  return (
    <div className="main-wrapper">
      <div className="desktop-screen">Please resize the screen below 576px</div>

      <div className="mobile-screen">
        <Header />
        <div className="cards">{cards}</div>
      </div>
    </div>
  );
}

export default App;
