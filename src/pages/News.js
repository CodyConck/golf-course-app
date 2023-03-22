import React, { useEffect, useState } from "react";

const News = () => {
  const [title, setTitle] = useState([]);
  const [content, setContent] = useState([]);

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
          // console.log(content);

          setTitle(title);
          setContent(content);
        }
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="news-container">
      <div>{title}</div>
      <div>{content}</div>
    </div>
  );
};

export default News;
