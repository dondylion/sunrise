import PageLayout from "../../components/Layouts/Layout";

export default function Promotions () {
    return (
        <PageLayout title={"Акции"}>
            <div className="flex justify-center items-center">
              <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
                <img
                  className="w-full"
                  src="https://i.pinimg.com/736x/ef/f9/c3/eff9c399d76b168f85ac6b16d424b6b4--stockphotos-photos-google.jpg"
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