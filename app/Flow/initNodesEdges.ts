import { CustomNodeData } from '@/app/Flow/CustomNode/CustomNode'

export const initNodes = [
  {
    id: '1',
    type: 'CustomNode',
    data: {
      value: 'node 1',

      selected: false,
    },
    position: { x: 0, y: 0 },
  },
  {
    id: '2a',
    type: 'CustomNode',
    data: { value: 'node 2-1', selected: false },
    position: { x: 200, y: -50 },
  },
  {
    id: '2b',
    type: 'CustomNode',
    data: { value: 'node 2-2', selected: false },
    position: { x: 200, y: 150 },
  },
] as {
  id: string
  type?: string
  data: CustomNodeData
  position: {
    x: number
    y: number
  }
}[]

export const initEdges = [
  { id: 'e12a', source: '1', target: '2a', animated: true },
  { id: 'e12b', source: '1', target: '2b', animated: true },
]
