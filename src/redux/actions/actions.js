import api from '../../Api/api';
import actionTypes from './actionTypes';

import {Platform} from 'react-native';
import toast from 'react-native-toast';

export default actions = {
  checkPermissions: (pass) => {
    return (dispatch) => {
      let permission = null;

      if (Platform.OS == 'android') {
        permission = 'android.permission.ACCESS_FINE_LOCATION';
      }
      if (Platform.OS == 'ios') {
        permission = 'ios.permission.LOCATION_WHEN_IN_USE';
      }

      Permissions.check(permission)
        .then((v) => {
          console.log('vv', v);
          if (v == 'denied') {
            Permissions.request(permission);
          }
          if (v == 'blocked') {
            toast.show(
              'You need to grant all permissions to use all features of the app',
            );
          }
          if (v == 'granted') {
            pass(true);
          }
        })
        .catch((err) => {
          console.log('err', err);
        });
    };
  },

  setLoaderKey: (loadingKey) => {
    return (dispatch) => {
      dispatch({type: actionTypes.setLoaderKey, loadingKey: loadingKey});
    };
  },
};
