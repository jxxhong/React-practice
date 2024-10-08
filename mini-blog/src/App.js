import React from "react";
import{
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import styled from "styled-components";
//pages
import MainPage from './component/page/MainPage';
import PostWritePage from './component/page/PostWritePage';
import PostViewPage from './component/page/PostViewPage';

const MainTitleText = styled.p`
  font-size: 24px;
  font-weight: bold;
  text-algin: center;
`;

function App(props){
  return(
    <BrowserRouter>
      <MainTitleText>mini blog</MainTitleText>
      <Routes>
        <Route index element={<MainPage/>}/>
        <Route path="post-write" element={<PostWritePage/>}/>
        <Route path="post/:postId" element={<PostViewPage/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;