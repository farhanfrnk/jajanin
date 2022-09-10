import React, { useContext } from "react";
import styled from "styled-components";
import { FunctionContext } from "../../context/FunctionContext";

export default function Header() {
  

  const { shop, setShop, functions, fetchStatus, setFetchStatus, input, setinput} = useContext(FunctionContext)
  const { handleSumbit, fetchData } = functions

  // document.querySelector('.searchbox [type="reset"]').addEventListener('click', function() {  this.parentNode.querySelector('input').focus();});

  document.querySelector('.searchbox [type="reset"]')
  return (
    <Container>
      <div>
        <div className="header">
          <svg xmlns="http://www.w3.org/2000/svg" style={{display:"none"}}>
            <symbol xmlns="http://www.w3.org/2000/svg" id="sbx-icon-search-8" viewBox="0 0 40 40">
              <path d="M16 32c8.835 0 16-7.165 16-16 0-8.837-7.165-16-16-16C7.162 0 0 7.163 0 16c0 8.835 7.163 16 16 16zm0-5.76c5.654 0 10.24-4.586 10.24-10.24 0-5.656-4.586-10.24-10.24-10.24-5.656 0-10.24 4.584-10.24 10.24 0 5.654 4.584 10.24 10.24 10.24zM28.156 32.8c-1.282-1.282-1.278-3.363.002-4.643 1.282-1.284 3.365-1.28 4.642-.003l6.238 6.238c1.282 1.282 1.278 3.363-.002 4.643-1.283 1.283-3.366 1.28-4.643.002l-6.238-6.238z"
              fillRule="evenodd" />
            </symbol>
            <symbol xmlns="http://www.w3.org/2000/svg" id="sbx-icon-clear-3" viewBox="0 0 20 20">
              <path d="M8.114 10L.944 2.83 0 1.885 1.886 0l.943.943L10 8.113l7.17-7.17.944-.943L20 1.886l-.943.943-7.17 7.17 7.17 7.17.943.944L18.114 20l-.943-.943-7.17-7.17-7.17 7.17-.944.943L0 18.114l.943-.943L8.113 10z" fillRule="evenodd" />
            </symbol>
          </svg>

          <form onSubmit={handleSumbit} className="searchbox sbx-twitter">
            <div role="search" className="sbx-twitter__wrapper">
              <input type="search" name="search" placeholder="Cari apa hari ini?" autoComplete="off" className="sbx-twitter__input" />
              <button type="submit" title="Submit your search query." className="sbx-twitter__submit">
                <svg role="img" aria-label="Search">
                  <use xlinkHref="#sbx-icon-search-8" />
                </svg>
              </button>
              <button type="reset" title="Clear the search query." className="sbx-twitter__reset">
                <svg role="img" aria-label="Reset">
                  <use xlinkHref="#sbx-icon-clear-3" />
                </svg>
              </button>
            </div>
          </form>
        </div>

      </div>
    </Container>
  )
}

const Container = styled.div`

box-sizing: border-box;
background-color: #353340;
// padding: 0 20px; FEFFFF
// display: flex;
// align-items: center;

margin: 20px 0;


.header{
  width: 100%;
  display: flex;
  flex-direction: row;

  border-radius: 20px;
}

.sbx-twitter {
  display: inline-block;
  position: relative;
  width: 100%;
  height: 40px;
  white-space: nowrap;
  box-sizing: border-box;
  font-size: 12px;
  font-family: 'Inter', sans-serif;
}

.sbx-twitter__wrapper {
  width: 100%;
  height: 100%;
}

.sbx-twitter__input {
  display: inline-block;
  -webkit-transition: box-shadow .4s ease, background .4s ease;
  transition: box-shadow .4s ease, background .4s ease;
  border-radius: 10px;
  // box-shadow: inset 0 0 0 1px #E1E8ED;
  color: white;
  background: #1F1D2B;
  padding: 0;
  padding-right: 52px;
  padding-left: 16px;
  width: 100%;
  height: 100%;
  vertical-align: middle;
  white-space: normal;
  font-size: inherit;
  -webkit-appearance: none;
     -moz-appearance: none;
          appearance: none;
}

.sbx-twitter__input::-webkit-search-decoration, .sbx-twitter__input::-webkit-search-cancel-button, .sbx-twitter__input::-webkit-search-results-button, .sbx-twitter__input::-webkit-search-results-decoration {
  display: none;
}

.sbx-twitter__input:hover {
  box-shadow: inset 0 0 0 1px #32a7e2;
}

.sbx-twitter__input:focus, .sbx-twitter__input:active {
  outline: 0;
}

.sbx-twitter__input::-webkit-input-placeholder {
  color: #FEFFFF;
}

.sbx-twitter__input::-moz-placeholder {
  color: #FEFFFF;
}

.sbx-twitter__input:-ms-input-placeholder {
  color: #FEFFFF;
}

.sbx-twitter__input::placeholder {
  color: #9AAEB5;
}

.sbx-twitter__submit {
  position: absolute;
  top: 0;
  right: 0;
  left: inherit;
  margin: 0;
  border: 0;
  border-radius: 0 16px 16px 0;
  background-color: rgba(62, 130, 247, 0);
  padding: 0;
  width: 33px;
  height: 100%;
  vertical-align: middle;
  text-align: center;
  font-size: inherit;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
}

.sbx-twitter__submit::before {
  display: inline-block;
  margin-right: -4px;
  height: 100%;
  vertical-align: middle;
  content: '';
}

.sbx-twitter__submit:hover, .sbx-twitter__submit:active {
  cursor: pointer;
}

.sbx-twitter__submit:focus {
  outline: 0;
}

.sbx-twitter__submit svg {
  width: 13px;
  height: 13px;
  vertical-align: middle;
  fill: #657580;
}

.sbx-twitter__reset {
  display: none;
  position: absolute;
  top: 10px;
  right: 33px;
  margin: 0;
  border: 0;
  background: none;
  cursor: pointer;
  padding: 0;
  font-size: inherit;
  -webkit-user-select: none;
     -moz-user-select: none;
      -ms-user-select: none;
          user-select: none;
  fill: rgba(255, 255, 255, 0.5);
}

.sbx-twitter__reset:focus {
  outline: 0;
}

.sbx-twitter__reset svg {
  display: block;
  margin: 4px;
  width: 11px;
  height: 11px;
}

.sbx-twitter__input:valid ~ .sbx-twitter__reset {
  display: block;
  -webkit-animation-name: sbx-reset-in;
          animation-name: sbx-reset-in;
  -webkit-animation-duration: .15s;
          animation-duration: .15s;
}

@-webkit-keyframes sbx-reset-in {
  0% {
    -webkit-transform: translate3d(-20%, 0, 0);
            transform: translate3d(-20%, 0, 0);
    opacity: 0;
  }
  100% {
    -webkit-transform: none;
            transform: none;
    opacity: 1;
  }
}

@keyframes sbx-reset-in {
  0% {
    -webkit-transform: translate3d(-20%, 0, 0);
            transform: translate3d(-20%, 0, 0);
    opacity: 0;
  }
  100% {
    -webkit-transform: none;
            transform: none;
    opacity: 1;
  }
}
`
