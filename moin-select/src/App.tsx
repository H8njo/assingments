import React, { useState } from 'react';
import Select from './components/Select';

import type { Option } from './components/Select';
import { fetchTop100Films } from './utils/fetchTop100Films';

function App() {
  const [value1, setValue1] = useState<string | null>(null);
  const [value2, setValue2] = useState<string | null>(null);
  const [value3, setValue3] = useState<string | null>(null);

  const options1: Option[] = [
    { value: 'lorem1', label: 'Lorem Ipsum is simply dummy text ' },
    { value: 'lorem2', label: 'of the printing and typesetting industry.' },
    { value: 'lorem3', label: 'Lorem Ipsum' },
    { value: 'lorem4', label: "has been the industry's standard" },
    { value: 'lorem5', label: 'dummy text ever since the 1500s,' },
    { value: 'lorem6', label: 'when an unknown,' },
    { value: 'lorem7', label: 'printer took' },
  ];

  return (
    <div className="App">
      <div style={{ padding: 30 }}>
        <h1>Select 컴포넌트 과제</h1>

        <h2>배열 옵션</h2>
        <Select
          value={value1}
          options={options1}
          onChange={(value) => setValue1(value)}
        />
        <p>선택된 값: {value1 || 'None'}</p>

        <div style={{ height: 800 }}>
          <h2>비동기 함수 옵션</h2>
          <Select
            value={value2}
            options={fetchTop100Films}
            onChange={(value) => setValue2(value)}
          />
          <p>선택된 값: {value2 || 'None'}</p>
        </div>

        <h2>스크린 밖 Option 테스트용</h2>
        <Select
          value={value3}
          options={options1}
          onChange={(value) => setValue3(value)}
        />
        <p>선택된 값: {value3 || 'None'}</p>
      </div>
    </div>
  );
}

export default App;
