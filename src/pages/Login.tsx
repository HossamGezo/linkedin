import {Link, useNavigate} from "react-router-dom";
import styled from "styled-components";
import linkedin from "../assets/images/login-logo.svg";
import google from "../assets/images/google.svg";
import welcome from "../assets/images/login-hero.svg";
import {connect} from "react-redux";
import type {ActionProps, RootReducerProps} from "../types/reduxTypes";
import {signIn} from "../redux/actions";
import type {Dispatch} from "redux";
import type {UserCredential} from "firebase/auth";
import {useEffect} from "react";

type LoginProps = {
  user: UserCredential | null;
  signIn: () => void;
};

const Login = (props: LoginProps) => {
  const navigate = useNavigate();
  useEffect(() => {
    if (props.user) {
      navigate("/home");
    }
  }, [navigate, props.user]);
  return (
    <>
      <Container>
        <Nav>
          <Link to="/home">
            <div className="image-cover">
              <img src={linkedin} alt="LINKEDIN" />
            </div>
          </Link>
          <div className="login">
            <p>Join now</p>
            <p>Sign in</p>
          </div>
        </Nav>
        <Section>
          <div className="welcome">
            <p>
              Welcome To Your <br /> Professional Community
            </p>
            <div className="signin" onClick={() => props.signIn()}>
              <img src={google} alt="GOOGlE" />
              Sign In With Google
            </div>
          </div>
          <div className="image-cover">
            <img src={welcome} alt="WELCOMED" />
          </div>
        </Section>
      </Container>
    </>
  );
};

const Container = styled.div`
  width: 95%;
  @media (min-width: 1024px) {
    width: 90%;
  }
  height: 100vh;
  padding: 0.6rem;
  @media (min-width: 768px) {
    padding: 1rem;
  }
  @media (min-width: 1024px) {
    padding: 1.2rem;
  }
  margin: 0 auto;
  display: flex;
  flex-direction: column;
`;
const Nav = styled.nav`
  display: flex;
  align-itmes: center;
  justify-content: space-between;
  .image-cover {
    width: 100px;
    @media (min-width: 768px) {
      width: 150px;
    }
    img {
      object-fit: contain;
    }
  }
  .login {
    display: flex;
    align-items: center;
    gap: 0.25rem;
    @media (min-width: 768px) {
      gap: 1rem;
    }
    @media (min-width: 1024px) {
      gap: 1.2rem;
    }  
    p {
      cursor: pointer;
      transition: all 0.3s linear;
      padding: 0.3rem 1rem;
      @media (min-width: 768px) {
        padding: 0.5rem 1.5rem;
      }
      @media (min-width: 1024px) {
        padding: 0.8rem 1.8rem;
      }
      &:first-child {
        color: gray;
        border-radius: 0.25rem;
        &:hover {
          background-color: #E2E2E2;
          color: #333;
          cursor: pointer;
        }
      }
      &:last-child {
        border: 1px solid #2976C9;
        border-radius: 2rem;
        color: #2976C9;
        font-weight: bold;
        &:hover {
          background-color: #E2EBF6;
        }
      }
    }
  }
`;
const Section = styled.section`
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 1024px) {
    flex-direction: row;
  }
  align-items: center;
  justify-content: space-between;
  flex-grow: 1;
  .welcome {
    flex-grow: 1;
    p {
      color: #2976C9;
      font-weight: bold;
      @media (min-width: 768px) {
        font-size: 1.8rem;
      }
      @media (min-width: 1024px) {
        font-size: 1.8rem;
      }
      margin-bottom: 1.5rem;
    }
    .signin {
      background-color: white;
      padding: 0.5rem;
      width: 270px;
      @media (min-width: 768px) {
        padding: 1rem;
        width: 500px;
        font-size: 1.4rem;
      }
      @media (min-width: 1024px) {
        padding: 1.1rem;
        width: 400px;
        font-size: 1.2rem;
      }
      display: flex;
      justify-content: center;
      gap: 10px;
      align-items: center;
      border: 2px solid #333;
      border-radius: 2rem;
      cursor: pointer;
      color: gray;
      transition: all 0.3s linear;
      &:hover {
        background-color: #E2EBF6;
        color: #333;
        border-color: #2976C9;
      }
    }
  }
  .image-cover {
    flex-grow: 3;
    min-width: 300px;
    @media (min-width: 768px) {
      min-width: 500px;
    }
    @media (min-width: 1024px) {
      min-width: 450px;
    }
    display: flex;
    justify-content: center;
    align-items: center;
    img {
      object-fit: contain;
    }
  }
`;

const mapStateToProps = (state: RootReducerProps) => {
  return {
    user: state.userState.user,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<ActionProps>) => {
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    signIn: () => dispatch(signIn() as any),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
