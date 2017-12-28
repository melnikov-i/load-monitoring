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

type DevicesButtonClickedIdType = number;

export interface DActionButtonClickedInterface {
  buttonId: DevicesButtonClickedIdType,
}

export type DTSpanIconProps =
  DeviceTableIconInterface & React.HTMLProps<HTMLSpanElement>;