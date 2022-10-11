import React from "react";
import { SpinningCircleLoader } from "react-loaders-kit";
import styled from "styled-components";

const Loader = () => {
  const loaderProps = {
    loading: true,
    size: 120,
    duration: 1,
    colors: ["#E01E5A"],
  };

  return (
    <LoaderWrapper>
      <SpinningCircleLoader {...loaderProps} />
    </LoaderWrapper>
  );
};

const LoaderWrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  margin: auto auto;
  flex-direction: column;
  align-content: center;
  justify-content: center;
  align-items: center;
`;

export default Loader;
