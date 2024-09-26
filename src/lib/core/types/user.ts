
export interface User {
  id: number;
  name: string;
  email: string;
  password: string;
  region: Region;
}

export interface Region {
  id: number;
  name: string;
}
