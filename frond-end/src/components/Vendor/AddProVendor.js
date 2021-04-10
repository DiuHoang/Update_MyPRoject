import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router";

class AddProVendor extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name_product: "",
      picture: "",
      price: "",
      discount: "",
      description: "",
      category: "",
    };

    this.handleChangeName = this.handleChangeName.bind(this);
    this.handleChangePicture = this.handleChangePicture.bind(this);
    this.handleChangePrice = this.handleChangePrice.bind(this);
    this.handleChangeDiscount = this.handleChangeDiscount(this);
    this.handleChangeDescription = this.handleChangeDescription(this);
    this.handleChangeCategory = this.handleChangeCategory(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  handleChangeName(e) {
    this.setState({
      name_product: e.target.value,
    });
  }
  handleChangePicture(e) {
    this.setState({
      picture: e.target.value,
    });
  }
  handleChangePrice(e) {
    this.setState({
      price: e.target.value,
    });
  }
  handleChangeDiscount(e) {
    this.setState({
      discount: e.target.value,
    });
  }
  handleChangeDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }
  handleChangeCategory(e) {
    this.setState({
      category: e.target.value,
    });
  }
  onSubmit(e) {
    e.preventDefault();
    const products = {
      name_product: this.state.name_product,
      picture: this.state.picture,
      price: this.state.productPrice,
      discount: this.state.discount,
      description: this.state.description,
      category: this.state.category,
    };
    let uri = "http://localhost:8000/api/addProVendor/";
    axios.post(uri, products).then((response) => {
      // browserHistory.push("/display-item");
    });
  }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <h1>Add</h1>
          <input
            type="text"
            name="name_product"
            placeholder="Name"
            onChange={this.handleChangeName}
          />
          <input
            onChange={this.handleChangePicture}
            type="file"
            name="picture"
          />
          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={this.handleChangePrice}
          />
          <input
            type="number"
            name="discount"
            placeholder="Discount"
            onChange={this.handleChangeDiscount}
          />
          <input
            type="text"
            name="description"
            placeholder="Description"
            onChange={this.handleChangeDescription}
          />
          <select
            name="category_id"
            selected
            onChange={this.handleChangeCategory}
          >
            <option value="Loa máy">Loa máy</option>
            <option value="Đồ ăn">Đồ ăn</option>
            <option value="trang trí">Trang trí</option>
            <option value="Bàn ghế">Bàn ghế</option>
            <option value="Bánh kem">Bánh kem</option>
          </select>
          <button type="submit" name="submit">
            Add
          </button>
        </form>
      </div>
    );
  }
}
export default withRouter(AddProVendor);
