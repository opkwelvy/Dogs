import React, { useContext } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import { UserContext } from '../../UserContext';
import NotFound from '../NotFound';
import Feed from '../feed/Feed';
import UserHeader from './UserHeader';
import UserPhotoPost from './UserPhotoPost';

const User = () => {
  const { data } = useContext(UserContext);
  const { pathname } = useLocation();
  console.log(pathname);
  return (
    <section className="container">
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={data.id} />} />
        <Route path="postar" element={<UserPhotoPost />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
};

export default User;
