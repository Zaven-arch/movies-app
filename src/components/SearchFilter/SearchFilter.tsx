import React from 'react'

import { Grid } from '@/components/Grid'
import { Title } from '@/components/Title'
import { TextField } from '@/components/TextField'

import SearchIcon from '@/assets/svg/search-icon.svg'
import CloseIcon from '@/assets/svg/close-icon.svg'

import { useSearchFilter } from './useSearchFilter'

export const SearchFilter: React.FC = () => {
  const { inputAttrs, isRemoveIconActive, onRemoveHandler } = useSearchFilter()

  return (
    <Grid className="gap-2">
      <Title text="Filters" />
      <div>
        <TextField
          {...inputAttrs}
          debounced
          className="h-10 [&>input]:text-lg"
          append={
            isRemoveIconActive ? (
              <CloseIcon className="w-6 h-6" onClick={onRemoveHandler} />
            ) : (
              <SearchIcon className="w-6 h-6" />
            )
          }
        />
      </div>
    </Grid>
  )
}
