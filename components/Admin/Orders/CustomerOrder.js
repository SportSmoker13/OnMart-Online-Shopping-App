import React, { useEffect } from "react";
import firebase from "firebase";

function CustomerOrder() {
  const [order, setOrder] = useState([]);
  useEffect(() => {
    firebase
      .firestore()
      .collection("admin")
      .doc(shoper)
      .collection("items")
      .onSnapshot((snapshot) =>
        setOrder(snapshot.docs.map((doc) => doc.data()))
      );
  }, []);

  return (
    <View>
      {list.map((l, i) => (
        <ListItem key={i} bottomDivider>
          <Avatar source={{ uri: l.avatar_url }} />
          <ListItem.Content>
            <ListItem.Title>{l.name}</ListItem.Title>
            <ListItem.Subtitle>{l.subtitle}</ListItem.Subtitle>
          </ListItem.Content>
        </ListItem>
      ))}
    </View>
  );
}

export default CustomerOrder;
