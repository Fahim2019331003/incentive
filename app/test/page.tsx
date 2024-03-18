'use client';
import axios from 'axios';

const Page = () => {
  const data = {
    department: 'xyhusdbcuhbyz',
    school: '123sdcsd4',
    title: 'yusghccasdcdsihs',
    qIndex: 'Q1',
    PublishernameAndAddress: 'uysdfghisdcdscdhsbc',
    volAndDate: '267821asdcd372',
  };

  const handleClick = async () => {
    // console.log(data);
    const res = await axios
      .post('/api/application', {
        data,
      })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="min-h-screen mt-20">
      <button type="button" onClick={() => handleClick()}>
        HEEEEELLLLOOOO
      </button>
    </div>
  );
};

export default Page;
