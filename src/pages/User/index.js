import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ActivityIndicator } from 'react-native';
import api from '../../services/api';

import {
  Container,
  Header,
  Avatar,
  Name,
  Bio,
  Stars,
  Starred,
  OwnerAvatar,
  Info,
  Title,
  Author,
} from './styles';

export default class User extends Component {
  static navigationOptions = ({ navigation }) => ({
    title: navigation.getParam('user').name,
  });

  static propTypes = {
    navigation: PropTypes.shape({
      navigate: PropTypes.func,
      getParam: PropTypes.func,
    }).isRequired,
  };

  state = {
    stars: [],
    page: 1,
    refreshing: false,
    loading: false,
  };

  // Starter function to inicilize navigation
  async componentDidMount() {
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    this.setState({ loading: true });

    const response = await api.get(`/users/${user.login}/starred`);

    this.setState({ stars: response.data, loading: false });
  }

  // Unlimited scrolling list
  loadMore = async () => {
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    this.setState({ loading: true });

    const { stars, page } = this.state;
    const newPage = page + 1;

    const response = await api.get(`/users/${user.login}/starred`, {
      params: { page: newPage },
    });

    this.setState({
      stars: [...stars, ...response.data],
      page: newPage,
      loading: false,
    });
  };

  // Pull to refresh aways back to page one
  refreshList = async () => {
    const { navigation } = this.props;
    const user = navigation.getParam('user');

    this.setState({ loading: true });
    this.setState({ refreshing: true });

    const { stars } = this.state;
    const pageRefresh = 1;

    const response = await api.get(`/users/${user.login}/starred`, {
      params: { page: pageRefresh },
    });

    this.setState({
      stars: [...stars, ...response.data],
      page: pageRefresh,
      loading: false,
      refreshing: false,
    });
  };

  handleNavigate = repository => {
    const { navigation } = this.props;

    navigation.navigate('Repo', { repository });
  };

  render() {
    const { navigation } = this.props;
    const { stars, loading, refreshing } = this.state;

    const user = navigation.getParam('user');

    return (
      <Container>
        <Header>
          <Avatar source={{ uri: user.avatar }} />
          <Name>{user.name}</Name>
          <Bio>{user.bio}</Bio>
        </Header>

        {loading ? (
          <ActivityIndicator color="#7159c1" size="large" />
        ) : (
          <Stars
            loading={loading}
            onEndReachedThreshold={0.2} // Carrega mais itens quando chegar em 20% do fim
            onEndReached={this.loadMore} // Função que carrega mais itens
            data={stars}
            keyExtractor={star => String(star.id)}
            onRefresh={this.refreshList} // Função dispara quando o usuário arrasta a lista pra baixo
            refreshing={refreshing} // Variável que armazena um estado true/false que representa se a lista está atualizando
            renderItem={({ item }) => (
              <Starred onPress={() => this.handleNavigate(item)}>
                <OwnerAvatar source={{ uri: item.owner.avatar_url }} />
                <Info>
                  <Title>{item.name}</Title>
                  <Author>{item.owner.login}</Author>
                </Info>
              </Starred>
            )}
          />
        )}
      </Container>
    );
  }
}
