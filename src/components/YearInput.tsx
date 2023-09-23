import { FC } from 'react'

interface Props {
  onChange: (year: number) => void
}

const YearInput: FC<Props> = ({ onChange }) => {
  return (
    <div>
      <input
        className="rounded border p-2"
        type="number"
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
    </div>
  )
}

export default YearInput
