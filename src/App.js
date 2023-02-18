import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';

const { Header, Content, Footer } = Layout;

function App() {
  return (
    <Layout>
      <Header></Header>
      <Content>
        <Outlet />
      </Content>
      <Footer></Footer>
    </Layout>
  );
}

export default App;
