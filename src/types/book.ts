export interface Book {
  id: number;
  name: string;
  vol: number;
  user_id: number;
  pages_id: number[];
  date_create: Date;
  date_update: Date;
  date_publicated: Date;
}