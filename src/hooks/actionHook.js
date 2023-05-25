
import {useDispatch} from 'react-redux'
import {bindActionCreators} from '@reduxjs/toolkit'
import {filterActions} from '../store/FilterSlice'
import {favouriteActions} from '../store/favouritesSlice'

const actions = {
  ...filterActions,
  ...favouriteActions
}

export const useActions = () => {
  const dispatch = useDispatch()
  return bindActionCreators(actions, dispatch)
}