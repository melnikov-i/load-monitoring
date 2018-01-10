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

export type DroppedMenuHandlerRemoveType = (
  e: Event,
  changeDevicesActionButtonClickedId: 
  (payload: DevicesButtonClickedIdType) => any
) => any;

export type DroppedMenuHandlerAddType = (
  e: React.MouseEvent<HTMLElement>,
  DevicesActionButtonClickedId: DevicesButtonClickedIdType,
  changeDevicesActionButtonClickedId: 
  (payload: DevicesButtonClickedIdType) => any
) => any;

export interface DActionButtonClickedInterface {
  isClicked: boolean,
}

export type DTSpanIconProps =
  DeviceTableIconInterface & React.HTMLProps<HTMLSpanElement>;