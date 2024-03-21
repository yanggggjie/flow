'use client'
import React from 'react'
interface Props {}
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'

export default function AddNode({}: Props) {
  return (
    <div className={'fixed top-0 left-0 z-10'}>
      <Popover open={true}>
        <PopoverTrigger>add node</PopoverTrigger>
        <PopoverContent>
          <div
            className={'px-10 py-10 border-4'}
            draggable={true}
            onDragStart={(event) => {
              event.dataTransfer.setData('application/json', 'hahaha')
              event.dataTransfer.effectAllowed = 'move'
            }}
          >
            some thing
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
