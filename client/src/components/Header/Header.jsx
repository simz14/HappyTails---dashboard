import React, { useState } from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import { HiMenu } from "react-icons/hi";
import SideBar from "./components/SideBar";

const HeaderWrap = styled.div`
  display: flex;
  min-width: 100%;
`;

const MenuWrap = styled.div`
  background-color: white;
  box-shadow: 0px 1px 4px -2px #888888;
  position: sticky;
  top: 0;
  min-height: 3rem;
  max-height: 3rem;
  display: flex;
  width: 100%;
  justify-content: end;

  .show {
    display: none;
  }
  .userOptions {
    display: flex;
    justify-content: end;
    gap: 1rem;
    .userData {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: end;
    }
    p {
      font-size: 14px;
      margin: 0;
    }
    span {
      font-size: 11px;
    }
  }
  @media (max-width: 1000px) {
    justify-content: space-between;
    .show {
      display: block;
    }
  }
`;

const Header = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <HeaderWrap>
      {showSideBar && <SideBar setShowSideBar={setShowSideBar} />}

      <MenuWrap>
        <IconButton
          className="show"
          onClick={() => setShowSideBar((prev) => !prev)}
        >
          {<HiMenu />}
        </IconButton>
        <div className="userOptions">
          <div className="userData">
            <p>Abbott Keitch</p>
            <span>admin</span>
          </div>
          <img
            src="https://react-material.fusetheme.com/assets/images/avatars/brian-hughes.jpg"
            alt="user"
          />
        </div>
      </MenuWrap>
    </HeaderWrap>
  );
};

export default Header;