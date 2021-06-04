import { Heading, P, Label } from '../components'

const Home = (): JSX.Element => (
  <>
    <Heading tag='h1'>Home page will be here</Heading>
    <Heading tag='h2'>Home page will be here</Heading>
    <Heading tag='h3'>Home page will be here</Heading>
    <P size='l'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ipsam.</P>
    <P>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ipsam.</P>
    <P size='s'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati, ipsam.</P>
    <Label color='primary'>Primary</Label>
    <Label size='m'>Ghost</Label>
    <Label size='s' color='gray'>gray</Label>
    <Label size='s' color='green'>Green</Label>
    <Label href='https://hh.ru' size='m' color='hh'>hh.ru</Label>
  </>
)

export default Home
