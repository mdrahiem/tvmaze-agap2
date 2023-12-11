import styled from "@emotion/styled";
import React from "react";
import Card from "./reusable/card";

const CardTitle = styled.h2({
  fontSize: "18px",
  marginBottom: "0px",
  color: "#000000",
  textAlign: "center",
});

const CardImage = styled.img({
  width: "100%",
  height: "auto",
  borderRadius: "8px",
});

interface CardProps {
  title: string;
  imgUrl: string;
}

const HomeCard: React.FC<CardProps> = ({ title, imgUrl }) => {
  return (
    <Card>
      <CardImage src={imgUrl} alt="placeholder" />
      <CardTitle>{title}</CardTitle>
    </Card>
  );
};

export default HomeCard;
