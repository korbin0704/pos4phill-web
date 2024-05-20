import React, { useEffect, useState } from 'react';
import dayjs from "dayjs";
import DateTime from 'react-datetime';
import classnames from "classnames";

const DeliveryFragment = () => {

  const cashiers = [
    { id: 1, name: 'C001' },
    { id: 2, name: 'C002' },
    { id: 3, name: 'C003' },
  ];
  const riders = [
    { id: 1, name: 'R001' },
    { id: 2, name: 'R002' },
    { id: 3, name: 'R003' },
  ];
  const managers = [
    { id: 1, name: 'M001' },
    { id: 2, name: 'M002' },
    { id: 3, name: 'M003' },
  ];

  const [status, setStatus] = useState([]);
  const [today, toggleToday] = useState(false);
  const [week, toggleWeek] = useState(false);
  const [month, toggleMonth] = useState(false);
  const [from, setFrom] = useState('');
  const [to, setTo] = useState('');

  const toggleStatus = value => {
    setStatus(prev => prev.includes(value) ? prev.filter(it => it !== value) : prev.concat(value));
  }

  const setDate = days => {
    toggleToday(days === 1);
    toggleWeek(days === 7);
    toggleMonth(days === 30);

    switch (days) {
      case 1:
        setFrom(dayjs().format('YYYY-MM-DD'));
        setTo(dayjs().format('YYYY-MM-DD'));
        break;
      case 7:
        setFrom(dayjs().startOf('week').format('YYYY-MM-DD'));
        setTo(dayjs().endOf('week').format('YYYY-MM-DD'));
        break;
      case 30:
        setFrom(dayjs().startOf('month').format('YYYY-MM-DD'));
        setTo(dayjs().endOf('month').format('YYYY-MM-DD'));
        break;
      default:
    }
  }

  const onSearch = () => {
  }

  const [list, setList] = useState([]);
  useEffect(() => {
    setList([
      {
        status: 'Pending',
        payment_status: 'D',
        invoice: '202403010001001',
        customer: 'Maria',
        price: 29000,
        phone: '0102222222',
        cashier1: 1,
        rider1: 1,
        manager1: 1,
        out: 20,
        cashier2: 1,
        rider2: 1,
        manager2: 1,
        in: 3,
        start: dayjs().format('YYMMDD HH:MM'),
        arrival: dayjs().format('YYMMDD HH:MM')
      },
      {
        status: 'Delivery',
        payment_status: 'O',
        invoice: '202403010002001',
        customer: 'Antonio',
        price: 19000,
        phone: '0102222222',
        cashier1: 1,
        rider1: 2,
        manager1: 1,
        out: 10,
        cashier2: 1,
        rider2: 2,
        manager2: 1,
        in: 4,
        start: dayjs().format('YYMMDD HH:MM'),
        arrival: dayjs().format('YYMMDD HH:MM')
      },
      {
        status: 'Done',
        payment_status: 'O',
        invoice: '202403010003001',
        customer: 'Thomas',
        price: 600,
        phone: '0102222222',
        cashier1: 1,
        rider1: 3,
        manager1: 1,
        out: 338,
        cashier2: 1,
        rider2: 3,
        manager2: 1,
        in: 1000,
        start: dayjs().format('YYMMDD HH:MM'),
        arrival: dayjs().format('YYMMDD HH:MM')
      },
      {
        status: 'Pending',
        payment_status: 'D',
        invoice: '202403010004001',
        customer: 'Christina',
        price: 9000,
        phone: '0102222222',
        cashier1: 1,
        rider1: 3,
        manager1: 1,
        out: 0,
        cashier2: 1,
        rider2: 0,
        manager2: 1,
        in: 0,
        start: dayjs().format('YYMMDD HH:MM'),
        arrival: dayjs().format('YYMMDD HH:MM')
      },
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

  const onStartPrint = () => {
    if (!window.confirm('Are ou sure to print?')) {
      return;
    }

    // do sth
  }

  const onStart = () => {
    if (!window.confirm('Are ou sure to begin Delivery?')) {
      return;
    }
  }

  const onArrivalPrint = () => {
    if (!window.confirm('Are you sure to print?')) {
      return;
    }
  }

  const onArrival = () => {
  }

  const onRollback = () => {
  }

  const onRemove = () => {
  }

  return (
    <div className="delivery">
      <div className="form-inline m-b-5">
        <button
          className={classnames(["btn", status.includes('Pending') ? "btn-success" : "btn-outline-primary"])}
          onClick={() => toggleStatus('Pending')}>
          Pending
        </button>
        <button
          className={classnames(["btn m-l-5", status.includes('Delivery') ? "btn-success" : "btn-outline-primary"])}
          onClick={() => toggleStatus('Delivery')}>
          Delivery
        </button>
        <button className={classnames(["btn m-l-5", status.includes('Done') ? "btn-success" : "btn-outline-primary"])}
                onClick={() => toggleStatus('Done')}>
          Done
        </button>
        <button
          className={classnames(["btn m-l-5", status.includes('Cancel') ? "btn-success" : "btn-outline-primary"])}
          onClick={() => toggleStatus('Cancel')}>
          Cancel
        </button>
      </div>
      <div className="form-inline m-b-15">
        <button className={classnames(["btn", today ? "btn-success" : "btn-outline-primary"])}
                onClick={() => setDate(1)}>
          Today
        </button>
        <button className={classnames(["btn m-l-5", week ? "btn-success" : "btn-outline-primary"])}
                onClick={() => setDate(7)}>
          Week
        </button>
        <button className={classnames(["btn m-l-5", month ? "btn-success" : "btn-outline-primary"])}
                onClick={() => setDate(30)}>
          Month
        </button>
        <DateTime
          dateFormat={'YYYY-MM-DD'}
          timeFormat={false}
          value={from}
          closeOnSelect={true}
          className="m-l-5"
          onChange={(e) => {
            if (typeof e === 'string') {
              setFrom(e);
            } else {
              setFrom(e.format('YYYY-MM-DD'));
            }
          }} />
        <label>&nbsp;~&nbsp;</label>
        <DateTime
          dateFormat={'YYYY-MM-DD'}
          timeFormat={false}
          value={to}
          closeOnSelect={true}
          className=""
          onChange={(e) => {
            if (typeof e === 'string') {
              setTo(e);
            } else {
              setTo(e.format('YYYY-MM-DD'));
            }
          }} />
        <button className="btn btn-primary m-l-10" onClick={onSearch}>Search</button>
      </div>
      <h3><u>Infor</u></h3>
      <table
        className="table table-td-valign-middle table-th-valign-middle table-bordered table-hover table-responsive-sm bg-white">
        <thead className="bg-inverse text-white">
        <tr className="text-center">
          <th rowSpan={2} />
          <th rowSpan={2}>Status</th>
          <th rowSpan={2}>Payment Status</th>
          <th rowSpan={2}>Invoice No</th>
          <th rowSpan={2}>Customer</th>
          <th rowSpan={2}>Price</th>
          <th rowSpan={2}>Phone</th>
          <th colSpan={2}>Time</th>
        </tr>
        <tr className="text-center">
          <th>Start</th>
          <th>Arrival</th>
        </tr>
        </thead>
        <tbody>
        {
          list.map((it, idx) => (
            <tr key={idx} className="text-center">
              <td><input type="checkbox" /></td>
              <td>
                <select className="form-control" onChange={e => handleChange(idx, 'status', e.target.value)}
                        value={it.status}>
                  <option value="Pending">Pending</option>
                  <option value="Delivery">Delivery</option>
                  <option value="Done">Done</option>
                </select>
              </td>
              <td>
                <select className="form-control" onChange={e => handleChange(idx, 'payment_status', e.target.value)}
                        value={it.payment_status}>
                  <option value="D">Done</option>
                  <option value="O">On-Site</option>
                </select>
              </td>
              <td>{it.invoice}</td>
              <td>{it.customer}</td>
              <td>{it.price.currencyFormat()}</td>
              <td>{it.phone}</td>
              <td>{it.start}</td>
              <td>{it.arrival}</td>
            </tr>
          ))
        }
        </tbody>
      </table>
      <h3><u>Handler</u></h3>
      <table
        className="table table-td-valign-middle table-th-valign-middle table-bordered table-hover table-responsive-sm bg-white">
        <thead className="bg-inverse text-white">
        <tr className="text-center">
          <th colSpan={4}>Start</th>
          <th colSpan={4}>Arrival</th>
        </tr>
        <tr className="text-center">
          <th>Cashier</th>
          <th>Rider</th>
          <th>Manager</th>
          <th>Deposit</th>
          <th>Cashier</th>
          <th>Rider</th>
          <th>Manager</th>
          <th>Change</th>
        </tr>
        </thead>
        <tbody>
        {
          list.filter((it, idx) => idx < 1).map((it, idx) => (
            <tr key={idx} className="text-center">
              <td>
                <select className="form-control" onChange={e => handleChange(idx, 'cashier1', e.target.value)}
                        value={it.cashier1}>
                  <option value="0">&nbsp;</option>
                  {
                    cashiers.map(it => (
                      <option key={it.id} value={it.id}>{it.name}</option>
                    ))
                  }
                </select>
              </td>
              <td>
                <select className="form-control" onChange={e => handleChange(idx, 'rider1', e.target.value)}
                        value={it.rider1}>
                  <option value="0">&nbsp;</option>
                  {
                    riders.map(it => (
                      <option key={it.id} value={it.id}>{it.name}</option>
                    ))
                  }
                </select>
              </td>
              <td>
                <select className="form-control" onChange={e => handleChange(idx, 'manager1', e.target.value)}
                        value={it.manager1}>
                  <option value="0">&nbsp;</option>
                  {
                    managers.map(it => (
                      <option key={it.id} value={it.id}>{it.name}</option>
                    ))
                  }
                </select>
              </td>
              <td>
                <input type="text" className="form-control" value={it.out}
                       onChange={e => handleChange(idx, 'out', e.target.value)} />
              </td>
              <td>
                <select className="form-control" onChange={e => handleChange(idx, 'cashier2', e.target.value)}
                        value={it.cashier2}>
                  <option value="0">&nbsp;</option>
                  {
                    cashiers.map(it => (
                      <option key={it.id} value={it.id}>{it.name}</option>
                    ))
                  }
                </select>
              </td>
              <td>
                <select className="form-control" onChange={e => handleChange(idx, 'rider2', e.target.value)}
                        value={it.rider2}>
                  <option value="0">&nbsp;</option>
                  {
                    riders.map(it => (
                      <option key={it.id} value={it.id}>{it.name}</option>
                    ))
                  }
                </select>
              </td>
              <td>
                <select className="form-control" onChange={e => handleChange(idx, 'manager2', e.target.value)}
                        value={it.manager2}>
                  <option value="0">&nbsp;</option>
                  {
                    managers.map(it => (
                      <option key={it.id} value={it.id}>{it.name}</option>
                    ))
                  }
                </select>
              </td>
              <td>
                <input type="text" className="form-control" value={it.in}
                       onChange={e => handleChange(idx, 'in', e.target.value)} />
              </td>
            </tr>
          ))
        }
        </tbody>
      </table>
      <div className="bottom-button">
        <div className="button-set">
          <h4 className="control-label">START</h4>
          <div className="btn-group">
            <button className="btn btn-lg btn-info" onClick={onStartPrint}>Print</button>
            <button className="btn btn-lg btn-success" onClick={onStart}>START & OPEN</button>
          </div>
        </div>
        <div className="button-set">
          <h4 className="control-label">ARRIVAL</h4>
          <div className="btn-group">
            <button className="btn btn-lg btn-info" onClick={onArrivalPrint}>Print</button>
            <button className="btn btn-lg btn-success" onClick={onArrival}>DONE & OPEN</button>
          </div>
        </div>
        <div className="button-set">
          <h4 className="control-label">EDIT</h4>
          <div className="btn-group">
            <button className="btn btn-lg btn-dark" onClick={onRollback}>ROLLBACK</button>
            <button className="btn btn-lg btn-danger" onClick={onRemove}>REMOVE</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryFragment;
