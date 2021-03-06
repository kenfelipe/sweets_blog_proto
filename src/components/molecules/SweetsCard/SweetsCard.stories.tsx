import { Story, Meta } from '@storybook/react'
import { SweetsCard, SweetsCardProps } from './SweetsCard'

import { mobileFirstViewportParams } from '@/utils/storybook/mobileFirstViewport'

export default {
  title: 'Molecules/SweetsCard',
  component: SweetsCard,
  parameters: {
    ...mobileFirstViewportParams.small,
  },
} as Meta

const Template: Story<SweetsCardProps> = args => (
  <SweetsCard {...args} />
)

export const PureCard = Template.bind({})
PureCard.storyName = 'No Link'
PureCard.args = {
  name: 'Tiramisu',
  price: 58,
  imageUrl: 'https://source.unsplash.com/320x320/?desserts', // random image generator api
}

export const AsLink = Template.bind({})
AsLink.storyName = 'With Link'
AsLink.args = {
  name: 'Pudding',
  price: 12.89,
  imageUrl: 'https://source.unsplash.com/320x320/?sweets', // random image generator api
  isLink: true,
  href: 'https://source.unsplash.com/320x320/?cake',
}
