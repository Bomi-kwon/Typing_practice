import React, {memo, useEffect, useState} from 'react';
import styled from 'styled-components';

const TypingImgContainer = styled.div`
    display: flex;
`;

const TypingPracticeContainer = styled.div`

`;

const TypingTextContainer = styled.div`

`;

const TypingPractice = memo(() => {
    const [practiceText, setPracticeText] = useState('타자 연습을 시작합니다.');

    useEffect(() => {
        console.log('타자 연습 텍스트:', practiceText);
    }, [practiceText]);

  return (
    <div>
      <h2>타자연습</h2>
      <p>타자 연습 페이지입니다.</p>
      <TypingImgContainer>
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-7T1trcejp2Llwn-eG0QvE1BgaNaU2RiVlQ&usqp=CAU" alt="타자 연습 이미지" />
      </TypingImgContainer>
      <TypingPracticeContainer>
        <input type="text" name="typing" onChange={e => {setPracticeText(e.target.value)}}/>
      </TypingPracticeContainer>
      <TypingTextContainer>
        {practiceText}
      </TypingTextContainer>
    </div>
  );
});

export default TypingPractice;