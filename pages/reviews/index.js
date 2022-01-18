import PageLayout from "../../components/Layouts/Layout";

export default function Reviews () {
    return (
        <PageLayout title={"Отзывы"}>
            <div className="flex justify-center items-center">
              <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
                <img
                  className="w-full"
                  src="https://cdn.fishki.net/upload/post/2018/03/15/2537730/10022bd1bff5e4a6278b4c333c72faff.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Здесь будут наши акции</div>
                  <p className="text-grey-darker text-base">
                    {'Заходите попозже (❁´◡`❁)'}
                  </p>
                </div>
              </div>
            </div>
        </PageLayout>
    )
}