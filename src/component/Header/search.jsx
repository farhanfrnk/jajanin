import React from "react";
import styled from "styled-components";

export default function SearchBar() {
  return (
    <Container>
      <div>
        <div className="searchBar">
          <input type="text" className="searchTerm" placeholder="Search" />
          <button type="submit" className="searchButton">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </Container>
  );
}

const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  align-items: center;

  .searchBar {
    background-color: #f7f7f7;
    opacity: 0.5;
    min-width: 80vw;
    height: 4.5vh;
    border-radius: 10px;
    padding: 2px 5px;
    margin-top: 20px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: row;

    .searchTerm {
      width: 100%;
      height: 90%;
      color: black;
      outline: none;
      background-color: transparent;
      border: none;
      padding-left: 10px;
      margin-right: 10px;
    }
  }
`;
