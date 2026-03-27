import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignUpPresenter from "./SignUpPresenter"

const SignUpContainer = () => {
    const navigate = useNavigate();
    const [userInfo, setUserInfo] = useState({
        id: '',
        pw: '',
        name: '',
        phone: '',
        birth_date: '',
        nationality: '',
        nickname: '',
        address: '',
        gender: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        
        // 기존 객체를 복사(...userInfo)하고, 변경된 필드만 덮어씁니다.
        setUserInfo({
            ...userInfo,
            [name]: value
        });
    };

    const handleSignUp = async (e) => {
        console.log(userInfo);
        e.preventDefault();
        try {
            const response = await fetch('http://localhost:8080/user/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(userInfo), // 이미 객체이므로 그대로 보냄
            });
            console.log("!!")

            if (response.ok) {
                alert('회원가입 성공');
                navigate('/signin');
            } else {
                const error = await response.json();
                alert(`회원가입 실패!: ${error.message}`);
            }
        } catch (err) {
            console.error('회원가입 요청 에러:', err);
        }
    };

    return (
        <SignUpPresenter
            userInfo={userInfo}
            handleChange={handleChange}
            handleSignUp={handleSignUp}
        />
    );
};

export default SignUpContainer;
