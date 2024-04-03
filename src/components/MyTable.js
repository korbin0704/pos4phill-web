import React, { useEffect, useRef } from "react";

const MyTable = ({ data, onCell }) => {

  const getExt = it => it.qty * (it.price * (100 - it.discount) / 100);

  const headerRef = useRef(null);
  const bodyHeaderRef = useRef(null);
  const bodyFooterRef = useRef(null);
  const footerRef = useRef(null);

  /*useEffect(() => {
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
  }, [data]);*/

  return (
    <div className="table-wrapper">
      <div className="wrapper-header bg-inverse" ref={headerRef}>
        <div style={{width: '8%'}}>No</div>
        <div style={{width: '22%'}}>Item</div>
        <div style={{width: '10%'}}>Qty</div>
        <div style={{width: '12%'}}>Unit,Price</div>
        <div style={{width: '12%'}}>Discount</div>
        <div style={{width: '10%'}}>Ext</div>
        <div style={{width: '10%'}}>VAT</div>
        <div style={{width: '16%'}}>SUM</div>
      </div>
      <div className="wrapper-body">
        <table
          className="table table-td-valign-middle table-th-valign-middle table-bordered table-hover table-responsive-sm bg-white m-b-0 border-bottom-0">
          <thead className="bg-inverse text-white">
          <tr ref={bodyHeaderRef}>
            <th style={{width: '8%'}}>No</th>
            <th style={{width: '22%'}}>Item</th>
            <th style={{width: '10%'}}>Qty</th>
            <th style={{width: '12%'}}>Unit,Price</th>
            <th style={{width: '12%'}}>Discount</th>
            <th style={{width: '10%'}}>Ext</th>
            <th style={{width: '10%'}}>VAT</th>
            <th style={{width: '16%'}}>SUM</th>
          </tr>
          </thead>
          <tbody>
          {
            data.map((it, idx) => (
              <tr key={idx} onClick={() => onCell?.(it)}>
                <td>{idx + 1}</td>
                <td>{it.name}</td>
                <td>{it.qty.currencyFormat()}</td>
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
        <div style={{width: '64%'}}>Total</div>
        <div style={{width: '10%'}}>1,100</div>
        <div style={{width: '10%'}}>110</div>
        <div style={{width: '16%'}}>1,210</div>
      </div>
    </div>
  )
};

export default MyTable;
