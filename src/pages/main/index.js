import React, { Component, Fragment } from "react";
import propTypes from "prop-types";

import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { Creators as FavoriteActions} from "../../store/ducks/favorites";

class Main extends Component {
  static propTypes = {
    addFavoriteRequest: propTypes.func.isRequired,
    favorites: propTypes.shape({
      loading: propTypes.bool,
      data: propTypes.arrayOf(
        propTypes.shape({
          id: propTypes.number,
          name: propTypes.string,
          description: propTypes.string,
          url: propTypes.string,
        })
      ),
      error: propTypes.oneOfType([null, propTypes.string])
    }).isRequired,
  };
  state = {
    repositoryInput: "",
  };

  handleRepository = (event) => {
    event.preventDefault();

    this.props.addFavoriteRequest(this.state.repositoryInput);
    this.setState({ repositoryInput: "" });
  };

  render() {
    return (
      <Fragment>
        <form onSubmit={this.handleRepository}>
          <input
            placeholder="usuário/repositório"
            value={this.state.repositoryInput}
            onChange={(e) => this.setState({ repositoryInput: e.target.value })}
          />
          <button type="submit">Adicionar </button>

          {this.props.favorites.loading && <span>Carregando ... </span>}
          
          {!!this.props.favorites.error && <span style={{color: '#F00'}}>{this.props.favorites.error}</span>}
        </form>
        <ul>
          {this.props.favorites.data.map((favorite) => (
            <li key={favorite.id}>
              <p>
                <strong>{favorite.name}</strong>({favorite.description})
              </p>
              <a href={favorite.url}>Acessar</a>
            </li>
          ))}
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = (state) => ({
  favorites: state.favorites,
});

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(FavoriteActions, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Main);
