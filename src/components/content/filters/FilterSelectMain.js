import React from "react";
import { Select } from "antd";

const { Option } = Select;

const onChange = (val) => {
  console.log(`selected ${val}`);
};

const onSearch = (val) => {
  console.log("search:", val);
};
const FilterSelectMain = () => {
  return (
    <Select
      showSearch
      placeholder="Select a person"
      optionFilterProp="children"
      onChange={onChange}
      onSearch={onSearch}
      filterOption={(input, option) =>
        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
      }
    >
      <Option value="jack">Jack</Option>
      <Option value="lucy">Lucy</Option>
      <Option value="tom">Tom</Option>
    </Select>
  );
};

export default FilterSelectMain;
