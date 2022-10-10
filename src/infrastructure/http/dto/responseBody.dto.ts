export class ResponseBodyDTO<T> {
  code: string;
  message: string;
  data?: T
}