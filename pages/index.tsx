import { useState } from 'react'
import { Heading, P, Label, Button } from '../components'

const Home = (): JSX.Element => {
  const [primaryArrowDown, setPrimaryArrowDown] = useState<boolean>(true)
  const [ghostArrowDown, setGhostArrowRight] = useState<boolean>(false)

  return (
    <>
      <div className='headings'>
        <Heading tag='h1'>Home page will be here</Heading>
        <Heading tag='h2'>Home page will be here</Heading>
        <Heading tag='h3'>Home page will be here</Heading>
      </div>
      <div className='paragraphs'>
        <P size='l'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          ipsam.
        </P>
        <P>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          ipsam.
        </P>
        <P size='s'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati,
          ipsam.
        </P>
      </div>
      <div className='labels'>
        <Label color='primary'>Primary</Label>
        <Label size='m'>Ghost</Label>
        <Label size='s' color='gray'>
          gray
        </Label>
        <Label size='s' color='green'>
          Green
        </Label>
        <Label href='https://hh.ru' size='m' color='hh'>
          hh.ru
        </Label>
      </div>
      <div className='buttons'>
        <Button appearance='primary'>Primary</Button>
        <Button appearance='ghost'>Ghost</Button>
        <Button
          appearance='primary'
          arrow={primaryArrowDown ? 'down' : 'right'}
          onClick={() => setPrimaryArrowDown((down) => !down)}
        >
          Primary arrow
        </Button>
        <Button
          appearance='ghost'
          arrow={ghostArrowDown ? 'down' : 'right'}
          onClick={() => setGhostArrowRight((down) => !down)}
        >
          Ghost arrow
        </Button>
      </div>
    </>
  )
}

export default Home
