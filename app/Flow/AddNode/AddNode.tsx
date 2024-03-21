import React from 'react'
interface Props {}
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import CustomCard from '@/app/Flow/CustomNode/CustomCard'

export default function AddNode({}: Props) {
  return (
    <div className={'fixed top-0 left-0 z-10'}>
      <Popover open={true}>
        <PopoverTrigger>drag and drop</PopoverTrigger>
        <PopoverContent className={'flex flex-col justify-center items-center'}>
          <div
            draggable={true}
            onDragStart={(event) => {
              event.dataTransfer.setData('application/reactflow', 'hahaha')
              event.dataTransfer.effectAllowed = 'move'
            }}
          >
            <CustomCard></CustomCard>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}
