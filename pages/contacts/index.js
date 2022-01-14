import { Button } from "antd"
import Router from "next/router"
import PageLayout from "../../components/Layouts/Layout"

export default function Contacts () {
    return (
        <PageLayout title={"Контакты"}>
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