
import 'antd/dist/antd.css';
import PageLayout from "../components/Layouts/Layout";
import PageFooter from "../components/Layouts/Footer";
import MedicalServices from './MedicalServices/medicalservices';

export default function Index () {
    return(
        <div>
            <PageLayout />
            <MedicalServices />
            <PageFooter />
        </div>
    )
}