import { IsNotEmpty, IsUUID } from 'class-validator';

export class CreateNotificationBody {
  @IsUUID()
  @IsNotEmpty()
  recipientId: string;
  @IsNotEmpty()
  content: string;
  @IsNotEmpty()
  category: string;
}
