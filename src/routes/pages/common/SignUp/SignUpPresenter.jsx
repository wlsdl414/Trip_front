import { MainLayout } from "../../../../layouts";

const SignUpPresenter = ({
    userInfo,
    handleChange,
    handleSignUp,
}) => {

    return (
        <MainLayout>
            <form
                onSubmit={handleSignUp}
            >
                <input
                    name="id"
                    type="text"
                    placeholder="id"
                    value={userInfo.id} onChange={handleChange}
                    required
                />
                <input
                    name="pw"
                    type="text"
                    placeholder="password"
                    value={userInfo.pw} onChange={handleChange}
                    required
                />
                <input
                    name="name"
                    type="text"
                    placeholder="name"
                    value={userInfo.name} onChange={handleChange}
                    required
                />
                <input
                    name="phone"
                    type="text"
                    placeholder="Phone"
                    value={userInfo.phone} onChange={handleChange}
                />
                <input
                    name="birth_date"
                    type="date"
                    value={userInfo.birth_date} onChange={handleChange}
                />
                <input
                    name="nationality"
                    type="text"
                    placeholder="Nationality"
                    value={userInfo.nationality} onChange={handleChange}
                />
                <input
                    name="nickname"
                    type="text"
                    placeholder="Nickname"
                    value={userInfo.nickname} onChange={handleChange}
                />
                <input
                    name="address"
                    type="text"
                    placeholder="Address"
                    value={userInfo.address}
                    onChange={handleChange}
                />

                <select name="gender" value={userInfo.gender} onChange={handleChange}>
                    <option value="">성별 선택</option>
                    <option value="M">남성</option>
                    <option value="F">여성</option>
                </select>
                <div>
                    <button type="submit">가입하기</button>
                </div>
            </form>
        </MainLayout>
    );
};

export default SignUpPresenter;