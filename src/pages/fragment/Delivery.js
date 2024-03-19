import React, { useEffect, useState } from 'react';
import dayjs from "dayjs";

const DeliveryFragment = () => {

  const cashiers = [
    {id: 1, name: 'C001'},
    {id: 2, name: 'C002'},
    {id: 3, name: 'C003'},
  ];
  const riders = [
    {id: 1, name: 'R001'},
    {id: 2, name: 'R002'},
    {id: 3, name: 'R003'},
  ];
  const managers = [
    {id: 1, name: 'M001'},
    {id: 2, name: 'M002'},
    {id: 3, name: 'M003'},
  ];

  const [list, setList] = useState([]);
  useEffect(() => {
    setList([
      { status: 'Pending', payment_status: 'D', invoice: '202403010001001', customer: 'Maria', price: 29000, phone: '0102222222', cashier1: 1, rider1: 1, manager1: 1, out: 20, cashier2: 1, rider2: 1, manager2: 1, in: 3, start: dayjs().format('YYMMDD HH:MM'), arrival: dayjs().format('YYMMDD HH:MM')},
      { status: 'Delivery', payment_status: 'O', invoice: '202403010002001', customer: 'Antonio', price: 19000, phone: '0102222222', cashier1: 1, rider1: 2, manager1: 1, out: 10, cashier2: 1, rider2: 2, manager2: 1, in: 4, start: dayjs().format('YYMMDD HH:MM'), arrival: dayjs().format('YYMMDD HH:MM')},
      { status: 'Done', payment_status: 'O', invoice: '202403010003001', customer: 'Thomas', price: 600, phone: '0102222222', cashier1: 1, rider1: 3, manager1: 1, out: 338, cashier2: 1, rider2: 3, manager2: 1, in: 1000, start: dayjs().format('YYMMDD HH:MM'), arrival: dayjs().format('YYMMDD HH:MM')},
      { status: 'Pending', payment_status: 'D', invoice: '202403010004001', customer: 'Christina', price: 9000, phone: '0102222222', cashier1: 1, rider1: 3, manager1: 1, out: 0, cashier2: 1, rider2: 0, manager2: 1, in: 0, start: dayjs().format('YYMMDD HH:MM'), arrival: dayjs().format('YYMMDD HH:MM')},
    ])
  }, []);

  const handleChange = (index, field, value) => {
    setList(prev => prev.map((it, idx) => {
      if (idx === index) {
        it[field] = value;
      }
      return it;
    }));
  }

  return (
    <div className="delivery">
      <table
        className="table table-td-valign-middle table-th-valign-middle table-bordered table-hover table-responsive-sm bg-white">
        <thead className="bg-inverse text-white">
        <tr>
          <th rowSpan={2} />
          <th rowSpan={2}>Status</th>
          <th rowSpan={2}>Payment Status</th>
          <th rowSpan={2}>Invoice No</th>
          <th rowSpan={2}>Customer</th>
          <th rowSpan={2}>Price</th>
          <th rowSpan={2}>Phone</th>
          <th colSpan={8}>Handler</th>
          <th colSpan={2}>Time</th>
        </tr>
        <tr>
          <th>Cashier</th>
          <th>Rider</th>
          <th>Manager</th>
          <th>Out</th>
          <th>Cashier</th>
          <th>Rider</th>
          <th>Manager</th>
          <th>In</th>
          <th>Start</th>
          <th>Arrival</th>
        </tr>
        </thead>
        <tbody>
        {
          list.map((it, idx) => (
            <tr key={idx}>
              <td><input type="checkbox" /></td>
              <td>
                <select className="form-control" onChange={e => handleChange(idx, 'status', e.target.value)} value={it.status}>
                  <option value="Pending">Pending</option>
                  <option value="Delivery">Delivery</option>
                  <option value="Done">Done</option>
                </select>
              </td>
              <td>
                <select className="form-control" onChange={e => handleChange(idx, 'payment_status', e.target.value)} value={it.payment_status}>
                  <option value="D">Done</option>
                  <option value="O">On-Site</option>
                </select>
              </td>
              <td>{it.invoice}</td>
              <td>{it.customer}</td>
              <td>{it.price.currencyFormat()}</td>
              <td>{it.phone}</td>
              <td>
                <select className="form-control" onChange={e => handleChange(idx, 'cashier1', e.target.value)} value={it.cashier1}>
                  <option value="0">&nbsp;</option>
                {
                  cashiers.map(it => (
                    <option key={it.id} value={it.id}>{it.name}</option>
                  ))
                }
                </select>
              </td>
              <td>
                <select className="form-control" onChange={e => handleChange(idx, 'rider1', e.target.value)} value={it.rider1}>
                  <option value="0">&nbsp;</option>
                {
                  riders.map(it => (
                    <option key={it.id} value={it.id}>{it.name}</option>
                  ))
                }
                </select>
              </td>
              <td>
                <select className="form-control" onChange={e => handleChange(idx, 'manager1', e.target.value)} value={it.manager1}>
                  <option value="0">&nbsp;</option>
                {
                  managers.map(it => (
                    <option key={it.id} value={it.id}>{it.name}</option>
                  ))
                }
                </select>
              </td>
              <td>{it.out.currencyFormat()}</td>
              <td>
                <select className="form-control" onChange={e => handleChange(idx, 'cashier2', e.target.value)} value={it.cashier2}>
                  <option value="0">&nbsp;</option>
                  {
                    cashiers.map(it => (
                      <option key={it.id} value={it.id}>{it.name}</option>
                    ))
                  }
                </select>
              </td>
              <td>
                <select className="form-control" onChange={e => handleChange(idx, 'rider2', e.target.value)} value={it.rider2}>
                  <option value="0">&nbsp;</option>
                  {
                    riders.map(it => (
                      <option key={it.id} value={it.id}>{it.name}</option>
                    ))
                  }
                </select>
              </td>
              <td>
                <select className="form-control" onChange={e => handleChange(idx, 'manager2', e.target.value)} value={it.manager2}>
                  <option value="0">&nbsp;</option>
                  {
                    managers.map(it => (
                      <option key={it.id} value={it.id}>{it.name}</option>
                    ))
                  }
                </select>
              </td>
              <td>{it.in.currencyFormat()}</td>
              <td>{it.start}</td>
              <td>{it.arrival}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
    </div>
  );
};

export default DeliveryFragment;
