import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/store";
import { login, setUserId } from "../../store/login/action";
import axios from "axios";

import { IconButton } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import Tooltip, { TooltipProps } from "@mui/material/Tooltip";
import Button from "@mui/material/Button";

import ToolTipMypage from "../TooltipMypage";

const DefaultHeader = styled.div`
  min-width: 1200px;
  height: 80px;
  padding: 0 150px;
  margin: 0;

  display: flex;
  /* background-color: yellowgreen; */

  background-color: #548536;
  align-items: center;
  /* position: fixed; */
  /* overflow-x: auto; */
  justify-content: space-between;
`;

const NavMainWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const NavTitle = styled.h1`
  font-weight: 700;
  color: #fff;
  cursor: pointer;
`;

const NavMenu = styled.ul`
  display: flex;
  gap: 1em;
`;

const MenuItem = styled.div`
  cursor: pointer;
  font-size: 20px;
  font-weight: 700;
  padding: 10px;
  border-radius: 5px;
  color: #fff;

  &:hover {
    background-color: #fff;
    color: black;
  }
`;

const NavIconWrapper = styled.div`
  display: flex;
  gap: 0.4em;
  align-items: center;

  position: relative;
`;

const GuideTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))`
  .MuiTooltip-tooltip {
    background-color: #fff;
    color: #2b1b09;
    font-size: 18px;
    font-weight: 700;
    border-radius: 20%;
    width: 120px;
    height: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
  }
  .MuiTooltip-arrow {
    color: #fff;
  }
`;

export const Header = () => {
  const [isHover, setIsHover] = useState<boolean>(false);
  const isLogin = useSelector((state: RootState) => state.login.isLoggedIn);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLoginClick = () => {
    navigate("/login");
  };

  const handleTitleClick = () => {
    navigate("/");
  };

  const handleGuideClick = () => {
    navigate("/guideline");
  };

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn");
    const userId = Number(localStorage.getItem("userId"));

    if (loggedIn === "true") {
      dispatch(login());
      dispatch(setUserId(userId));
    }
  }, [dispatch]);

  return (
    <DefaultHeader>
      <NavMainWrapper>
        <NavTitle onClick={handleTitleClick}>FOOKIT</NavTitle>
        <NavMenu>
          <MenuItem onClick={() => navigate("/recipes")}>Recipe</MenuItem>
          <MenuItem onClick={() => navigate("/community")}>Community</MenuItem>
        </NavMenu>
      </NavMainWrapper>
      <NavIconWrapper>
        <GuideTooltip title="Guideline" arrow>
          <IconButton style={{ padding: "20px" }} onClick={handleGuideClick}>
            <MenuBookIcon
              sx={{
                color: "#fff",
                fontSize: 40,
              }}
            />
          </IconButton>
        </GuideTooltip>
        {isLogin ? (
          <div onMouseLeave={() => setIsHover(false)}>
            <IconButton
              style={{ position: "relative", padding: "20px" }}
              onMouseEnter={() => setIsHover(true)}
            >
              <AccountCircleIcon
                sx={{
                  color: "#fff",
                  fontSize: 40,
                  backgroundColor: "#ffc960",
                  borderRadius: "50%",
                }}
              />
            </IconButton>
            <ToolTipMypage isHover={isHover} />
          </div>
        ) : (
          <Button
            onClick={handleLoginClick}
            style={{
              width: "100px",
              height: "50px",
              borderRadius: 20,
              backgroundColor: "#fff",
              color: "#2b1b09",
              fontSize: "20px",
              fontWeight: "700",
            }}
            variant="contained"
          >
            로그인
          </Button>
        )}
      </NavIconWrapper>
    </DefaultHeader>
  );
};
