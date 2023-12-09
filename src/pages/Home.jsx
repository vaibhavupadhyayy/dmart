import React, { useState, useEffect } from "react";
import Helmet from "../components/Helmet/Helmet";
import { Container, Row, Col } from "reactstrap";
import heroImg from "../assets/images/hero-img.png";
import "../styles/home.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Services from "../services/Services";
import Clock from "../components/UI/Clock";
import ProductsList from "../components/UI/ProductsList";
import products from "../assets/data/products";
import counterImg from "../assets/images/counter-timer-img.png";

const Home = () => {
  const [trendingProducts, setTrendingProducts] = useState([]);
  const [bestSalesProducts, setBestSalesProducts] = useState([]);
  const [mobileProducts, setMobileProducts] = useState([]);
  const [wirelessProducts, setWirelessProducts] = useState([]);
  const [popularProducts, setPopularProducts] = useState([]);

  const year = new Date().getFullYear();

  useEffect(() => {
    const filteredTrendingProducts = products.filter(
      (item) => item.category === "chair"
    );

    const filteredBestSalesProducts = products.filter(
      (item) => item.category === "sofa"
    );
    const filteredMobileProducts = products.filter(
      (item) => item.category === "mobile"
    );
    const filteredWirelessProducts = products.filter(
      (item) => item.category === "wireless"
    );
    const filteredPopularProducts = products.filter(
      (item) => item.category === "watch"
    );

    setTrendingProducts(filteredTrendingProducts);
    setBestSalesProducts(filteredBestSalesProducts);
    setWirelessProducts(filteredWirelessProducts);
    setMobileProducts(filteredMobileProducts);
    setPopularProducts(filteredPopularProducts);
  }, []);
  return (
    <Helmet title={"Home"}>
      <secton className="hero_section">
        <Container>
          <Row>
            <Col lg="6" md="6">
              <div className="hero_content">
                <p className="hero_subtitle">Trending ProductS In {year} </p>

                <h2>Make Your Modern Home With Vaibhav Upadhyay</h2>
                <p>
                  1000,00+ Options in Furniture. Online Furniture Shopping in
                  India: Shop from our online store in India for Furniture, Home
                  Decor, Lamps, Furnishings, Homeware and more at best
                  prices.<br></br>
                  8000+ Online shopping for Electronics from a great
                  selection of Smartphones, Basic Mobiles & more at everyday low
                  prices.
                </p>

                <motion.button whileTap={{ scale: 1.2 }} className="buy_btn">
                  <Link to="/shop">SHOP NOW</Link>
                </motion.button>
              </div>
            </Col>
            <Col lg="6" md="6">
              <div className="hero_img">
                <img src={heroImg} alt="" />
              </div>
            </Col>
          </Row>
        </Container>
      </secton>

      {/* services page  */}
      <Services />

      <section className="trending_products">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title">Trending Products</h2>
            </Col>

            {/* crd  */}
            <ProductsList data={trendingProducts} />
          </Row>
        </Container>
      </section>
      <section className="best_sales">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title"> Sale Upto 50% Off</h2>
            </Col>
            <ProductsList data={bestSalesProducts} />
          </Row>
        </Container>
      </section>

      <section className="timer_count">
        <Container>
          <Row>
            <Col lg="6" md="12" className="count_down-col">
              <div className="clock_top-content">
                <h4 className="text-white fs-6 mb-2">Limited Offers</h4>
                <h3 className="text-white fs-5 mb-3">Quality Armchair</h3>
              </div>
              <Clock />
              <motion.button
                whileTap={{ scale: 1.2 }}
                className="buy_btn store_btn"
              >
                <Link to="/shop">Visit Store</Link>
              </motion.button>
            </Col>
            <Col lg="6" md="12" className="text-end counter_img">
              <img src={counterImg} alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="new_arrivals">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title mb-5">New Arrivals</h2>
            </Col>
            <ProductsList data={mobileProducts} />
            <ProductsList data={wirelessProducts} />
          </Row>
        </Container>
      </section>

      <section className="popular_category">
        <Container>
          <Row>
            <Col lg="12" className="text-center">
              <h2 className="section_title mb-5">Popular in Category</h2>
            </Col>
            <ProductsList data={popularProducts} />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default Home;
