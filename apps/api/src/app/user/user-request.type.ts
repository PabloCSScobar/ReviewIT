export interface RequestWithUser extends Request {
  user: { userId: number; username: string };
}
