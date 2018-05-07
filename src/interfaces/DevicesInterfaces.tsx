export interface DevicesTableInterface {
  icon: string,
  comp_name: string,
  ip: string,
  system: string,
  cpu_name: string,
  memory: string;
  to: string,
}

export interface DevicesLoadInterface {
  id: string,
  params: {
    state: string,
    lastconn: number,
    loading: {
      cpu: string,
      ram: string,
    }
  }
}