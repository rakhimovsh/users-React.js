import "./Header.scss";
import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Switch from "@mui/material/Switch";
import React from "react";
import { Context as ThemeContext } from "../../Contexts/Theme/Theme";

function Header() {
  const navigate = useNavigate();
  const { checked, setChecked } = React.useContext(ThemeContext);
  const switchHandler = (event) => {
    setChecked(event.target.checked);
  };
  return (
    <header className={`header  ${checked ? "dark" : ""}`}>
      <div className="container header__inner">
        <ButtonGroup disableElevation variant="contained">
          <Button onClick={() => navigate(-1)}>Prev</Button>
          <Button onClick={() => navigate(1)}>Next</Button>
        </ButtonGroup>
        <Switch checked={checked} onChange={switchHandler} />
      </div>
    </header>
  );
}

export default Header;
