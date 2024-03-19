import React, { useState } from 'react';
import { Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";
import DeliveryFragment from "./fragment/Delivery";
import ProductsFragment from "./fragment/Products";
import PaymentFragment from "./fragment/Payment";

const Delivery = () => {

  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { tab: 0, title: 'Delivery', view: () => <DeliveryFragment /> },
    { tab: 1, title: 'Products', view: () => <ProductsFragment /> },
    { tab: 2, title: 'Payment', view: () => <PaymentFragment /> },
  ];

  const toggleTab = tab => {
    setActiveTab(tab);
  }

  return (
    <div className="delivery">
      <div className="panel panel-inverse">
        <Nav tabs className="nav-tabs-inverse">
          {tabs.map(menu => (
            <NavItem key={menu.title}>
              <NavLink className={classnames({ active: activeTab === menu.tab })}
                       onClick={() => toggleTab(menu.tab)}>
                <span className="d-none d-xs-inline">{menu.title}</span>
              </NavLink>
            </NavItem>
          ))}
        </Nav>
        <div className="panel-body">
          {tabs.find(it => it.tab === activeTab)?.view()}
        </div>
      </div>
    </div>
  );
};

export default Delivery;
