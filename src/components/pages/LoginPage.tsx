import {
  Button,
  ButtonGroup,
  Checkbox,
  Content,
  ContextualHelp,
  Flex,
  Footer,
  Form,
  Heading,
  TextField,
} from "@adobe/react-spectrum";
import { useNavigate } from "react-router-dom";

import "../../App.css";

export const LoginPage = () => {

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
          <TextField label="Email" />
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
          />
          <Checkbox>Remember me</Checkbox>
          <ButtonGroup align="center" top={"size-300"}>
            <Button variant={"primary"} UNSAFE_className="login-btn">
              Login
            </Button>
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
