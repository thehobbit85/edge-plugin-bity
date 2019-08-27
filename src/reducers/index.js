// @flow
import { BityReducer as Bity, type BityState } from './BityReducer.js'
import { type Reducer, combineReducers } from 'redux'
import { type TransactionState, TransactionReducer as Transactions } from './TransactionReducer.js'
import { WalletReducer as Wallet, type WalletState } from './WalletReducer.js'

import { type Action } from '../types/ReduxTypes.js'

export type RootState = {
  +Wallet: WalletState,
  +Transactions: TransactionState,
  +Bity: BityState
}

export const rootReducer: Reducer<RootState, Action> = combineReducers({
  Wallet,
  Transactions,
  Bity
})
