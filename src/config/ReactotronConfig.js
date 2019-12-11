import Reactotron from 'reactotron-react-native';

// Dev variable return aways true in developer enviroment
if (__DEV__) {
  const tron = Reactotron.configure()
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
