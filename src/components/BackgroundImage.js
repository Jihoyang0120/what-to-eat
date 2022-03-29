import React from "react";
import styled from "styled-components";

const ReplaceImage = styled.img`
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 20px;
  @media screen and (max-width: 700px) {
    width: 95%;
  }
`;

const LoadingImage = styled.img`
  margin: 0 auto;
  margin-top: 30px;
  border-radius: 20px;
  @media screen and (max-width: 700px) {
    width: 95%;
  }
`;

const BackgroundImage = ({ loading }) => {
  return (
    <>
      {loading ? (
        <LoadingImage src="https://lazy-note.s3.ap-northeast-2.amazonaws.com/loading.gif" />
      ) : (
        <ReplaceImage src="https://lazy-note.s3.ap-northeast-2.amazonaws.com/before_eating.gif" />
      )}
    </>
  );
};

export default BackgroundImage;
