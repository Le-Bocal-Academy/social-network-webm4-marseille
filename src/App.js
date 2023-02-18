import { Layout, Menu } from 'antd';
import { Link, Outlet } from 'react-router-dom';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="App-header">
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={[
            { key: 'login', label: <Link to="/login">Log in</Link> },
            { key: 'signin', label: <Link to="/signin">Sign in</Link> },
          ]}
        />
      </Header>
      <Content className="App-content">
        <Outlet />
      </Content>
      <Footer className="App-footer">Social Network &copy; 2023 - Pascal Vaccaro</Footer>
    </Layout>
  );
}

export default App;
