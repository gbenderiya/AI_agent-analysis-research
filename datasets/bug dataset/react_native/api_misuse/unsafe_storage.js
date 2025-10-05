/* API misuse/security: storing sensitive tokens in AsyncStorage without encryption */
import AsyncStorage from '@react-native-async-storage/async-storage';

export async function saveToken(token){
  await AsyncStorage.setItem('token', token); // no encryption or secure storage
}
