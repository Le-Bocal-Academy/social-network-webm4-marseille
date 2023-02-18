import { useEffect, useState } from 'react';
import { useParams } from "react-router-dom";
import { fetchAllPostsByUser, getUser } from '../lib/api';
import PostList from '../containers/PostList';
import { Col, Row } from 'antd';

function Profile() {
  const params = useParams();
  const [profile, setProfile] = useState();
  const [posts, setPosts] = useState();

  useEffect(() => {
    if (!profile) getUser(params.id).then(user => setProfile(user));
  }, [profile, params.id]);

  useEffect(() => {
    if (profile && !posts) {
      fetchAllPostsByUser(profile._id)
        .then((userPosts) => setPosts(userPosts));
    }
  }, [profile, posts]);

  return profile ? (
      <Row gutter={16}>
        <Col span={12}>
          <h1>{profile.firstname} {profile.lastname}'s profile</h1>

        </Col>
        <Col span={12}>
          <PostList posts={posts || []} />
        </Col>
      </Row>
  ) : null;
}

export default Profile;