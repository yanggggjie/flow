import { ChangeEvent, useCallback } from 'react'
import { Handle, Position } from 'reactflow'
import { twMerge } from 'tailwind-merge'
import CustomCard from '@/app/Flow/CustomNode/CustomCard'

export interface CustomNodeData {
  value: string
}

interface Props {
  data: CustomNodeData
}

export default function CustomNode({ data }: Props) {
  const onChange = useCallback((evt: ChangeEvent<HTMLInputElement>) => {
    console.log(evt.target.value)
  }, [])

  return (
    <div className={twMerge('flex flex-col gap-10 bg-white')}>
      <Handle
        type="target"
        position={Position.Left}
        style={{
          width: '10px',
          height: '10px',
          top: 30,
        }}
      />
      <Handle
        type="source"
        position={Position.Right}
        style={{
          width: '10px',
          height: '10px',
          top: 150,
        }}
      />
      <CustomCard></CustomCard>
    </div>
  )
}
