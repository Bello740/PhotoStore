import {showMessage} from 'react-native-flash-message';

export class CustomFlashMessage {
  static error(message: string, title = 'Oops') {
    showMessage({
      icon: 'info',
      type: 'danger',
      message: title,
      description: message,
    });
  }
}
