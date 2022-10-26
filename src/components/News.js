import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const News = (props) => {
  const divStyle = {
    backgroundColor: "rgb(242, 242, 242)",
    borderRadius: "10px",
    padding: "10px",
  };

  return (
    <div style={divStyle}>
      {/* <Card sx={{ maxWidth: 345 }}>
        <CardMedia component="img" height="140" image={props.article.urlToImage} alt="green iguana" />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {props.article.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {props.article.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Share</Button>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card> */}
      <img style={{ height: "200px" }} src={props.article.urlToImage}></img>
      <h3 style={{ color: "blue" }}> {props.article.title}</h3>
      <p> {props.article.description}</p>
      <button style={{ color: "blue" }}>read more</button>
      <hr></hr>
    </div>
  );
};

export default News;
