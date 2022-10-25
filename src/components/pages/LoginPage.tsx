import {
  Button,
  ButtonGroup,
  Checkbox,
  Content,
  ContextualHelp,
  Flex,
  Form,
  Heading,
  TextField,
} from "@adobe/react-spectrum";
import { Link } from "react-router-dom";

export const LoginPage = () => {
  return (
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Form
        flex="3"
        maxWidth="size-3600"
        alignSelf="center"
        justifySelf="center"
      >
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
        <ButtonGroup align="center">
          <Button variant={"primary"}> Login </Button>
          <Button variant={"secondary"}>Sign up</Button>
        </ButtonGroup>
      </Form>
    </Flex>
  );
};
