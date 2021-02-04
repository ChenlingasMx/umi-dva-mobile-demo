import React, { useState } from 'react';
import styles from './index.less'
import { SearchBar } from 'antd-mobile'
const SearchComponent = ({
  onSearch,
  ...props
}) => {
  const [value, setValue] = useState('')
  return (
    <div>
      <SearchBar
        className={styles.search_item}
        onChange={val => setValue(val)}
        onSubmit={(val) => onSearch(val)}
        value={value}
        {...props}
      />
    </div>
  )
}

export default SearchComponent