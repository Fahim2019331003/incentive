import { getSession } from 'next-auth/react';

const Test = async () => {
  const session = await getSession();
  if (session) {
    console.log(session);
  } else console.log('hello');
  return <div>Hi</div>;
};

export default Test;
