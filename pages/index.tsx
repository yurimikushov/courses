import Head from 'next/head'

const Home = (): JSX.Element => (
  <div>
    <Head>
      <title>Курсы здесь</title>
      <link rel='icon' href='/favicon.ico' />
    </Head>
    <Heading tag='h1'>Home page will be here</Heading>
    <Heading tag='h2'>Home page will be here</Heading>
    <Heading tag='h3'>Home page will be here</Heading>
  </div>
)

export default Home
