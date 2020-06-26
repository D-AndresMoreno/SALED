import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import Apoyo from '../components/apoyo/Apoyo';
import StaticProfile from '../components/profile/StaticProfile';
import Grid from '@material-ui/core/Grid';

import ApoyoSkeleton from '../util/ApoyoSkeleton';
import ProfileSkeleton from '../util/ProfileSkeleton';

import { connect } from 'react-redux';
import { getUserData } from '../redux/actions/dataActions';

class user extends Component {
  state = {
    profile: null,
    apoyoIdParam: null
  };
  componentDidMount() {
    const handle = this.props.match.params.handle;
    const apoyoId = this.props.match.params.apoyoId;

    if (apoyoId) this.setState({ apoyoIdParam: apoyoId });

    this.props.getUserData(handle);
    axios
      .get(`/user/${handle}`)
      .then((res) => {
        this.setState({
          profile: res.data.user
        });
      })
      .catch((err) => console.log(err));
  }
  render() {
    const { apoyos, loading } = this.props.data;
    const { apoyoIdParam } = this.state;

    const apoyosMarkup = loading ? (
      <ApoyoSkeleton />
    ) : apoyos === null ? (
      <p>No apoyos from this user</p>
    ) : !apoyoIdParam ? (
      apoyos.map((apoyo) => <apoyo key={apoyo.apoyoId} apoyo={apoyo} />)
    ) : (
      apoyos.map((apoyo) => {
        if (apoyo.apoyoId !== apoyoIdParam)
          return <Apoyo key={apoyo.apoyoId} apoyo={apoyo} />;
        else return <Apoyo key={apoyo.apoyoId} apoyo={apoyo} openDialog />;
      })
    );

    return (
      <Grid container spacing={16}>
        <Grid item sm={8} xs={12}>
          {apoyosMarkup}
        </Grid>
        <Grid item sm={4} xs={12}>
          {this.state.profile === null ? (
            <ProfileSkeleton />
          ) : (
            <StaticProfile profile={this.state.profile} />
          )}
        </Grid>
      </Grid>
    );
  }
}

user.propTypes = {
  getUserData: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getUserData }
)(user);
