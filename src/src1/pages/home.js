import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import PropTypes from 'prop-types';

import Apoyo from '../components/apoyo/Apoyo'
import Profile from '../components/profile/Profile';
import ApoyoSkeleton from '../util/ApoyoSkeleton';

import { connect } from 'react-redux';
import { getApoyos } from '../redux/actions/dataActions';

class home extends Component {
  componentDidMount() {
    this.props.getApoyos();
  }
  render() {
    const { apoyos, loading } = this.props.data;
    let recentapoyosMarkup = !loading ? (
      apoyos.map((apoyo) => <Apoyo key={apoyo.apoyoId} apoyo={apoyo} />)
    ) : (
      <ApoyoSkeleton />
    );
    return (
      <div className = 'container-Apoyo'>
        <Grid container spacing={10}>
          <Grid item sm={8} xs={12}>
            {recentapoyosMarkup}
          </Grid>
          <Grid item sm={4} xs={12}>
            <Profile />
          </Grid>
        </Grid>
      </div>
    );
  }
}

home.propTypes = {
  getApoyos: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  data: state.data
});

export default connect(
  mapStateToProps,
  { getApoyos }
)(home);
