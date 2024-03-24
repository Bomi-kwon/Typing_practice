import React, {memo} from 'react';
import { Routes, Route } from 'react-router-dom';
// 경로와 컴포넌트 대응시켜줌

import MenuLink from './components/MenuLink'; // 메뉴 꾸미기
import TypingPractice from './pages/TypingPractice'; // 타자 연습
// 1) pages 폴더의 TypingPractice.js 파일을 찾음
// 2) 없으면 pages > TypingPractice > index.js 파일을 찾음
// 한페이지에 보여줄 게 별로 없어도 폴더 구조로 만드는 것이 나음

const App = memo(() => {
  return (
    <div>
      <h1>App</h1>
      
      <nav>
        <MenuLink to="/typing-practice">타자 연습</MenuLink>
      </nav>

      <Routes>
        <Route path="/typing-practice" element={<TypingPractice />} />
      </Routes>
    </div>
  );
});

export default App;