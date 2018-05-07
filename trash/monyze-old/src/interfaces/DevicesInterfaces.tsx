// interface DeviceTableIconInterface {
//   icon: string,
// }

// export interface LoadParamsInterface {
//   state: string,
//   lastconn: number,
//   loading: {
//     cpu: string,
//     ram: string,
//   }
// }

export interface DevicesTableInterface {
  icon: DeviceTableIconInterface['icon'],
  comp_name: string,
  ip: string,
  system: string,
  cpu_name: string,
  memory: string;
  to: string,
}

export interface DActionAnchorClickedInterface {
  isClicked: boolean,
}

// export interface DevicesLoadInterface {
//   id: string,
//   params: LoadParamsInterface
// }

export interface DevicesLoadCurrentItemInterface {
  id: DevicesTableInterface['to']
}

// export type DTSpanIconProps =
//   DeviceTableIconInterface & React.HTMLProps<HTMLSpanElement>;