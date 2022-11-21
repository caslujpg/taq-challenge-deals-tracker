import React,  { useState, useEffect } from 'react';
import { StatusBar, FlatList } from 'react-native';
import styled from 'styled-components/native';

import { Search } from '../components/Search'
import Game from '../components/Game/Game';
import axios from 'axios';

export function Home() {

  const [list, setList] = useState([]);
  const [page, setPage] = useState(0);
  const [title, setTitle] = useState('');
  const [lowerPrice, setLowerPrice] = useState(null);
  const [upperPrice, setUpperPrice] = useState(null); 
  const [refreshing, setRefreshing] = useState(false);

  async function getListOfDeals(pageNumber = page) {
    const params = {
      title,
      lowerPrice,
      upperPrice
    };
    
    axios
    .get(`https://www.cheapshark.com/api/1.0/deals?storeID=1&pageNumber=${pageNumber}&pageSize=10`, { params })
    .then((response) => {
      setPage(pageNumber + 1);
  
      setList((oldState)=>{
        return pageNumber === 0 ? normalizeGameList(response.data) : [...oldState, ...normalizeGameList(response.data)];
      });
    });
  }

  useEffect(() => {
    getListOfDeals();
  }, []);
  

  const normalizeGameList = (gameList) => {
    return gameList.map(game => ({
      ...game, 
      uniqueId: Math.random() * 1000
    }));
  }

  const gameList = ({item: game}) => (
    <Game
      title={game.title}
      score={game.metacriticScore}
      salePrice={game.salePrice}
      normalPrice={game.normalPrice}
      thumb={game.thumb}
      id={game.gameID}
    />
  );

  async function defaultList () {
    setRefreshing(true);

    await getListOfDeals(0);
    
    setRefreshing(false);
  }

  return (
    <Container>
      <StatusBar
        barStyle = "dark-content"
        hidden = {false}
        backgroundColor = "#38344E"
        translucent = {false}
        networkActivityIndicatorVisible = {true}
      />
      
      <Search 
        setList={setList} 
        onShowResults={() => getListOfDeals(0)}
        setTitle={setTitle}
        setUpperPrice={setUpperPrice}
        setLowerPrice={setLowerPrice}
      />

      <FlatList
        data={list}
        keyExtractor={(game) => game.uniqueId}
        ItemSeparatorComponent={() => <DividerToList />}
        onEndReached={() => getListOfDeals()}
        onEndReachedThreshold={0.2}
        onRefresh={defaultList}
        refreshing={refreshing}
        renderItem={gameList}
      />
    </Container>
  );
}

const Container = styled.View`
  background-color: #f2f2f2;
  flex: 1;
`;

const DividerToList = styled.View`
  height: 1px;
`;