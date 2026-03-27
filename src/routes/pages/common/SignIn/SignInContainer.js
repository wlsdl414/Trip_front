import { useState } from "react";
import SignInPresenter from "./SignInPresenter"
import { useNavigate } from "react-router-dom";

const SignInContainer = ({ setUser }) => {
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [pw, setPw] = useState('');

    const handleSignIn = async (e) => {
        console.log(id, pw);
        // <form></form> 태그로 작성 시, 새롭게 렌더링 되는 것을 막기 위해 추가함
        e.preventDefault();

        if (!id.length) {
            alert('아이디를 입력해주세요');
            return;
        }

        if (!pw.length) {
            alert('비밀번호를 입력해주세요');
            return;
        }

        try {
            const userInfo = {
                id: id,
                pw: pw,
            };

            const response = await fetch('http://localhost:8080/user/signin', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(userInfo),
                credentials: 'include' // 쿠키 전송 허용
            });

            const result = await response.json();

            if (result.status === 200) {
                console.log(`로그인 성공`, result);
                setUser({
                    id: result.data.id,
                    name: result.data.name
                });

                alert(`${result.data.name}님 반갑습니다.`);
                navigate('/');
                return;
            }
            
            console.log('로그인 실패:', result.message);
            alert(`로그인 실패: ${result.message}`);

        } catch (e) {
            console.error('로그인 요청 에러:', e);
            alert('로그인 요청 에러');
        }
    };

    return (
        <SignInPresenter
            id={id}
            pw={pw}
            setId={setId}
            setPw={setPw}
            handleSignIn={handleSignIn}
        />
    );
};

export default SignInContainer;
