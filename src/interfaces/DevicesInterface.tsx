interface DeviceTableIconInterface {
  icon: string,
}

export interface DevicesTableInterface {
  icon: DeviceTableIconInterface['icon'],
  comp_name: string,
  ip: string,
  system: string,
  cpu_name: string,
  memory: string;
  to: string,
}

export type DevicesButtonClickedIdType = string;




export interface DActionButtonClickedInterface {
  isClicked: boolean,
}

export type DTSpanIconProps =
  DeviceTableIconInterface & React.HTMLProps<HTMLSpanElement>;