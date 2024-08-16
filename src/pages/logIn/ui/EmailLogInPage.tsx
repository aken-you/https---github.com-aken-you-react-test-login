import { useState } from "react";
import { logInByEmail } from "../api";
import { Form } from "../types";

const EmailLogInPage = () => {
  const [form, setForm] = useState<Form>({
    email: "",
    password: "",
  });

  return (
    <div>
      <h1>이메일로 로그인</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          logInByEmail(form);
        }}
      >
        <input
          type="email"
          id="email"
          onChange={(e) =>
            setForm((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <input
          type="password"
          id="password"
          onChange={(e) =>
            setForm((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <button>로그인</button>
      </form>
    </div>
  );
};

export default EmailLogInPage;
