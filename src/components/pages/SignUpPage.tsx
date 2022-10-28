import { Button, Flex, Form, TextField } from "@adobe/react-spectrum";
import { useNavigate } from "react-router-dom";

export const SignUpPage = () => {

  const navigate = useNavigate();

  return (
    <div className="login-background">
      <Flex justifyContent="center" alignItems="center" height="100vh">
        <Form
          UNSAFE_style={{
            backgroundColor: "white",
            padding: "20px",
            borderRadius: "10px",
          }}
          flex="3"
          height={"size-6000"}
          maxWidth="size-3600"
          alignSelf="center"
          justifySelf="center"
        >
          <h2> Register </h2>
          <TextField label="FirstName" />
          <TextField label="LastName" />
          <TextField label="Email" />
          <TextField label="Password" type="password" />
          <TextField label="Confirm Password" type="password" />

          <Button
            top={"size-400"}
            maxWidth={"50%"}
            variant={"primary"}
            alignSelf="center"
          >
            Sign Up
          </Button>

          <Button
            top={"size-400"}
            maxWidth={"50%"}
            variant={"primary"}
            alignSelf="center"
            onPress={() => navigate("/login")}
          >
            Back to Login
          </Button>
        </Form>
      </Flex>
    </div>
  );
};
