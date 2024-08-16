import { Form } from "../types";

export const logInByEmail = async ({ email, password }: Form) => {
  try {
    // todo: url, request option 수정
    const response = await fetch("http://localhost:8080", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = await response.json();

    console.log(data);
  } catch (e) {
    alert("이메일 로그인에 실패했습니다.");
  }
};
