import {
  AlertDialog,
  Button,
  DialogTrigger,
  Flex,
  Form,
  TextField,
} from "@adobe/react-spectrum";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postMethod } from "../crud";
import { API_URL } from "./constants";

export const SignUpPage = () => {
  interface Credentials {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }

  const registerUser = () => {
    if (
      userCredentials.firstName === "" ||
      userCredentials.lastName === "" ||
      userCredentials.email === "" ||
      userCredentials.password === ""
    ) {
      setRegisterSuccessful(false);
      return;
    }

    if (userCredentials.password !== retypedPassword) {
      setSamePasswords(false);
      setRegisterSuccessful(false);
      return;
    }

    postMethod(API_URL + "/signup", JSON.stringify(userCredentials)).then(
      (data) => {
        setRegisterSuccessful(true);
        console.log(data);
      }
    );
  };

  const [userCredentials, setCredentials] = useState<Credentials>({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [retypedPassword, setRetypedPassword] = useState("");

  const [registerSuccessful, setRegisterSuccessful] = useState(true);
  const [samePasswords, setSamePasswords] = useState(true);

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
          <TextField
            label="FirstName"
            onChange={(value) =>
              setCredentials({ ...userCredentials, firstName: value })
            }
          />
          <TextField
            label="LastName"
            onChange={(value) =>
              setCredentials({ ...userCredentials, lastName: value })
            }
          />
          <TextField
            label="Email"
            onChange={(value) =>
              setCredentials({ ...userCredentials, email: value })
            }
          />
          <TextField
            label="Password"
            type="password"
            onChange={(value) =>
              setCredentials({ ...userCredentials, password: value })
            }
          />
          <TextField
            label="Confirm Password"
            type="password"
            isRequired={true}
            onChange={(value) => setRetypedPassword(value)}
          />
          <DialogTrigger>
            <Button
              top={"size-400"}
              maxWidth={"50%"}
              variant={"primary"}
              alignSelf="center"
              onPress={() => registerUser()}
            >
              Sign Up
            </Button>
            <AlertDialog
              variant="confirmation"
              title={registerSuccessful ? "User registered" : "Sign up error"}
              primaryActionLabel="Cancel"
            >
              {!registerSuccessful
                ? !samePasswords
                  ? "Passwords are not the same"
                  : "Sign up failed, please try again."
                : "Sign up successful"}
            </AlertDialog>
          </DialogTrigger>

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
