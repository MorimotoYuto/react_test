import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

const CustomCard = () => {
  return (
    <Card sx={{ maxWidth: 500 }}>
      <CardMedia
        component="img"
        height="300"
        image="/images/test.png" // ここに表示したい画像のURLを入れる
        alt="Placeholder Image"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          モンキー・D・ルフィ
        </Typography>
        <Typography variant="body2" color="text.secondary">
          test
        </Typography>
      </CardContent>
    </Card>
  );
};

export default CustomCard;
