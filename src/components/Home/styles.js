import { Dimensions } from 'react-native'
export default {
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  headerLeft: {
    flex: 0.3
  },
  headerBody: {
    flex: 0.4
  },
  textBody: {
    alignSelf: "center"
  },
  headerRight: {
    flex: 0.3
  },
  viewscroll: {
    width: Dimensions.get('screen').width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10
  },
  viewcon: {
    width: Dimensions.get('screen').width-20,
    backgroundColor:'white',
    marginBottom:8,
    elevation:5,
    outlineProvider: 'bounds',
    marginLeft:10,
    marginRight:10,
    borderRadius:5,
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  textcon: {
    fontSize: 20,
    padding: 25,
    color:'grey'
  },
  textfoot:{
    color:'gray'
  },
  badge:{
    color:'grey',
    padding:25,
    fontSize:25
  },
  textlisthh:{
    color:'grey',
    marginLeft:10,
    fontSize:20,
  },
  listdivider:{
    flex:1,
    flexDirection: 'row', 
    alignItems: 'center', 
    justifyContent: 'space-between',
  },
  listitem:{
    flex:1,
    justifyContent:'space-between',
    flexDirection:'row',
  },
  textlist:{
    fontSize:20,
    color:'grey'
  }
};
