import { User } from './user';

export interface BlogSection {
  _id?: string;
  heading: string;
  body: string;
}

export interface Blog {
  _id?: string;
  title: string;
  content: string;
  sections?: BlogSection[];
  author?: User | string;
  createdAt?: string;
}
