import { Button } from "antd"
import Router from "next/router"
import PageLayout from "../../components/Layouts/Layout"

export default function Contacts () {
    return (
        <PageLayout title={"Контакты"}>
            <div className="flex justify-center items-center">
              <div className="max-w-xs rounded overflow-hidden shadow-lg my-2">
                <img
                  className="w-full"
                  src="https://koobas.ru/content/1-blog/106-mudrost/4GqUQM8.jpg"
                  alt="Sunset in the mountains"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">Здесь будут наши контакты</div>
                  <p className="text-grey-darker text-base">
                    {'Заходите попозже (❁´◡`❁)'}
                  </p>
                </div>
              </div>
            </div>
            <Button 
                type="primary"
                onClick={()=>{ Router.push('/') }}
                style={{margin: 30}}
            >
                Go home
            </Button> 
        </PageLayout>
    )
}