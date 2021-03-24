import axios from "axios";
import { useEffect, useState } from "react";
import Select from "react-select";

const SelectMentees = ({value, onChange}) => {
  const [mentees, setMentees] = useState([]);

  useEffect(() => {
    async function getMentees() {
      try {
        const { data } = await axios.get(
          "http://localhost:3001/api/mentees"
        );

        console.log(data);
        setMentees(data.map((el) => ({ value: el._id, label: el.menteeId.name })));
      } catch (ex) {
        console.log(ex);
      }
    }

    getMentees()
  }, []);

  return <Select value={value} onChange={onChange} options={mentees}  label='Select Mentee' isMulti={true} />;
};

export default SelectMentees;