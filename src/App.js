import React from "react";
import Productlist from "./component/Productlist";

class App extends React.Component {
  state = {
    products: []
  };

  componentDidMount() {
    fetch("https://demo0260216.mockable.io/products_get")//Fetch data from mockable api
      .then((response) => response.json())
      .then((data) => {
        this.setState({ products: data });//set the products that is given by api
      });
  }

  render() {
    return (
      <ul>
        {this.state.products.map((product) => ( //show each project in the productiolist component
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
