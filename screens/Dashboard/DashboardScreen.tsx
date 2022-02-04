import { Button, StyleSheet } from "react-native";
import { observer } from "mobx-react";
import { Text, View } from "../../components/Themed";
import { RootTabScreenProps } from "../../types";
import DashBoardStore from "./dashboardStore";
const DashboardScreen = observer(
  ({ navigation }: RootTabScreenProps<"Today">) => {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>{"Today " + DashBoardStore.time}</Text>
        <Button
          onPress={() => DashBoardStore.addTime(3)}
          title="Add some hours"
        />
        <View
          style={styles.separator}
          lightColor="#eee"
          darkColor="rgba(255,255,255,0.1)"
        />
      </View>
    );
  }
);
export default DashboardScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
