import { InMemoryNotificationsRepository } from '@test/repositories/in-memory-notifications-repository';
import { SendNotification } from './send-notifications';

describe('Send notification', () => {
  it('should bet able to send notification', async () => {
    const notificationRepository = new InMemoryNotificationsRepository();
    const sendNotification = new SendNotification(notificationRepository);
    const { notification } = await sendNotification.execute({
      recipientId: 'xpto',
      content: 'social',
      category: 'expample-recipent-id',
    });

    expect(notificationRepository.notifications).toHaveLength(1);
  });
});
