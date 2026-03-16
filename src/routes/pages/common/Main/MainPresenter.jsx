import { MainLayout } from '../../../../layouts';
import './Main.css';
import Travel from './components/travel';

/**
 * Presenter
 * - UI를 담당하는 역할을 수행
 * - Container에서 전달받은 데이터를 기반으로 화면을 렌더링
 * - 비즈니스 로직은 처리하지 않으며, 순수하게 UI만 다룸
 */

const MainPresenter = ({
    navigate,

    // Container에서 넘긴 데이터를 props로 받음
    handleTest,

    handleGetAllUsers,

    handleGetUsers, 
    
    users

}) => {

    return (
        <MainLayout>
            <div className='main-container'>
                <div className='main-test-container'>
                    <button
                        onClick={handleTest}
                    >테스트 버튼</button>

                    <button
                        onClick={handleGetAllUsers}
                    >고객 조회</button>
                </div>

                <div className='main-btn-wrap'>
                    <button
                        onClick={() => navigate('/signup')}
                    >회원가입</button>
                    <button
                        onClick={() => navigate('/signin')}
                    >로그인</button>
                </div>

            </div>
            <div>
                <button onClick={handleGetUsers}>가이드 불러오기</button>
            
                <div>
                    {users && users.map((user) => (
                        <Travel key={user.id} user={user} />
                    ))}
                </div>
            </div>
        </MainLayout>
        
    );
};

export default MainPresenter;