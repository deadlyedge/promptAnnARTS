// 写一个react typescript 上下文管理
// 名字叫做otherContext


import React, { createContext, useContext, useState } from 'react'

const otherContext = createContext({
  name: 'otherContext',
  age: 18
  // 这里叫做value
  // 这里叫做state
  // 这里叫做action
}

)

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

// 这两�',['../index.html',1,'']]]

// export default otherContext;

// this is a aws codewisperer demo