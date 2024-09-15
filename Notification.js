import React from 'react';
import 'react-notifications/lib/notifications.css';
import { NotificationContainer, NotificationManager } from 'react-notifications';

function Notification() {

  const shownotification = () => {
    // NotificationManager.info("Welcome");
    // NotificationManager.success('Success message', 'Title here');
    // NotificationManager.warning('Warning message', 'Close after 3000ms', 3000);
    NotificationManager.error('Error message', 'Click me!', 5000, () => {
      alert('callback');
    });
  }

  return (
    <div className="demo">
      <NotificationContainer/>
      <button onClick={shownotification}>
        Save
      </button>
    </div>
  );
}

export default Notification;
