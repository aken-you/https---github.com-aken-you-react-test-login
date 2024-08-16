import { useState } from "react";
import { signUpFirstStep } from "../api";
import { Form } from "../types";

const SignUp = () => {
  const [form, setForm] = useState<Form>({
    email: "",
    password: "",
    passwordConfirm: "",
  });

  return (
    <main>
      <h1>이메일로 회원가입</h1>

      <form
        onSubmit={(e) => {
          e.preventDefault();

          signUpFirstStep(form);
        }}
      >
        <input
          type="email"
          id="email"
          onChange={(e) =>
            setForm((prev) => ({ ...prev, email: e.target.value }))
          }
        />
        <input type="number" placeholder="인증코드 6자리를 입력해 주세요" />

        <input
          type="password"
          id="password"
          onChange={(e) =>
            setForm((prev) => ({ ...prev, password: e.target.value }))
          }
        />
        <input
          type="password"
          id="passwordConfirm"
          onChange={(e) =>
            setForm((prev) => ({ ...prev, passwordConfirm: e.target.value }))
          }
        />
        <button
          className="disabled:text-gray-100"
          disabled={form.password !== form.passwordConfirm}
        >
          다음
        </button>
      </form>
    </main>
  );
};

export default SignUp;
