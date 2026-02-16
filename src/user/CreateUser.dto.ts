//readonly the payload shouldnt change
export class CreateUserDto {
  readonly username: string;

  readonly email: string;

  readonly password: string;
}
