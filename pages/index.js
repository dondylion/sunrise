import PageLayout from '../components/Layouts/Layout';
import face from "../images/face5.png";
import Image from 'next/image';

export default function Index () {

    return (
        <PageLayout title={"Главная страница"}>

          <div className="bg-second-color p-20 text-5xl text-white">
            <div className="mx-auto my-auto">
              <p>ПРОФЕССИОНАЛЬНАЯ</p>
              <p>КЛИНИКА</p>
              <p>ЭСТЕТИЧЕСКОЙ</p>
              <p>МЕДИЦИНЫ</p>
            </div>
          </div>

        </PageLayout>
    )
}