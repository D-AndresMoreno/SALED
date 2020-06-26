import React, { Component } from 'react';
import MyButton from '../../util/MyButton';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
// Icons
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';
// REdux
import { connect } from 'react-redux';
import { likeApoyo, unlikeApoyo } from '../../redux/actions/dataActions';

export class LikeButton extends Component {
  likedApoyo = () => {
    if (
      this.props.user.likes &&
      this.props.user.likes.find(
        (like) => like.apoyoId === this.props.apoyoId
      )
    )
      return true;
    else return false;
  };
  likeApoyo = () => {
    this.props.likeApoyo(this.props.apoyoId);
  };
  unlikeApoyo = () => {
    this.props.unlikeApoyo(this.props.apoyoId);
  };
  render() {
    const { authenticated } = this.props.user;
    const likeButton = !authenticated ? (
      <Link to="/login">
        <MyButton tip="Like">
          <FavoriteBorder color="primary" />
        </MyButton>
      </Link>
    ) : this.likedApoyo() ? (
      <MyButton tip="Undo like" onClick={this.unlikeApoyo}>
        <FavoriteIcon color="primary" />
      </MyButton>
    ) : (
      <MyButton tip="Like" onClick={this.likeApoyo}>
        <FavoriteBorder color="primary" />
      </MyButton>
    );
    return likeButton;
  }
}

LikeButton.propTypes = {
  user: PropTypes.object.isRequired,
  apoyoId: PropTypes.string.isRequired,
  likeApoyo: PropTypes.func.isRequired,
  unlikeApoyo: PropTypes.func.isRequired
};

const mapStateToProps = (state) => ({
  user: state.user
});

const mapActionsToProps = {
  likeApoyo,
  unlikeApoyo
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(LikeButton);
