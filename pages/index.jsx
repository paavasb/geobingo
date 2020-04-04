import React from 'react';
import { useUser } from '../lib/hooks';
import Header from '../components/header';
import BingoTitleForm from '../components/bingoTitleForm';

const IndexPage = () => {
  const [user] = useUser();

  return (
    <>
      <style jsx>
        {`
          p {
            text-align: center;
            color: #888;
          }
        `}
      </style>
      <div>
        <Header />
        <BingoTitleForm />
      </div>
    </>
  );
};

export default IndexPage;
