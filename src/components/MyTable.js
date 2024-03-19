import React, { useEffect, useRef } from "react";

const MyTable = ({ data, onCell }) => {

  const getExt = it => it.qty * (it.price * (100 - it.discount) / 100);

  const headerRef = useRef(null);
  const bodyHeaderRef = useRef(null);
  const bodyFooterRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    setTimeout(() => {
      const headerTr = headerRef.current;
      const bodyHeaderTr = bodyHeaderRef.current;
      const bodyFooterTr = bodyFooterRef.current;
      const footerTr = footerRef.current;

      if (headerTr?.childNodes[0].offsetWidth === bodyHeaderTr?.childNodes[0].offsetWidth) {
        return;
      }

      headerTr?.childNodes.forEach((th, idx) => {
        th.style.width = `${bodyHeaderTr.childNodes[idx].offsetWidth}px`;
        th.style.height = `${bodyHeaderTr.childNodes[idx].offsetHeight}px`;
      });
      footerTr?.childNodes.forEach((th, idx) => {
        th.style.width = `${bodyFooterTr.childNodes[idx].offsetWidth}px`;
        th.style.height = `${bodyFooterTr.childNodes[idx].offsetHeight}px`;
      });
    }, 500);
  }, [data]);

  return (
    <div className="table-wrapper">
      <div className="wrapper-header bg-inverse" ref={headerRef}>
        <div>No</div>
        <div>Item</div>
        <div>Qty</div>
        <div>Unit,Price</div>
        <div>Discount</div>
        <div>Ext</div>
        <div>VAT</div>
        <div>SUM</div>
      </div>
      <div className="wrapper-body">
        <table
          className="table table-td-valign-middle table-th-valign-middle table-bordered table-hover table-responsive-sm bg-white m-b-0 border-bottom-0">
          <thead className="bg-inverse text-white">
          <tr ref={bodyHeaderRef}>
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
            data.map((it, idx) => (
              <tr key={idx} onClick={() => onCell?.(it)}>
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
          <tfoot className="bg-inverse text-white invisible">
          <tr ref={bodyFooterRef}>
            <td className="border-0" colSpan={5}>Total</td>
            <td className="border-0">1,100</td>
            <td className="border-0">110</td>
            <td className="border-0">1,210</td>
          </tr>
          </tfoot>
        </table>
      </div>
      <div className="wrapper-footer bg-inverse" ref={footerRef}>
        <div>Total</div>
        <div>1,100</div>
        <div>110</div>
        <div>1,210</div>
      </div>
    </div>
  )
};

export default MyTable;
