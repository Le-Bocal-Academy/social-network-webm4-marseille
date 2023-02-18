import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { Col, Row, Typography } from 'antd';

import { fetchAllPostsByUser, getUser, updateProfile } from '../lib/api';
import PostList from '../containers/PostList';
import ProfileForm from '../components/ProfileForm';

const { Title } = Typography;

function Profile() {
  const params = useParams();
  const [profile, setProfile] = useState();
  const [posts, setPosts] = useState();

  const isAuthProfile = profile ? params.id === profile._id : false;

  function fetchUser() {
    getUser(params.id).then(user => setProfile(user));
  }
  
  useEffect(() => {
    if (!profile) getUser(params.id).then(user => setProfile(user));;
  }, [profile, params.id]);

  useEffect(() => {
    if (profile && !posts) {
      fetchAllPostsByUser(profile._id)
        .then((userPosts) => setPosts(userPosts));
    }
  }, [profile, posts]);

  return profile ? (
    <Row gutter={16} align="top">
      {isAuthProfile ? (
        <Col span={8}>
          <Title level={2}>Update your profile</Title>
          <ProfileForm profile={profile} onSubmit={updateProfile} onSuccess={fetchUser} showSuccess />
        </Col>
      ) : null}
      <Col span={isAuthProfile ? 16 : 24}>
        <Title level={2}>{profile.firstname} {profile.lastname}'s posts</Title>
        <PostList posts={posts || []} />
      </Col>
    </Row>
  ) : null;
}

export default Profile;