import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


export default function LoginPage() {
    return (
        <Container>
        <div>
            <div className="navbar">
            <div className="navbar_left">
                <div className="navbar_left_logo">
                <h1>Jajanin.</h1>
                </div>
            </div>
            <div className="navbar_right">
                <div className="navbar_right_menu">
                <ul>
                    <li>
                    <Link to="/home">Shop Now</Link>
                    </li>
                    <li>
                    <Link to="/login">Login</Link>
                    </li>
                </ul>
                </div>
            </div>
            </div>
            <div className="hero">
            <div className="hero_content">
                <h1>Let's Login</h1>
                <p>
                Login to your account to access your profile and order history
                </p>
            </div>
            </div>
            <div className="content">
            <div className="content_form">
                <div className="content_form_input">
                <input type="text" placeholder="Email" />
                </div>
                <div className="content_form_input">
                <input type="password" placeholder="Password" />
                </div>
                <div className="content_form_button">
                <button>LOGIN</button>
                </div>
            </div>
            </div>
            <div className="footer">
            <div className="footer_content">
                <div className="footer_content_left">
                <h1>Jajanin.</h1>
                <p>
                    Jajanin is a web-based application that provides a variety of
                    products that can be ordered online.
                </p>
                </div>
                <div className="footer_content_right">
                <div className="footer_content_right_menu">
                    <ul>
                    <li>
                        <Link to="/home">Shop Now</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                    </ul>
                </div>
                </div>
            </div>
            </div>
        </div>
        </Container>
    );
}

const Container = styled.div`
    font-family: "Josefin";

    .navbar {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px 40px 20px 40px;
        background-color: #1f1d2b;
        color: #fff;
        font-size: 16px;
        font-weight: 500;
    }

    .hero {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 90vh;
        background-color: #1f1d2b;
        color: #fff;
    }
    .hero_content {
        text-align: center;
    }
    .hero_content h1 {
        font-size: 50px;
        font-weight: 500;
    }
    .hero_content p {
        font-size: 20px;
        font-weight: 300;
    }
    .content {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        background-color: #fff;
        color: #1f1d2b;
    }
    .content_form {
        width: 50%;
        height: 50%;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
    }
    .content_form_input {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .content_form_input input {
        width: 80%;
        height: 100%;
        border: none;
        border-bottom: 1px solid #1f1d2b;
        outline: none;
        font-size: 16px;
        font-weight: 300;
    }
    .content_form_button {
        width: 100%;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .content_form_button button {
        width: 80%;
        height: 100%;
        border: none;
        outline: none;
        background-color: #1f1d2b;
        color: #fff;
        font-size: 16px;
        font-weight: 300;
        cursor: pointer;
    }
`;