import type { Meta, StoryObj } from '@storybook/react'
import { Heading, HeadingProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Heading',
  component: Heading,
  args: {
    size: 'md',
    children: 'Custom Title',
  },
  argTypes: {
    size: {
      options: [
        'sm',
        'md',
        'lg',
        '2xl',
        '4xl',
        '5xl',
        '6xl'
      ],
      controls: { type: 'inline-radio' }
    }
  }
} as Meta<HeadingProps>

export const Primary: StoryObj<HeadingProps> = {}

export const CustomTage: StoryObj<HeadingProps> = {
    args: {
        children: 'H1 Heading',
        as: 'h1'
    },

    parameters: {
      docs: {
        description: {
          story: 'Por padrão o heading sempre sera um `h2`, mas podemos alterar isso com a propriedade `as`.'
        }
      }
    }
}
