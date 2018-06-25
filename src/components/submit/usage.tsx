import * as React from 'react';
import { SubmitConnected as Submit } from './connected';
import { ISubmitParams } from '@src/core/interfaces';
export default ({params, callback}: {params: ISubmitParams, callback: (items: any) => any}) => 
  <Submit params={params} callback={callback} />