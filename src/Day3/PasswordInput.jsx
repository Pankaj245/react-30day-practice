import { useState } from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import RemoveRedEyeIcon from "@mui/icons-material/RemoveRedEye";

const PasswordInput = () => {
  const [passwordShow, setPasswordShow] = useState(false);
  const [password, setPassword] = useState("");
  const handleOnChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <div className="input-container">
      <div className="label">Password:</div>
      <div className="password-container">
        <input
          type="text"
          name="password"
          id="password"
          value={passwordShow ? password : "*".repeat(password.length)}
          onChange={handleOnChange}
        />
        <div
          className="icon"
          onClick={() => setPasswordShow((passwordShow) => !passwordShow)}
        >
          {passwordShow ? <RemoveRedEyeIcon /> : <VisibilityOffIcon />}
        </div>
      </div>
    </div>
  );
};

export default PasswordInput;
