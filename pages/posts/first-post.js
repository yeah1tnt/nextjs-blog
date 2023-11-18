import Link from 'next/link'
import Image from 'next/image'
import Head from 'next/head'
import Script from 'next/script'

import Layout from '../../components/layout'

const YourComponent =() =>(
    <Image
        src="/images/profile.jpg"
        alt="Your Name"
        width={144}
        height={144}
    />
)

export default function FirstPost(){
    return(
        <Layout>
            <Head>
                <title>First Post</title>

            </Head>
                <Script src="https://connect.facebook.net/en_US/sdk.js"
                strategy="lazyOnload"
                onLoad={() => console.log('Facebook script loaded')}>
                    
                </Script>
            
            <h1>First Post</h1>
            <h2>
                <Link href="/">Back to home</Link>
            </h2>
        
        </Layout>
    )
}