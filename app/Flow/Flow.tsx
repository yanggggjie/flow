import React from 'react'
import ReactFlow, { Controls, Background } from 'reactflow'
import 'reactflow/dist/style.css'
import Add from '@/app/Flow/Add'
interface Props {}

export default function Flow() {
  return (
    <div style={{ height: '100%' }}>
      <ReactFlow>
        <Background />
        <Controls
          style={{
            display: 'flex',
            flexDirection: 'row',
            left: '50%',
            transform: 'translate(-50%, -50%)',
          }}
        />
        <Add></Add>
      </ReactFlow>
    </div>
  )
}
