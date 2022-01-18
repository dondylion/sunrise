import '../styles/tailwind.output.css';
import '../styles/tailwind.css'

export default function MyApp ({Component, pageProps}) {
    return (
        <Component {...pageProps}/>
    )
}