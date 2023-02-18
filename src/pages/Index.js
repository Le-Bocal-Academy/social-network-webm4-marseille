import { useState, useEffect } from "react";
import { Link, useRouteLoaderData } from 'react-router-dom';
import { Layout } from 'antd';

import PostList from "../containers/PostList";
import CreatePost from "../components/CreatePost";
import { getPosts } from "../lib/api";

function Index() {
  const authUser = useRouteLoaderData("app");
  const [posts, setPosts] = useState([]);

  function fetchPosts() {
    getPosts().then((res) => setPosts(res.posts));
  }

  useEffect(fetchPosts, []);

  return (
    <>
      <h1>Welcome to your social network</h1>
      <Layout style={{ width: '100%'}}>
        <Layout.Sider theme="light" width={320} style={{ padding: 16 }}>
          {authUser ? <CreatePost onPostCreated={fetchPosts} /> : <Link to="/login">Log in to create a new post</Link>}
        </Layout.Sider>
        <Layout.Content style={{ padding: '0 24px' }}>
          <PostList posts={posts} onChange={fetchPosts} />
        </Layout.Content>
      </Layout>
    </>
  )
}

export default Index;