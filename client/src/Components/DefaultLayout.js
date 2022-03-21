import React from "react";

import { Menu, Dropdown, Button, Row, Col } from "antd";

function DefaultLayout(props) {
  let username = JSON.parse(localStorage.getItem("current_user")) || "User";
  const menu = (
    <Menu>
      <Menu.Item>
        <a href="https://www.antgroup.com">Profile</a>
      </Menu.Item>

      <Menu.Item>
        <a href="https://www.antgroup.com">Home</a>
      </Menu.Item>

      <Menu.Item>
        <a href="https://www.aliyun.com">Bookings</a>
      </Menu.Item>
      <Menu.Item
        onClick={() => {
          localStorage.removeItem("current_user");
          window.location.href = "/login";
        }}
      >
        <li href="https://www.luohanacademy.com">Logout</li>
      </Menu.Item>
    </Menu>
  );
  return (
    <div>
      <div className="header box_shadow1">
        <Row gutter={16}>
          <Col lg={20} sm={24} xs={24}>
            <div className="d-flex heading_div" >
              <h2>KM Automotives</h2>

              <Dropdown overlay={menu} placement="bottomLeft">
                <Button>{(username.name)}</Button>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </div>

      <div className="content">{props.children}</div>
    </div>
  );
}

export default DefaultLayout;
