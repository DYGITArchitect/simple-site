import { Layout } from "antd";
import { Content, Footer } from "antd/es/layout/layout";
import "./App.css";
import AppRouter from "./components/AppRouter";
import DYGFooter from "./components/Footer/DYGFooter";
import DYGHeader from "./components/Header/DYGHeader";

function MainApp() {
  console.log("MainApp started");

  return (
    <div className="App" data-testid="main-div">
      <Layout>
        <DYGHeader />
        <Layout>
          <Content className="site-layout-content">
            <AppRouter />
          </Content>
        </Layout>
        <DYGFooter />
      </Layout>
    </div>
  );
}
export default MainApp;
