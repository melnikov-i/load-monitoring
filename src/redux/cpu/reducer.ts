import { combineReducers } from 'redux';

import { DataFromServerModel } from '@src/models';

import {
  CPU_COMMON_LOAD_COLLECTION,
  CPU_COMMON_LOAD_NEXT_ITEM
} from '@src/redux/cpu';


export type State = {
  readonly CPUCommonLoadCollection: DataFromServerModel,
  readonly CPUCommonLoadCurrentItem: number,
};

const initialState: DataFromServerModel[] = [
  {
    "cpu":"3.3","cpu1":"1.2","cpu2":"5.2","cpu3":"","cpu4":"","cpu5":"","cpu6":"","cpu7":"","cpu8":"","cpu9":"","cpu10":"","cpu11":"","cpu12":"","cpu13":"","cpu14":"","cpu15":"","cpu16":"","dwMemoryLoad":"50.2","hdd1":"71.8","hdd2":"16.4","hdd3":null,"hdd4":null,"hdd5":null,"hdd6":null,"hdd7":null,"hdd8":null,"net1":"a:3:{s:3:\"REC\";s:0:\"\";s:4:\"SEND\";s:0:\"\";s:3:\"ALL\";s:0:\"\";}","net2":"a:3:{s:3:\"REC\";s:0:\"\";s:4:\"SEND\";s:0:\"\";s:3:\"ALL\";s:0:\"\";}","net3":null,"net4":null,"net5":null,"net6":null,"data_add":"1511788222","id":"881254"
  },
  {
    "cpu":"3.6","cpu1":"1.8","cpu2":"5.6","cpu3":"","cpu4":"","cpu5":"","cpu6":"","cpu7":"","cpu8":"","cpu9":"","cpu10":"","cpu11":"","cpu12":"","cpu13":"","cpu14":"","cpu15":"","cpu16":"","dwMemoryLoad":"50.3","hdd1":"71.8","hdd2":"16.4","hdd3":null,"hdd4":null,"hdd5":null,"hdd6":null,"hdd7":null,"hdd8":null,"net1":"a:3:{s:3:\"REC\";s:0:\"\";s:4:\"SEND\";s:0:\"\";s:3:\"ALL\";s:0:\"\";}","net2":"a:3:{s:3:\"REC\";s:0:\"\";s:4:\"SEND\";s:0:\"\";s:3:\"ALL\";s:0:\"\";}","net3":null,"net4":null,"net5":null,"net6":null,"data_add":"1511788217","id":"881130"
  },
  {
    "cpu":"5","cpu1":"3.6","cpu2":"6.4","cpu3":"","cpu4":"","cpu5":"","cpu6":"","cpu7":"","cpu8":"","cpu9":"","cpu10":"","cpu11":"","cpu12":"","cpu13":"","cpu14":"","cpu15":"","cpu16":"","dwMemoryLoad":"50.7","hdd1":"71.8","hdd2":"16.4","hdd3":null,"hdd4":null,"hdd5":null,"hdd6":null,"hdd7":null,"hdd8":null,"net1":"a:3:{s:3:\"REC\";s:0:\"\";s:4:\"SEND\";s:0:\"\";s:3:\"ALL\";s:0:\"\";}","net2":"a:3:{s:3:\"REC\";s:0:\"\";s:4:\"SEND\";s:0:\"\";s:3:\"ALL\";s:0:\"\";}","net3":null,"net4":null,"net5":null,"net6":null,"data_add":"1511788212","id":"880990"
  },
  {
    "cpu":"24.6","cpu1":"31.7","cpu2":"17.3","cpu3":"","cpu4":"","cpu5":"","cpu6":"","cpu7":"","cpu8":"","cpu9":"","cpu10":"","cpu11":"","cpu12":"","cpu13":"","cpu14":"","cpu15":"","cpu16":"","dwMemoryLoad":"50.6","hdd1":"71.8","hdd2":"16.4","hdd3":null,"hdd4":null,"hdd5":null,"hdd6":null,"hdd7":null,"hdd8":null,"net1":"a:3:{s:3:\"REC\";s:0:\"\";s:4:\"SEND\";s:0:\"\";s:3:\"ALL\";s:0:\"\";}","net2":"a:3:{s:3:\"REC\";s:0:\"\";s:4:\"SEND\";s:0:\"\";s:3:\"ALL\";s:0:\"\";}","net3":null,"net4":null,"net5":null,"net6":null,"data_add":"1511788207","id":"880863"
  },
  {
    "cpu":"3.1","cpu1":"1.6","cpu2":"4.4","cpu3":"","cpu4":"","cpu5":"","cpu6":"","cpu7":"","cpu8":"","cpu9":"","cpu10":"","cpu11":"","cpu12":"","cpu13":"","cpu14":"","cpu15":"","cpu16":"","dwMemoryLoad":"50.7","hdd1":"71.8","hdd2":"16.4","hdd3":null,"hdd4":null,"hdd5":null,"hdd6":null,"hdd7":null,"hdd8":null,"net1":"a:3:{s:3:\"REC\";s:0:\"\";s:4:\"SEND\";s:0:\"\";s:3:\"ALL\";s:0:\"\";}","net2":"a:3:{s:3:\"REC\";s:0:\"\";s:4:\"SEND\";s:0:\"\";s:3:\"ALL\";s:0:\"\";}","net3":null,"net4":null,"net5":null,"net6":null,"data_add":"1511788202","id":"880729"
  },
  {
    "cpu":"2.3","cpu1":"1.2","cpu2":"3.4","cpu3":"","cpu4":"","cpu5":"","cpu6":"","cpu7":"","cpu8":"","cpu9":"","cpu10":"","cpu11":"","cpu12":"","cpu13":"","cpu14":"","cpu15":"","cpu16":"","dwMemoryLoad":"50.8","hdd1":"71.8","hdd2":"16.4","hdd3":null,"hdd4":null,"hdd5":null,"hdd6":null,"hdd7":null,"hdd8":null,"net1":"a:3:{s:3:\"REC\";s:0:\"\";s:4:\"SEND\";s:0:\"\";s:3:\"ALL\";s:0:\"\";}","net2":"a:3:{s:3:\"REC\";s:0:\"\";s:4:\"SEND\";s:0:\"\";s:3:\"ALL\";s:0:\"\";}","net3":null,"net4":null,"net5":null,"net6":null,"data_add":"1511788197","id":"880605"
  },
  {
    "cpu":"10.8","cpu1":"7","cpu2":"14.9","cpu3":"","cpu4":"","cpu5":"","cpu6":"","cpu7":"","cpu8":"","cpu9":"","cpu10":"","cpu11":"","cpu12":"","cpu13":"","cpu14":"","cpu15":"","cpu16":"","dwMemoryLoad":"50.8","hdd1":"71.8","hdd2":"16.4","hdd3":null,"hdd4":null,"hdd5":null,"hdd6":null,"hdd7":null,"hdd8":null,"net1":"a:3:{s:3:\"REC\";s:0:\"\";s:4:\"SEND\";s:0:\"\";s:3:\"ALL\";s:0:\"\";}","net2":"a:3:{s:3:\"REC\";s:0:\"\";s:4:\"SEND\";s:0:\"\";s:3:\"ALL\";s:0:\"\";}","net3":null,"net4":null,"net5":null,"net6":null,"data_add":"1511788192","id":"880483"
  },
  {
    "cpu":"2.8","cpu1":"0.6","cpu2":"5","cpu3":"","cpu4":"","cpu5":"","cpu6":"","cpu7":"","cpu8":"","cpu9":"","cpu10":"","cpu11":"","cpu12":"","cpu13":"","cpu14":"","cpu15":"","cpu16":"","dwMemoryLoad":"50.9","hdd1":"71.8","hdd2":"16.4","hdd3":null,"hdd4":null,"hdd5":null,"hdd6":null,"hdd7":null,"hdd8":null,"net1":"a:3:{s:3:\"REC\";s:0:\"\";s:4:\"SEND\";s:0:\"\";s:3:\"ALL\";s:0:\"\";}","net2":"a:3:{s:3:\"REC\";s:0:\"\";s:4:\"SEND\";s:0:\"\";s:3:\"ALL\";s:0:\"\";}","net3":null,"net4":null,"net5":null,"net6":null,"data_add":"1511788187","id":"880357"
  },
  {
    "cpu":"6.3","cpu1":"2.4","cpu2":"10.1","cpu3":"","cpu4":"","cpu5":"","cpu6":"","cpu7":"","cpu8":"","cpu9":"","cpu10":"","cpu11":"","cpu12":"","cpu13":"","cpu14":"","cpu15":"","cpu16":"","dwMemoryLoad":"51","hdd1":"71.8","hdd2":"16.4","hdd3":null,"hdd4":null,"hdd5":null,"hdd6":null,"hdd7":null,"hdd8":null,"net1":"a:3:{s:3:\"REC\";s:0:\"\";s:4:\"SEND\";s:0:\"\";s:3:\"ALL\";s:0:\"\";}","net2":"a:3:{s:3:\"REC\";s:0:\"\";s:4:\"SEND\";s:0:\"\";s:3:\"ALL\";s:0:\"\";}","net3":null,"net4":null,"net5":null,"net6":null,"data_add":"1511788182","id":"880226"
  }
];

export const reducer = combineReducers<State>({
  CPUCommonLoadCollection: ( state = initialState, action ) => {
    switch ( action.type ) {
      case CPU_COMMON_LOAD_COLLECTION:
        return [
          ...action.payload
          ];
      default:
        return state;
    }
  },
  CPUCommonLoadCurrentItem: ( state = 0, action ) => {
    switch ( action.type ) {
      case CPU_COMMON_LOAD_NEXT_ITEM:
        return action.payload;
      default:
        return state;
    }
  }
});