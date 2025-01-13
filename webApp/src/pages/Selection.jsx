import { useState } from "react";
import CustomSelect from "../components/Custom_select";
import PaymentsIcon from "@mui/icons-material/Payments";

const PaymentIcon = () => {
  return (
    <div className="w-[28px] absolute left-3">
      <PaymentsIcon className="text-gray-400" />
    </div>
  );
};

function Selection() {
  const [options, setOptions] = useState([
    {
      label: "Option 1",
      value: "opt1",
    },
    {
      label: "Option 2",
      value: "opt2",
    },
    {
      label: "Option 3",
      value: "opt3",
    },
  ]);

  const handleChangeSelect = (e) => {
    console.log(e);
  };

  return (
    <div className="App">
      <CustomSelect
        options={options}
        placeholder="Please select..."
        onChange={(e) => handleChangeSelect(e)}
        isSearchable={false}
        Icon={PaymentIcon}
      />
    </div>
  );
}

export default Selection;
