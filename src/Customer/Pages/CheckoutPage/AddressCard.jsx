import { Button, IconButton, Radio } from "@mui/material";
import React from "react";
import { MdDelete } from "react-icons/md";

const AddressCard = ({ addr, onSelect, selected, onDelete }) => {
  return (
    <div className="!bg-white !p-4 !rounded-xl !shadow !flex !items-start !gap-4">
      <Radio
        checked={selected === addr.id}
        onChange={() => onSelect(addr.id)}
        value={addr.id}
        name="addressRadio"
        color="primary"
      />

      <div className="w-full">
        <div className="!flex justify-between items-center">
          <p className="!font-semibold">{addr.name}</p>
          <IconButton onClick={() => onDelete(addr)}>
            <MdDelete color="red" />
          </IconButton>
        </div>
        <p>
          {addr.street}, {addr.city}, {addr.state} - {addr.zip}
        </p>
        <p><b>Mobile :</b> {addr.phone}</p>
      </div>
    </div>
  );
};

export default AddressCard;
