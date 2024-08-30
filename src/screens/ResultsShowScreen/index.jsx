import React, { useEffect, useState } from "react";
import { Text, View, FlatList } from "react-native";
import yelp from "../../api/yelp";
import styled from "styled-components/native";

const ResultImage = styled.Image`
  width: 250px;
  height: 300px;
`;

const ResultsShowScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const [result, setResult] = useState(null);

  useEffect(() => {
    getResult(id);
  }, []);

  const getResult = async (id) => {
    try {
      const res = await yelp.get(`/${id}`);

      if (res.data?.id) {
        setResult(res.data);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (!result) return null;

  return (
    <View>
      <Text>{result.name}</Text>
      <FlatList
        data={result.photos}
        keyExtractor={(photo) => photo}
        renderItem={({ item }) => <ResultImage source={{ uri: item }} />}
      />
    </View>
  );
};

export default ResultsShowScreen;
