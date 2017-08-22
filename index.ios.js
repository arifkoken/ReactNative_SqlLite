
import React, { Component } from 'react';
import {
  AppRegistry,
  Text
} from 'react-native';
import SqlService from './Providers/SqlService'

export default class sqllite extends Component {
  constructor(props)
  {
    super(props);
    SqlService.query("CREATE TABLE IF NOT EXISTS TEST (Id TEXT)").then(res => { 
      SqlService.insert("TEST",["id"],["1"]).then(res=>{
        SqlService.select("TEST","*").then(res=>{
          console.log(res);
          debugger;
        })
      })
    })
  }
  render() {
    return (
      <Text style={{marginTop:20}}>Merhaba React Native</Text>
    );
  }
}
AppRegistry.registerComponent('sqllite', () => sqllite);
