import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useNavigate } from "react-router-dom";
import { Context as ThemeContext } from "../../Contexts/Theme/Theme";
import "./Users.scss";
function Users() {
  const navigate = useNavigate();
  const { checked } = React.useContext(ThemeContext);
  const [users, setUsers] = React.useState([]);
  React.useEffect(() => {
    const handleUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    };
    handleUsers();
  }, []);

  return (
    <main className={`${checked ? "back--dark" : ""}`}>
      <div className={`container`} style={{ marginTop: "75px" }}>
        <ul className="row">
          {users.map((user) => (
            <li className="col-4 g-3" key={user.id}>
              <Card
                className={`${checked ? "back--dark" : ""}`}
                sx={{ minWidth: 275 }}
              >
                <CardContent className={`${checked ? "card--dark" : ""}`}>
                  <Typography variant="h5" component="div">
                    name: {user.name}
                  </Typography>
                  <Typography
                    sx={{ fontSize: 14 }}
                    color="text.secondary"
                    gutterBottom
                  >
                    email: {user.email}
                  </Typography>

                  <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    Address: {user.address.street}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button
                    onClick={() => navigate(`/posts/${user.id}`)}
                    size="small"
                  >
                    Posts
                  </Button>
                </CardActions>
              </Card>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}

export default Users;
