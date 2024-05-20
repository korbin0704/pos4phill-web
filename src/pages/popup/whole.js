import { Modal, ModalBody, ModalHeader } from "reactstrap";
import React, { useState } from "react";
import Select from "react-select";

const WholeSalePopup = ({ isOpen, onClose }) => {

  const [wholeSale, setWholeSale] = useState(null);
  const [data, setData] = useState([
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' }
  ]);
  const [keyword, setKeyword] = useState('');
  const [list, setList] = useState([
    { company: '0415 Market', code: '0010', manager: 'John', telephone: '094-3223-1232', mobile: '010-1234-1232' },
    { company: 'Urals Restaurant', code: '0020', manager: 'Jack', telephone: '094-3223-1232', mobile: '010-1234-1232' },
    { company: 'KyungJu Food', code: '0030', manager: 'Larry', telephone: '094-3223-1232', mobile: '010-1234-1232' },
  ]);

  const toggleModal = result => {
    onClose?.(result);
  }

  const onSearch = () => {
  }

  const onApply = () => {
  }

  return (
    <Modal isOpen={isOpen} size={'md'} toggle={toggleModal} style={{ width: 800 }}>
      <ModalHeader className="popup-title" toggle={toggleModal}>
        Whole Sale
      </ModalHeader>
      <ModalBody>
        <div className="d-flex flex-column">
          <div className="form-inline">
            <label className="control-label form-control-lg">Whole Sale:&nbsp;&nbsp;</label>
            {/*<Select options={data} className="flex-fill" classNamePrefix={"my-pick"} value={wholeSale} onChange={e => setWholeSale(e)} />*/}
            <input type="text" className="form-control" value={keyword} onChange={e => setKeyword(e.target.value)}
                   style={{ flex: 1 }} />
            <button className="btn btn-info m-l-10" onClick={onSearch}>Search</button>
          </div>
          <div style={{ maxHeight: 400, overflowY: 'auto' }}>
            <table className="table table-bordered">
              <thead>
              <tr>
                <th>#</th>
                <th>Company</th>
                <th>Code</th>
                <th>Manager</th>
                <th>Telephone</th>
                <th>Mobile</th>
              </tr>
              </thead>
              <tbody>
              {
                list.map((it, idx) => (
                  <tr key={idx}>
                    <td>
                      <input type="checkbox" />
                    </td>
                    <td>{it.company}</td>
                    <td>{it.code}</td>
                    <td>{it.manager}</td>
                    <td>{it.telephone}</td>
                    <td>{it.mobile}</td>
                  </tr>
                ))
              }
              </tbody>
            </table>
          </div>
          <button className="btn btn-success btn-lg m-t-25" onClick={onApply}>Apply</button>
        </div>
      </ModalBody>
    </Modal>
  );
};

export default WholeSalePopup;
