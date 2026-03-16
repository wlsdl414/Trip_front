import React from 'react';

const Travel = ({ user }) => {
    return (
        <div>
            <h4>이름: {user.name}</h4>
            <p>나이: {user.age}</p>
        </div>
    );
};

export default Travel;