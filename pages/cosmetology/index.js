import PageLayout from "../../components/Layouts/Layout";

export default function Cosmetology () {
    return (
        <PageLayout title={"Косметология"}>
            <div className="flex justify-center items-center">
              <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
                <img
                  className="w-full"
                  src="https://bugaga.ru/uploads/posts/2018-03/1521046397_stokovye-wtf-25.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Здесь будут косметологические услуги</div>
                  <p className="text-grey-darker text-base">
                    {'Заходите попозже (❁´◡`❁)'}
                  </p>
                </div>
              </div>
            </div>
        </PageLayout>
    )
}