import type { Form } from "../types";

// "이메일" 회원 가입
// ? passwordConfirm도 요청 보내야하는지 확인
export const signUpFirstStep = async ({ email, password }: Form) => {
  try {
    const response = await fetch("http://localhost:8080/users", {
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
  } catch (error) {
    alert("회원가입에 실패했습니다.");
  }
};
