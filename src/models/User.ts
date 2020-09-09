export class User {
  public readonly id: string

  public firstName: string
  public lastName: string
  public email: string
  public password: string

  constructor(props: User) {
    Object.assign(this, props)
  }
}
