import React, { useEffect, useState } from 'react';
import { Nav, NavItem, NavLink } from "reactstrap";
import classnames from "classnames";

const ProductsFragment = () => {

  const [list, setList] = useState([]);
  useEffect(() => {
    setList([
      {
        id: 1,
        name: 'Engine Oil',
        qty: 1,
        price: 100,
        discount: 0,
        vat: 10,
        image: 'http://192.168.0.176:8040/html/img/placeholder-image-11.png'
      },
      {
        id: 2,
        name: 'Ramen',
        qty: 2,
        price: 200,
        discount: 0,
        vat: 40,
        image: 'http://192.168.0.176:8040/html/img/placeholder-image-11.png'
      },
      {
        id: 3,
        name: 'Milk',
        qty: 1,
        price: 100,
        discount: 0,
        vat: 10,
        image: 'http://192.168.0.176:8040/html/img/placeholder-image-11.png'
      },
      {
        id: 4,
        name: 'Kimchi',
        qty: 1,
        price: 1000,
        discount: 50,
        vat: 50,
        image: 'http://192.168.0.176:8040/html/img/placeholder-image-11.png'
      },
    ]);
  }, []);

  const getExt = it => it.qty * (it.price * (100 - it.discount) / 100);

  return (
    <div className="products">
      <table
        className="table table-td-valign-middle table-th-valign-middle table-bordered table-hover table-responsive-sm bg-white">
        <thead className="bg-inverse text-white">
        <tr>
          <th>No</th>
          <th>Item</th>
          <th>Qty</th>
          <th>Unit,Price</th>
          <th>Discount</th>
          <th>Ext</th>
          <th>VAT</th>
          <th>SUM</th>
        </tr>
        </thead>
        <tbody>
        {
          list.map((it, idx) => (
            <tr key={idx}>
              <td>{idx + 1}</td>
              <td>{it.name}</td>
              <td>{it.qty}</td>
              <td>{it.price.currencyFormat()}</td>
              <td>{it.discount}</td>
              <td>{getExt(it).currencyFormat()}</td>
              <td>{it.vat.currencyFormat()}</td>
              <td>{(getExt(it) + it.vat).currencyFormat()}</td>
            </tr>
          ))
        }
        </tbody>
        <tfoot className="bg-inverse text-white">
        <tr>
          <td colSpan={5}>Total</td>
          <td>1,100</td>
          <td>110</td>
          <td>1,210</td>
        </tr>
        </tfoot>
      </table>
    </div>
  );
};

export default ProductsFragment;
