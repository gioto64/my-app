import {
  AlertDialog,
  Button,
  ButtonGroup,
  Checkbox,
  Content,
  ContextualHelp,
  DialogTrigger,
  Flex,
  Footer,
  Form,
  Heading,
  TextField,
} from "@adobe/react-spectrum";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

import "../../App.css";
import { postMethod } from "../crud";
import { API_URL } from "./constants";

export const LoginPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const [successLogin, setSuccessLogin] = useState(true);

  const navigate = useNavigate();

  return (
    <div className="login-background">
      <Flex justifyContent="center" alignItems="center" height="90%">
        <Form
          UNSAFE_style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
          flex="3"
          height={"size-4600"}
          maxWidth="size-3600"
          alignSelf="center"
          justifySelf="center"
        >
          <h2> UrziSoft Future Project Name </h2>
          <TextField label="Email" onChange={(value) => setUserEmail(value)} />
          <TextField
            label="Password"
            type="password"
            contextualHelp={
              <ContextualHelp>
                <Heading>Need help?</Heading>
                <Content>
                  If you're having trouble accessing your account, contact our
                  customer support team for help.
                </Content>
              </ContextualHelp>
            }
            onChange={(value) => setUserPassword(value)}
          />
          <Checkbox>Remember me</Checkbox>
          <ButtonGroup align="center" top={"size-300"}>
            <DialogTrigger>
              <Button
                variant={"primary"}
                UNSAFE_className="login-btn"
                onPress={() => {
                  let credentials = {
                    email: userEmail,
                    password: userPassword,
                  };
                  postMethod(
                    API_URL + "/login",
                    JSON.stringify(credentials)
                  ).then((data) => {
                    console.log(data);
                    if (data) {
                      // save to store
                      setSuccessLogin(true);
                      navigate("/");
                    } else {
                      setSuccessLogin(false);
                    }
                  });
                }}
              >
                Login
              </Button>

              {!successLogin ? (
                <AlertDialog
                  variant="confirmation"
                  title="Login failed"
                  primaryActionLabel="Cancel"
                >
                  Invalid email or password. Please try again.
                </AlertDialog>
              ) : (
                <></>
              )}

            </DialogTrigger>
            <Button
              variant={"primary"}
              UNSAFE_className="login-btn"
              onPress={() => {
                navigate("/signup");
              }}
            >
              Sign up
            </Button>
          </ButtonGroup>
        </Form>
      </Flex>
      <Footer height={"10%"} width="100%">
        Urzisoft <br /> &copy; All rights reserved.
      </Footer>
    </div>
  );
};
