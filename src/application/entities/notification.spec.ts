import { Content } from './content';
import { Notification } from './notification';

describe('Notification', () => {
  it('should be able to create a notification', () => {
    const notification = new Notification({
      content: new Content('New request'),
      category: 'social',
      recipientId: 'xpto',
    });
    expect(notification).toBeTruthy();
  });
});
