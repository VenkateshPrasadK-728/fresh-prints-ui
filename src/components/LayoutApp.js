import React, { Component } from "react";
import { Layout, Header, Navigation, Drawer, Content } from "react-mdl";
import Main from "./Main";
import { Link } from "react-router-dom";

class LayoutApp extends Component {
  render() {
    return (
      <div className="demo-big-content">
        <Layout>
          <Header
            className="header-color"
            title={
              <Link
                style={{
                  fontSize: "34px",
                  textDecoration: "none",
                  color: "white",
                }}
                to="/"
              >
                DashBoard
              </Link>
            }
            scroll
          >
            <Navigation>
              <Link style={{ fontSize: "20px" }} to="/">
                Home
              </Link>
              <Link style={{ fontSize: "20px" }} to="/">
                Contact
              </Link>
            </Navigation>
          </Header>
          <Drawer
            title={
              <Link style={{ textDecoration: "none", color: "black" }} to="/">
                DashBoard
              </Link>
            }
          >
            <Navigation>
              <Link style={{ fontSize: "20px" }} to="/Reports">
                Reports
              </Link>
              <Link style={{ fontSize: "20px" }} to="/Settings">
                Setting
              </Link>
            </Navigation>
          </Drawer>
          <Content>
            <div className="page-content" />
            <Main />
          </Content>
        </Layout>
      </div>
    );
  }
}

export default LayoutApp;
