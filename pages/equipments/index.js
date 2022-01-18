import PageLayout from "../../components/Layouts/Layout";

export default function Equipments () {
    return (
        <PageLayout title={"Оборудование"}>
            <div className="flex justify-center items-center">
              <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
                <img
                  className="w-full"
                  src="https://i.pinimg.com/originals/32/46/43/324643b2609eabdb2ae7ab559f1acab9.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Здесь вы сможете ознакомиться с нашим оборудованием</div>
                  <p className="text-grey-darker text-base">
                    {'Заходите попозже (❁´◡`❁)'}
                  </p>
                </div>
              </div>
            </div>
        </PageLayout>
    )
}