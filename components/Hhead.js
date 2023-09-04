import Head from 'next/head';

export default function Hhead(props) {
    return (
      <Head>
        <title>{props.data}</title>
      </Head>

    )
  }