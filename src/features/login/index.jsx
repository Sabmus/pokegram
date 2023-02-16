import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from "./loginSlice";

import { LoginForm } from "./assets/styles";

const INITIAL_STATE = {
  fields: {
    username: "",
    password: "",
  },
  fieldErrors: {},
};

function LoginPage() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState(INITIAL_STATE);

  const validateInput = (fields) => {
    const errors = {};
    if (!fields.username) errors.username = "Username required";
    if (!fields.password) errors.password = "Password required";
    return errors;
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const fields = formData.fields;
    const fieldErrors = validateInput(fields);
    setFormData({ ...formData, fieldErrors });

    if (Object.keys(fieldErrors).length) return;

    console.log(formData.fields.username, formData.fields.password);
    dispatch(login(fields.username));

    setFormData(INITIAL_STATE);
  };

  const onInputChange = (event) => {
    const fields = Object.assign({}, formData.fields);
    fields[event.target.name] = event.target.value;
    setFormData({ ...formData, fields });
  };

  return (
    <div>
      <LoginForm onSubmit={handleSubmit}>
        <div>
          <input
            type="text"
            name="username"
            placeholder="username"
            value={formData.fields.username}
            onChange={onInputChange}
          />
          <span style={{ color: "red" }}>{formData.fieldErrors.username}</span>
        </div>
        <div>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={formData.fields.password}
            onChange={onInputChange}
          />
          <span style={{ color: "red" }}>{formData.fieldErrors.password}</span>
        </div>
        <input type="submit" />
      </LoginForm>
    </div>
  );
}

export default LoginPage;
