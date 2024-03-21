'use client'
import ReactFlow from 'reactflow'
import 'reactflow/dist/style.css'
import Flow from '@/app/Flow/Flow'
import Test from '@/app/test/test'

export default function Home() {
  return (
    <main className={'h-screen w-screen'}>
      {/*<Test></Test>*/}
      <Flow></Flow>
    </main>
  )
}
