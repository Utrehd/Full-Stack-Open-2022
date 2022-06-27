import React from 'react'
import InputField from './InputField'

const QueryField = ({query, setQuery}) => {

  const handleQuery = (event) => {
    console.log(event.target.value)
    setQuery(event.target.value)
  }

  return (
    <div>
      <InputField name={'Search'} value={query} handler={handleQuery} />
    </div>
  )
}

export default QueryField