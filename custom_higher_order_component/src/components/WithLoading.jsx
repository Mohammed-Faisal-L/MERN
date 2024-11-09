import React from "react";

const WithLoading = (WrappedComponent) => {
  return (props) => {
    return props.isLoading ? (
      <div>Loading...</div>
    ) : (
      <WrappedComponent {...props} />
    );
  };
};

export default WithLoading;
