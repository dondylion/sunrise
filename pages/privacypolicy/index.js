import PageLayout from "../../components/Layouts/Layout"

export default function PrivacyPolicy () {
    return (
        <PageLayout title={"Политика конфиденциальности"}>
            <div className="flex justify-center items-center">
              <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
                <img
                  className="w-full"
                  src="http://img.advertology.ru/aimages/2014/11/26/Totino9.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Здесь вы сможете ознакомиться с нашей политикой конфиденциальности</div>
                  <p className="text-grey-darker text-base">
                    {'Заходите попозже (❁´◡`❁)'}
                  </p>
                </div>
              </div>
            </div>
        </PageLayout>    )
}