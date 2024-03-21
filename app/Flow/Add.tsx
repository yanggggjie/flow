import React, { useState } from 'react'
interface Props {}

export default function Add({}: Props) {
  const [open, setOpen] = useState(false)
  return (
    <div>
      <button>{open ? '-' : '+'}</button>
    </div>
  )
}
