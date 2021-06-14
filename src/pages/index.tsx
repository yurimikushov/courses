import { GetStaticProps } from 'next'
import { useState } from 'react'
import { fetchMenu } from '../api'
import { IMenuItem } from '../interfaces'
import { withLayout } from '../layouts'
import {
  Heading,
  P,
  Label,
  Button,
  Rating,
  Input,
  Textarea,
} from '../components'
import { TopLevelCategory } from '../enums'

interface HomeProps extends Record<string, unknown> {
  menu: IMenuItem[]
}

const HomePage = ({ menu }: HomeProps): JSX.Element => {
  const [primaryArrowDown, setPrimaryArrowDown] = useState<boolean>(true)
  const [ghostArrowDown, setGhostArrowRight] = useState<boolean>(false)
  const [rating, setRating] = useState<number>(2)
  const [inputValue, setInputValue] = useState<string>('')
  const [textareaValue, setTextareaValue] = useState<string>('')

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
      <div className='rating'>
        <Rating className='static-rating' rating={4} />
        <Rating
          className='editable-rating'
          rating={rating}
          editable={true}
          setRating={setRating}
        />
      </div>
      <div className='inputs'>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder='Имя'
        />
      </div>
      <div className='textarea'>
        <Textarea
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
          placeholder='Комментарий'
        />
      </div>
      <pre className='menu-data' style={{ whiteSpace: 'pre-wrap' }}>
        {JSON.stringify(menu, null, 2)}
      </pre>
    </>
  )
}

const getStaticProps: GetStaticProps<HomeProps> = async () => {
  const menu: IMenuItem[] = await fetchMenu(TopLevelCategory.Courses)

  return {
    props: {
      menu,
    },
  }
}

export default withLayout(HomePage)
export { getStaticProps }
