import React from 'react'
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
} from 'reactflow'
import 'reactflow/dist/style.css'
import AddNode from '@/app/Flow/AddNode/AddNode'
interface Props {}

export default function Flow() {
  const [nodes, setNodes, onNodesChange] = useNodesState([])
  const [edges, setEdges, onEdgesChange] = useEdgesState([])

  return (
    <div style={{ height: '100%' }}>
      <ReactFlow
        onDrop={(event) => {
          event.preventDefault()
          console.log('drop')
        }}
        onDragOver={(event) => {
          event.preventDefault()
          event.dataTransfer.dropEffect = 'move'
        }}
        onNodeDragStop={() => {
          console.log('stop')
        }}
        onDragEnd={(e) => {
          console.log('hah')
        }}
      >
        <Background />
        <Controls
          style={{
            display: 'flex',
            flexDirection: 'row',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <AddNode></AddNode>
      </ReactFlow>
    </div>
  )
}
