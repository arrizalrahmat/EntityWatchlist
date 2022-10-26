import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    margin: 16,
    display: 'flex',
  },
  innerContainer: {
    marginBottom: 16,
  },
  textInputError: {
    borderColor: 'rgba(235, 77, 75,1.0)',
  },
  title: {
    fontFamily: 'AvenirNext-Medium',
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
  },
  textInputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInput: {
    borderWidth: 1,
    borderColor: 'black',
    flex: 8,
    height: 36,
    borderRadius: 10,
    padding: 8,
    marginTop: 16,
  },
  inputEntityButton: {
    flex: 2,
  },
  error: {
    fontFamily: 'AvenirNext-Medium',
    fontSize: 12,
    fontWeight: '500',
    color: 'rgba(235, 77, 75,1.0)',
  },
});
