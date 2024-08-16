import { Link } from "react-router-dom";

const LogInPage = () => {
  return (
    <div>
      <div>로그인 및 회원가입</div>
      <div>로그인 하고 반려견과</div>
      <div>추억을 남겨 보세요.</div>

      <div className="flex flex-col">
        <a href="http://localhost:8080/oauth/login/naver">Naver로 계속하기</a>
        <a href="http://localhost:8080/oauth/login/google">Google로 계속하기</a>
        <Link to="/log-in/email">이메일로 계속하기</Link>
      </div>
      <div>
        <span>아직 회원이 아니신가요?</span>
        <Link to="/sign-up">회원가입</Link>
      </div>
    </div>
  );
};

export default LogInPage;
