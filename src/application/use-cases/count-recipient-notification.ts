import { Injectable } from '@nestjs/common';
import { NotificationsRepository } from '../repositories/notifications-repository';
import { NotificationNotFound } from './errors/notification-not-found';

interface ICountRecipientNotificationRequest {
  recipientId: string;
}

interface ICountRecipientNotificationResponse {
  count: number;
}
@Injectable()
export class CountRecipientNotification {
  constructor(private notificationRepository: NotificationsRepository) {}
  async execute(
    request: ICountRecipientNotificationRequest,
  ): Promise<ICountRecipientNotificationResponse> {
    const { recipientId } = request;
    const count = await this.notificationRepository.countManyByRecipientId(
      recipientId,
    );
    return {
      count,
    };
  }
}
