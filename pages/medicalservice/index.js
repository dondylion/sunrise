import PageLayout from "../../components/Layouts/Layout";

export default function MedicalService () {
    return (
        <PageLayout title={"Медицинские услуги"}>

            <div className="flex justify-center items-center">
              <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
                <img
                  className="w-full"
                  src="https://thumbs.dreamstime.com/b/старуха-показывая-о-обренный-знак-38854150.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Здесь будут медицинские услуги</div>
                  <p className="text-grey-darker text-base">
                    {'Заходите попозже (❁´◡`❁)'}
                  </p>
                </div>
              </div>
            </div>

        </PageLayout>
    )
}