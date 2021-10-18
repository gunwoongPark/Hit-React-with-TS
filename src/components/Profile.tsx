import React from 'react';

interface PropType {
  name: string;
  age: number;
  email: string;
  job: string;
}

function Profile(props: PropType) {
  const { name, age, email, job } = props;
  return (
    <div>
      <label>이름 : </label>
      <input value={name} disabled />

      <br />

      <label>나이 : </label>
      <input value={age} disabled />

      <br />

      <label>이메일 : </label>
      <input value={email} disabled />

      <br />

      <label>직업 : </label>
      <input value={job} disabled />
    </div>
  );
}

export default Profile;
