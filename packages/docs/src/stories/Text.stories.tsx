import type { Meta, StoryObj } from '@storybook/react'
import { Text, TextProps } from '@ignite-ui/react'

export default {
  title: 'Typography/Text',
  component: Text,
  args: {
    size: 'md',
    children: 'Example Text',
  },
  argTypes: {
    size: {
      options: [
        'xxs',
        'xs',
        'sm',
        'md',
        'lg',
        'xl',
        '2xl',
        '4xl',
        '5xl',
        '6xl',
        '7xl',
        '8xl',
        '9xl',
      ],
      controls: { type: 'inline-radio' }
    }
  }

} as Meta<TextProps>

export const Primary: StoryObj<TextProps> = {}

export const CustomTage: StoryObj<TextProps> = {
    args: {
        children: 'Strong text',
        as: 'strong'
    }
}
