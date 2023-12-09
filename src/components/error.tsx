import React from "react";

interface ErrorProps {
  children?: React.ReactNode;
}

const Error: React.FC<ErrorProps> = ({ children }) => {
  return <div className="error">{children}</div>;
};

export default Error;
