import React from "react";
import {
  FlatList,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import NewsItem from "../components/NewsItem";
import { newsData } from "../data/NewsData";
import Header from "../components/Header";

const News = () => {
  return (
    <View style={styles.container}>
      <Header color={"black"} logoColor={"black"} />
      <View style={{ alignItems: "center" }}>
        <View
          style={{
            height: 0.2,
            backgroundColor: "black",
            marginTop: 15,
            width: "95%",
          }}
        ></View>
      </View>
      <Text style={styles.title}>Build Your Knowledge</Text>
      <ScrollView showsVerticalScrollIndicator={false}>
        <NewsItem
          title={newsData[0].title}
          image={newsData[0].image}
          date={newsData[0].date}
          link={newsData[0].link}
        />
        <NewsItem
          title={newsData[1].title}
          image={newsData[1].image}
          date={newsData[1].date}
          link={newsData[1].link}
        />
        <NewsItem
          title={newsData[2].title}
          image={newsData[2].image}
          date={newsData[2].date}
          link={newsData[2].link}
        />
        <NewsItem
          title={newsData[3].title}
          image={newsData[3].image}
          date={newsData[3].date}
          link={newsData[3].link}
        />
        <NewsItem
          title={newsData[4].title}
          image={newsData[4].image}
          date={newsData[4].date}
          link={newsData[4].link}
        />
        <NewsItem
          title={newsData[5].title}
          image={newsData[5].image}
          date={newsData[5].date}
          link={newsData[5].link}
        />
        <NewsItem
          title={newsData[6].title}
          image={newsData[6].image}
          date={newsData[6].date}
          link={newsData[6].link}
        />
      </ScrollView>
    </View>
  );
};

export default News;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  title: {
    color: "black",
    marginTop: 20,
    fontSize: 30,
    marginLeft: 10,
    fontFamily: 'GeoramaReg',
    marginBottom: 5
  },
});
