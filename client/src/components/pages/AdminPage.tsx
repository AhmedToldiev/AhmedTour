import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { thunkAllTourLoad } from '../../redux/slices/history/createAsyncThunk';

export default function AdminPage(): JSX.Element {
    const dispatch = useAppDispatch()
    const selector = useAppSelector((store)=>store.historySlice.history)

    useEffect(()=>{
      void 
dispatch(thunkAllTourLoad())
    },[])
    console.log(selector,'----');
    
  return <div>AdminPage</div>;
}
