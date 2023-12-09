import React from "react";
import { Container, Row, Col, Form, FormGroup } from "reactstrap";
import Helmet from "../components/Helmet/Helmet";
import CommonSection from "../components/UI/CommonSection";
import "../styles/checkout.css";
import { useSelector } from "react-redux";

const CheckOut = () => {
  const totalQty = useSelector(state =>state.cart.totalQuantity)
  const  totalAmount = useSelector (state=>state.cart.totalAmount)

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8">
              <h6>Billing Information</h6>
              <Form className="billing_form">
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter your name" />
                </FormGroup>
              </Form>
              <Form>
                <FormGroup className="form_group">
                  <input type="email" placeholder="Enter your email" />
                </FormGroup>
              </Form>
              <Form>
                <FormGroup className="form_group">
                  <input type="number" placeholder="Enter your number" />
                </FormGroup>
              </Form>
              <Form>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter your address" />
                </FormGroup>
              </Form>
              <Form>
                <FormGroup className="form_group">
                  <input type="text" placeholder="Enter your city" />
                </FormGroup>
                <Form>
                  <FormGroup className="form_group">
                    <input type="text" placeholder="Enter your pin code" />
                  </FormGroup>
                </Form>
                <Form>
                  <FormGroup className="form_group">
                    <input type="text" placeholder="Enter your  country" />
                  </FormGroup>
                </Form>
              </Form>
            </Col>
            <Col lg="4">
              <div className="checkout_cart">
                <h6>
                  Total Qty :<span>{totalQty}items</span>
                </h6>
                <h6>
                  Subtotal :<span>${totalAmount}</span>
                </h6>
                <h6>
                  <span>
                    Shipping: <br />
                    free shipping
                  </span>
                  <span>$0</span>
                </h6>
                <h4>
                  Total Cost: <span>${totalAmount}</span>
                </h4>
                <button className="buy_btn auth_btn w-100">
                  Place on order
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default CheckOut;
