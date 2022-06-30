import React from 'react'
import InputField from './InputField'

const QueryField = ({query, handleQuery}) => {

  return (
    <div>
      <InputField name={'Search'} value={query} handler={handleQuery} />
    </div>
  )
}

export default QueryField