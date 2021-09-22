/* eslint-disable @next/next/no-title-in-document-head */
/* eslint-disable @next/next/no-document-import-in-page */
import Document, {Html, Head, Main, NextScript} from 'next/document';

export default class MyDocument extends Document {
    render() {
        return (
            <Html>
                <Head>                                        
                    <link rel="preconnect" href="https://fonts.googleapis.com" />
                    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;700&display=swap" rel="stylesheet" />
                    <link rel="shortcut icon" href="/favicon.png" type="image/png" />
                    <meta
                    name="description"
                    content="K Filmes - Você sonha e a gente Realiza!"
                    />      
                </Head>
                <body>
                    <Main />
                    <NextScript />
                </body>
            </Html>
        );        
    }
}
