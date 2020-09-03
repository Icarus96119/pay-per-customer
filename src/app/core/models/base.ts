export interface Entity {
  id?: string;
  deletedAt?: string;
  createdAt?: string;
  updatedAt?: string;
}

export interface ChartItem {
  name: string;
  value: number;
}
