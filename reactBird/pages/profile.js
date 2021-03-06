import AppLayout from '../components/AppLayout';
import Head from 'next/head';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import Router from 'next/router';

const Profile = () => {
  const { me } = useSelector((state) => state.user);

  useEffect(() => {
    if (!(me && me.id)) {
      Router.push('/');
    }
  }, [me && me.id]);
  if (!me) {
    return null;
  }

  return (
    <>
      <Head>
        <title>Profile | NodeBird</title>
      </Head>

      <AppLayout>
        <NicknameEditForm />
        <FollowList header="Following" data={me.Followings} />
        <FollowList header="Follower" data={me.Followers} />
      </AppLayout>
    </>
  );
};

export default Profile;
