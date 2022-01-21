import PageLayout from '../components/Layouts/Layout';
import face from "../images/face5.png";
import Image from 'next/image';

export default function Index () {

    return (
        <PageLayout title={"Главная страница"}>

          <div className="bg-second-color p-24 text-7xl text-white flex flex-row">
            <div className="mx-auto my-auto">
              <p>ПРОФЕССИОНАЛЬНАЯ</p>
              <p>КЛИНИКА</p>
              <p>ЭСТЕТИЧЕСКОЙ</p>
              <p>МЕДИЦИНЫ</p>
            </div>
            <div className="h-[100%]">
              <Image src={face}/>
            </div>
          </div>

        </PageLayout>
    )
}