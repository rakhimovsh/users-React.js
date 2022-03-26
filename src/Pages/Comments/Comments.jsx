import React from "react";
import { useParams } from "react-router-dom";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";

function Comments() {
  const params = useParams();
  const [commits, setCommits] = React.useState();
  React.useEffect(() => {
    const handleComments = fetch(
      `https://jsonplaceholder.typicode.com/comments/`
    )
      .then((res) => res.json())
      .then((data) => setCommits(data));
  }, []);
  const postComments = commits?.filter(
    (commit) => commit.postId == params.postId
  );
  return (
    <div style={{ marginTop: "80px" }} className="container">
      <ul className="row">
        {postComments?.length > 0 &&
          postComments?.map((Comment) => (
            <li className="col-4 g-3" key={Comment.id}>
              <Card sx={{ minWidth: 275 }}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    Title: {Comment.name}
                  </Typography>

                  <Typography sx={{ mb: 1.5 }} color="text.white">
                    Text: {Comment.body}
                  </Typography>
                </CardContent>
              </Card>
            </li>
          ))}
      </ul>
    </div>
  );
}

export default Comments;
