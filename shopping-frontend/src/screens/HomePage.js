import React,{useEffect,useState} from 'react';
import {View,Button,ScrollView,Text} from 'react-native';
import AppBar from '../components/AppBar';
import ProductCard from '../components/ProductCard';
import {axiosInstance} from '../axios_inst';

function HomeScreen({ navigation }) {
  const [itemList,setItemList]=useState([])
  useEffect(() => {
    axiosInstance.get("api/get_all/")
    .then(res=>{
      setItemList(res.data);
    })
    .catch(err=>{
      console.log(err)
    })
  }, [])//change later



  const ProductList=itemList.length?(
    itemList.map(item=>{
      return(
        <ProductCard 
        product_image={item.product_image}  
        product_name={item.prouct_name} 
        product_detail={item.product_detail} 
        product_cost={item.product_cost}
        product_rating={item.product_rating}/>
      )
    })

  ):(<Text>No Items in the list yet</Text>)

    return (
       <View style={{ flex:1 }}>
         <AppBar nav={navigation}/>
    
      <ScrollView  >
     {ProductList}

      
      </ScrollView>
      </View>
     
    );
  }

export default HomeScreen;