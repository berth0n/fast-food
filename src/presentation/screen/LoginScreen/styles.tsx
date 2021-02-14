import {StyleSheet} from 'react-native';
const Styles = StyleSheet.create({
  form: {
    height: '100%',
  },
  primaryBgColor: {backgroundColor: '#0bb'},
  fomrContainer: {
    height: '50%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  profile: {
    backgroundColor: '#fff',
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  profileName: {
    paddingTop: 20,
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  button: {
    width: 180,
    height: 50,
    borderColor: '#0bb',
    borderWidth: 1,
    borderRadius: 40,
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center',
  },
  boxContainer: {
    backgroundColor: '#fff',
    height: '80%',
    width: '100%',

    marginTop: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  wrapBox: {
    width: '50%',
    height: '50%',
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },
  boxElement: {
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '100%',
    borderWidth: 1,
    borderColor: '#0bb',
  },
});

export default Styles;
