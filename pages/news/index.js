import PageLayout from "../../components/Layouts/Layout";

export default function News () {
    return (
        <PageLayout title={"Новости"}>
            <div className="flex justify-center items-center">
              <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
                <img
                  className="w-full"
                  src="https://uploads.tradestation.com/uploads/2019/02/women_at_computer_AdobeStock_170182265.jpeg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Здесь будут новости</div>
                  <p className="text-grey-darker text-base">
                    {'Заходите попозже (❁´◡`❁)'}
                  </p>
                </div>
              </div>
            </div>
        </PageLayout>
    )
}