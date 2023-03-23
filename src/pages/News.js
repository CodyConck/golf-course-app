import React, { useEffect, useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";

// fetch news
const News = () => {
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);
  const [date, setDate] = useState("");

  useEffect(() => {
    const URL = `https://api.sportsdata.io/golf/v2/json/News?key=24c69ca6a3d246ef91da0ffe95be330a`;
    const fetchData = async () => {
      try {
        const response = await fetch(URL);
        const newsData = await response.json();
        //console.log(newsData);

        for (let i = 0; i < newsData.length; i++) {
          let title = newsData[i].Title;
          let content = newsData[i].Content;
          let date = newsData[i].Updated;

          setTitle(title);
          setContent(content);
          setDate(date);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  //start card functionality
  const ExpandMore = styled((props) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
    marginLeft: "auto",
    transition: theme.transitions.create("transform", {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  // card
  const NewsCard = () => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };
    return (
      <Card className="news-container" sx={{ maxWidth: 345 }}>
        <CardHeader
          // avatar={
          //   // <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
          //   //   R
          //   // </Avatar>
          // }
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={title}
          subheader={date}
        />
        <CardMedia
          component="img"
          height="194"
          image="https://images.unsplash.com/photo-1535131749006-b7f58c99034b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
          alt="golf image placeholder"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
            {content}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <ShareIcon />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Something Else:</Typography>
            <Typography paragraph>TBD</Typography>
            <Typography paragraph>More Stuff</Typography>
            <Typography paragraph>More Stuff</Typography>
            <Typography>More stuff</Typography>
          </CardContent>
        </Collapse>
      </Card>
    );
  };

  return <div>{<NewsCard />}</div>;
};

export default News;
