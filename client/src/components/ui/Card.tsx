import { Card, CardActions, CardContent, CardMedia } from "@mui/material";
import type React from "react";

interface CardProps {
  className?: string;
  media?: React.ReactNode;
  content?: React.ReactNode;
  actions?: React.ReactNode;
}

export const GenericCard = (props: CardProps) => {
  return (
    <Card className={props.className}>
      <CardMedia>{props.media}</CardMedia>
      <CardContent>
        {props.content}
      </CardContent>
      <CardActions>{props.actions}</CardActions>
    </Card>
  );
};
