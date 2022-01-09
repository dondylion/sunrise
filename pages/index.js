
import 'antd/dist/antd.css';
import PageLayout from "../components/Layouts/Layout";
import PageFooter from "../components/Layouts/Footer";
import MainContent from "../components/Content/MainContent";

export default function Index () {
    return(
        <div>
            <PageLayout />
            <MainContent />
            <PageFooter />
        </div>
    )
}