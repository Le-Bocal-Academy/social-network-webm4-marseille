import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

import Nav from './components/Nav';
import './App.css';

const { Header, Content, Footer } = Layout;

function App() {

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Header className="App-header">
        <Nav />
      </Header>
      <Content className="App-content">
        <Outlet />
      </Content>
      <Footer className="App-footer">Social Network &copy; 2023 - Pascal Vaccaro</Footer>
    </Layout>
  );
}

export default App;
