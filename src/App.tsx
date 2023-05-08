import React, { useState } from "react";

import { Button, DatePicker, Input, Space } from "antd";

function App() {
  const [count, setCounts] = useState("");
  const onChange = (e: any) => {
    setCounts(e.target.value);
  };
  return (
    <>
      <h2>webpack5+react+ts</h2>
      <p>受控组件{count}</p>
      <input type="text" value={count} onChange={onChange} />
      <br />
      <p>非受控组件</p>
      <Space>
        <Input style={{ width: "150px" }} />
        <Button type="primary">按钮</Button>
        <DatePicker/>
      </Space>
    </>
  );
}
export default App;
