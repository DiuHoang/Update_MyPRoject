import React, { Component } from 'react';
import "./Checkout.css";
import {withRouter} from 'react-router';
class Checkout extends Component {
  constructor(props){
    super(props);
    this.state = {
      carts: [],
      total: [],
      totalPrice: []
    }
    var id = props.match.params.id;
    this.getAllProducts();
    this.getTotalPrice();
    this.getTotalProduct();
  }
  getAllProducts(){
      fetch("http://127.0.0.1:8000/api/cart")
      .then(response => {
              response.json().then((data) =>{
                  console.log(data);
                  this.setState({
                      carts: data 
                  })
              });
        });
  }
  getTotalPrice(){
      fetch("http://127.0.0.1:8000/api/totalPrice")
      .then(response => {
              response.json().then((data) =>{
                  console.log(data);
                  this.setState({
                      totalPrice: data 
                  })
              });
        });
  }
  getTotalProduct(){
      fetch("http://127.0.0.1:8000/api/totalProduct")
      .then(response => {
              response.json().then((data) =>{
                  console.log(data);
                  this.setState({
                      total: data 
                  })
              });
        });
  }
  render() {
    let totalProduct = this.state.total;
    let totals = totalProduct.length;
    let totalPrice = this.state.totalPrice
    return (
      <div>
         <div className="wrapper">
      <div classNameName="container">
        <form method="post" action="">
          <div className="flexKhung">
            <div className="khungInfo">
              <div class="panel-info">
                <div className="panel-heading1">
                  <h3 className = "title-Checkout">
                    <b>Đơn hàng</b>
                  </h3>
                </div>
                <h4 className="strong-titleCheck"><b> Danh sách dịch vụ </b></h4>
                    <hr className="hr-payment" />
                    {this.state.carts.map((cart, index) =>
                       <div>
                      <div class="product-flex">
                        <div>
                          <img className="imageCheck" src={'/' + cart.picture} />
                        </div>
                        <div>{cart.name_product}</div>
                        <div>
                          {cart.price} <span>VNĐ</span>
                        </div>
                        <div>
                          <button className="button-delete"><i class="fa fa-trash" aria-hidden="true"></i></button>
                        </div>
                          
                        </div>
                        <hr className="hr-payment" />
                        </div>
                  )} 
                 {/* 
                 {this.state.totalPrice.map((total, index) =>
                  <h2>Tạm tính: { total.sumPrice}</h2>
                )}
                 */}
                    <div class="product-flex">
                    <div>
                      <strong>Số đơn hàng</strong>
                    </div>
                    <div>
                      <strong>
                        <b>
                          {totals} <span>Đơn</span>
                        </b>
                      </strong>
                    </div>
                  </div><br />
                  <div class="product-flex">
                    <div>
                      <strong>Tổng đơn hàng</strong>
                    </div>
                      <div>{this.state.totalPrice.map((total, index) =>
                        <strong>
                          <b>
                            {total.sumPrice} <span>VNĐ</span>
                          </b>
                        </strong>)}
                    </div>
                  </div> 
                  
                </div>
              
            </div>
            {/* Địa chỉ giao hàng */}
            <div className="khungInfo">
              <div className="panel-info">
                <div className="panel-heading1">
                  <h3 className="title-Checkout">
                    <b>Địa chỉ</b>
                  </h3>
                </div>
                <h4 className="strong-titleCheck"> <b>Địa chỉ giao hàng </b></h4>
                <div className="panel-body">
                  <div>
                    <div>
                      <strong className="strong-titleCheck">Tên của bạn <span className="required">(*)</span></strong>
                    </div>
                    <div>
                      <input
                        className="form-input-checkout"
                        placeholder="Tên của bạn.." required
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <strong className="strong-titleCheck">Số điện thoại <span className="required">(*)</span></strong>
                    </div>
                    <div>
                      <input
                        className="form-input-checkout"
                        placeholder="Số điện thoại của bạn.." required type="number"
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <strong className="strong-titleCheck">Địa chỉ  <span className="required">(*)</span></strong>
                    </div>
                    <div>
                      <input
                        className="form-input-checkout"
                        placeholder="Địa chỉ của bạn.." required
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <strong className="strong-titleCheck">Thời gian giao hàng  <span className="required">(*)</span></strong>
                    </div>
                    <div>
                      <input className="form-input-checkout" type="date" required />
                    </div>
                  </div>
                  <div>
                    <div>
                      <strong className="strong-titleCheck">Số mâm  <span className="required">(*)</span></strong>
                    </div>
                    <div>
                      <input
                        className="form-input-checkout"
                        type="number"
                        placeholder="Số mâm.." required
                      />
                    </div>
                  </div>
                  <div>
                    <div>
                      <strong className="strong-titleCheck">Ghi chú</strong>
                    </div>
                    <div>
                      <textarea
                        className="form-input-checkout"
                        placeholder="Ghi chú.."
                      />
                    </div>
                  </div>
                  <div>
                    <button className="btn-Checkout"><b>Tiếp tục </b></button>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
          </div>
        </form>
      </div>
    </div>
      </div>
    );
  }
}
export default withRouter(Checkout);