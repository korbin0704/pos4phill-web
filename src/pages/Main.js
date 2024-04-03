import React, { useState } from 'react';
import MyTable from "../components/MyTable";
import ItemPopup from "./popup/item";

const Main = ({ list, onSave, onDelete }) => {

  const [itemPopup, setItemPopup] = useState({
    isOpen: false,
    info: null,
  });
  const showItemPopup = info => setItemPopup({
    isOpen: true,
    info
  });
  const hideItemPopup = () => setItemPopup({
    isOpen: false,
    info: null
  });

  return (
    <div className="main">
      <MyTable
        data={list}
        onCell={item => showItemPopup(item)}
      />

      <ItemPopup
        isOpen={itemPopup.isOpen}
        info={itemPopup.info}
        onClose={() => hideItemPopup()}
        onSave={item => {
          onSave?.(item);
          hideItemPopup();
        }}
        onDelete={item => {
          onDelete?.(item);
          hideItemPopup();
        }}
      />
    </div>
  );
};

export default Main;
