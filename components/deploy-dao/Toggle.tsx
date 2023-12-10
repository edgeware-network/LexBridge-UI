import React from 'react'
import updateAction from './updateAction'
import { useStateMachine } from 'little-state-machine'
import { Button, IconLightningBolt, IconMinus, IconPlus } from '@kalidao/reality'

export default function Toggle() {
  const { actions, state } = useStateMachine({ updateAction })
  const { hardMode } = state

  return (
    <div></div>
  )
}
