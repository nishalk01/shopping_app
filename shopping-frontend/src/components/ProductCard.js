import  React from 'react';
import { Avatar, Button, Card, Title, Paragraph,Divider,Text } from 'react-native-paper';


const ProductCard = (props) => (
  <Card onPress={()=>{console.log("u clicked")}} style={{ marginBottom:20 }}>
    <Card.Content >
      <Title>Card title</Title>
    </Card.Content >
    <Card.Cover  resizeMode={`cover`} style={{flexDirection: 'column',height:400}} source={{ uri: 'https://elcopcbonline.com/var/photo/product/2000x4000/4/176/4.jpg' }} />
    <Card.Content >
    <Text>Lorem Ipsum is simply dummy text of the printing and typesetting industry.does it come from?Contrary to popular belief, 
</Text>
</Card.Content>
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
    <Divider />
  </Card>
);

export default ProductCard;