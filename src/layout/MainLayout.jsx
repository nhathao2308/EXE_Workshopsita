import { Outlet } from "react-router-dom";
import { Layout, theme } from "antd";
import CustomFooter from "@/components/Footer/CustomFooter";
import CustomHeader from "@/components/Header/CustomHeader";
import Guide from "@/components/Home/Guide/Guide";
import HomeSlider from "@/components/Home/HomeSlider/HomeSlider";
import Workshop from "@/components/Home/Workshop/Workshop";
import News from "@/components/Home/News/News";
import Search from "antd/es/transfer/search";

const { Header, Sider, Content } = Layout;

const MainLayout = ({ showFooter = true }) => {
  const {
    token: { colorBgContainer, borderRadiusLG, ...other },
  } = theme.useToken();
  return (
    <Layout id="layout-body" style={{ backgroundColor: "#ffffff" }}>
      <CustomHeader />
      <Content
        style={{
          display: "flex",
          minHeight: 500,
          borderRadius: borderRadiusLG,
        }}
      >
        <Outlet />
        {/* <Workshop /> */}
        {/* <News /> */}
        {/* <Search /> */}
        {/* <Guide /> */}
      </Content>
      {showFooter && <CustomFooter />}
    </Layout>
  );
};

export default MainLayout;
