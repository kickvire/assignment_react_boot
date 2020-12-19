import React from "react";
import Productlist from "./component/Productlist";

class App extends React.Component {
  state = {
    products: []
  };

  componentDidMount() {
    fetch("https://demo0260216.mockable.io/products_get")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ products: data });
      });
  }

  render() {
    return (
      <ul>
        {this.state.products.map((product) => (
          <Productlist
            product_image={product.image}
            discount={product.promoMessage}
            title={product.title}
          />
        ))}
      </ul>
    );
  }
}
export default App;
