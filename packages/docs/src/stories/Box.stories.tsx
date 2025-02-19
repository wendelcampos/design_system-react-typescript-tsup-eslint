import type { Meta, StoryObj } from '@storybook/react'
import { Box, BoxProps, Text} from '@ignite-ui/react'
import React from 'react'

export default {
  title: 'Surfaces/Box',
  component: Box,
  args: {
    children: <Text>Testando</Text>
  },
  argTypes: {
    children: {
      control: {
        type: null
      }
    }
  }
} as unknown as Meta<BoxProps>

export const Primary: StoryObj<BoxProps> = {

}
