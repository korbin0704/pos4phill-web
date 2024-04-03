import React from 'react';

const ProductsFragment = ({ list }) => {

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
