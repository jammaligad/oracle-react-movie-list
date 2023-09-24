import { FC } from 'react'

interface Props {
  onChange: (year: number) => void
  placeholder?: string
}

const YearInput: FC<Props> = ({ onChange, placeholder }) => {
  return (
    <div>
      <input
        className="rounded border p-2"
        type="number"
        placeholder={placeholder}
        onChange={(e) => onChange(parseInt(e.target.value))}
      />
    </div>
  )
}

export default YearInput
