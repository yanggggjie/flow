import React, { useMemo, useRef } from 'react'
import ReactFlow, {
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  useReactFlow,
} from 'reactflow'
import 'reactflow/dist/style.css'
import AddNode from '@/app/Flow/AddNode/AddNode'
import { v4 as uuidv4 } from 'uuid'
import { initEdges, initNodes } from '@/app/Flow/initNodesEdges'
import CustomNode from '@/app/Flow/CustomNode/CustomNode'

interface Props {}

export default function Flow() {
  const reactFlowInstance = useReactFlow()
  const flowContainerRef = useRef<HTMLDivElement>(null)
  const [nodes, setNodes, onNodesChange] = useNodesState(initNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initEdges)

  function onNodeClick() {}
  function onDrop(event: React.DragEvent<HTMLElement>) {
    event.preventDefault()
    const data = event.dataTransfer.getData('application/reactflow')
    const newNode = {
      id: uuidv4(),
      data: { value: 123 },
      type: 'CustomNode',
      position: reactFlowInstance.project({
        x: event.clientX - 100,
        y: event.clientY - 50,
      }),
    }
    setNodes((prevState) => {
      return [...prevState, newNode]
    })
  }
  function onDragOver(event: React.DragEvent<HTMLElement>) {
    event.preventDefault()
    event.dataTransfer.dropEffect = 'move'
  }

  function onNodeDragStop() {}
  const nodeTypes = useMemo(() => ({ CustomNode }), [])
  const edgeTypes = {}
  function onConnect(p: any) {
    const newEdge = {
      id: uuidv4(),
      source: p.source,
      target: p.target,
      animated: true,
    }
    setEdges((prevState) => {
      return [...prevState, newEdge]
    })
  }
  function onInit() {}
  return (
    <div style={{ height: '100%' }} ref={flowContainerRef}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onNodeClick={onNodeClick}
        onEdgesChange={onEdgesChange}
        onDrop={onDrop}
        onDragOver={onDragOver}
        onNodeDragStop={onNodeDragStop}
        nodeTypes={nodeTypes}
        edgeTypes={edgeTypes}
        onConnect={onConnect}
        onInit={onInit}
        fitView={true}
        deleteKeyCode={['Delete']}
        minZoom={0.1}
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
