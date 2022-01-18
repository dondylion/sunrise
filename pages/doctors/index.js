import PageLayout from "../../components/Layouts/Layout";

export default function Doctors () {
    return (
        <PageLayout title={"Доктора"}>
            <div className="flex justify-center items-center">
              <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
                <img
                  className="w-full"
                  src="https://thumbs.dreamstime.com/b/fight-against-obesity-photo-doctor-pointing-gun-cheeseburger-67551619.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Здесь будут фоточки наших докторов, их грамоты и всё такое</div>
                  <p className="text-grey-darker text-base">
                    {'Заходите попозже (❁´◡`❁)'}
                  </p>
                </div>
              </div>
            </div>
        </PageLayout>
    )
}