export interface IUsecaseBase<T, R> {
  execute(dto: T): R
}