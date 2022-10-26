import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 16,
    borderColor: 'black',
    marginVertical: 8,
  },
  containerPlus: {
    borderColor: 'rgba(0, 184, 148,1.0)',
    backgroundColor: 'rgba(0, 184, 148,0.05)',
  },
  containerMinus: {
    borderColor: 'rgba(235, 77, 75,1.0)',
    backgroundColor: 'rgba(235, 77, 75,0.05)',
  },
  title: {
    fontFamily: 'AvenirNext-Medium',
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
  },
  time: {
    fontFamily: 'AvenirNext-Medium',
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
  },
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  price: {
    fontFamily: 'AvenirNext-Medium',
    fontSize: 14,
    fontWeight: '600',
    color: 'black',
    marginRight: 4,
  },
  difference: {
    fontFamily: 'AvenirNext-Medium',
    fontSize: 12,
    fontWeight: '500',
    color: 'black',
  },
  differencePlus: {
    color: 'rgba(0, 184, 148,1.0)',
  },
  differenceMinus: {
    color: 'rgba(235, 77, 75,1.0)',
  },
  updated: {
    fontFamily: 'AvenirNext-Medium',
    fontSize: 24,
    fontWeight: '700',
    color: 'black',
    textAlign: 'center',
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 8,
  },
  unsubscribeButton: {
    padding: 6,
    borderWidth: 1,
    borderRadius: 25,
    borderColor: 'rgba(83, 92, 104,1.0)',
    backgroundColor: 'rgba(83, 92, 104,0.05)',
    alignSelf: 'flex-end',
  },
  unsubscribe: {
    fontFamily: 'AvenirNext-Medium',
    fontSize: 10,
    fontWeight: '400',
    textAlign: 'right',
    color: 'rgba(83, 92, 104,1.0)',
  },
});
