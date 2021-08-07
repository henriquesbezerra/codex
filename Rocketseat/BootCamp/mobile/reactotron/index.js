import Reactotron, {asyncStorage} from 'reactotron-react-native';
import async from '@react-native-community/async-storage';

Reactotron.configure({name: 'PeopleCommerce'})
  .useReactNative({
    syncStorage: true,
    overlay: true,
  })
  .setAsyncStorageHandler(async)
  .use(asyncStorage())
  .connect();

console.tron = Reactotron;
