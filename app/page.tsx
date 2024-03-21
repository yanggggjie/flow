'use client'
import { ReactFlowProvider } from 'reactflow'
import 'reactflow/dist/style.css'
import Flow from '@/app/Flow/Flow'

export default function Home() {
  return (
    <main className={'h-screen w-screen'}>
      {/*<Test></Test>*/}
      <ReactFlowProvider>
        <Flow></Flow>
      </ReactFlowProvider>
    </main>
  )
}
