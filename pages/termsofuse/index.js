import PageLayout from "../../components/Layouts/Layout";

export default function TermsOfUse () {
    return (
        <PageLayout title={"Правила пользования"}>
            <div className="flex justify-center items-center">
              <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
                <img
                  className="w-full"
                  src="https://i.huffpost.com/gen/2778162/images/o-CONSEILS_GESTION_MAILS-facebook.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Здесь будут правила пользования, но мы пока не знаем чего</div>
                  <p className="text-grey-darker text-base">
                    {'Заходите попозже (❁´◡`❁)'}
                  </p>
                </div>
              </div>
            </div>
        </PageLayout>
    )
}