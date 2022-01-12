import { Button } from "antd"
import Router from "next/router"
import PageLayout from "../../components/Layouts/Layout"

export default function Contacts () {
    return (
        <PageLayout title={"Контакты"}>
            <h1 style={{fontSize: 50}}>Контакты</h1>
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