import { Outlet } from "react-router-dom";
import Preloader from "../components/Preloader";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
// import ControlSidebar from "../components/ControlSidebar";
import Footer from "../components/Footer";
import ContentHeader from "../components/ContentHeader";

const Layout: React.FC = () => {
    return (
        <div className="wrapper">
            {/* ✅ Preloader 預載畫面 */}
            <Preloader />

            {/* ✅ Navbar 導覽列 */}
            <Navbar />

            {/* ✅ Sidebar 側邊欄 */}
            <Sidebar />

            {/* ✅ 主要內容區塊 */}
            <div className="content-wrapper">
                {/* ✅ Content Header（頁首） */}
                <ContentHeader />

                {/* <!-- Main content --> */}
                <section className="content">
                    {/* 渲染當前頁面的內容 */}
                    <Outlet />
                </section>
            </div>

            <Footer />

            {/* ✅ 右側控制側邊欄（可選） */}
            {/* <ControlSidebar /> */}
        </div>
    );
};

export default Layout;