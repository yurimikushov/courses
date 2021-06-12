import { Heading } from '../../components'
import { Advantage } from './Advantage/Advantage'
import { AdvantagesProps } from './Advantages.props'

const Advantages = ({
  advantages,
  className,
  ...props
}: AdvantagesProps): JSX.Element => (
  <div className={className} {...props}>
    <Heading tag='h2'>Преимущества</Heading>
    {advantages.map((advantage) => (
      <Advantage key={advantage._id} {...advantage} />
    ))}
  </div>
)

export { Advantages }
