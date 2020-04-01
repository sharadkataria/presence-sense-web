import React, { Component } from 'react';
import styles from './ViewersStyles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross, faCut, faTimes } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import lodash from 'lodash';
class Viewers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showToolTip: false,
      toolTip: null,
      showMore: false,
      activeViewers: []
    };
    this.backgroundColors = ['red', 'lightblue', 'orange', 'green', 'maroon'];
  }

  onMouseOver = viewer => {
    this.setState({ showToolTip: true, toolTip: viewer });
  };

  onMouseOut = () => {
    this.setState({ showToolTip: false, toolTip: '' });
  };

  toggleShowMore = () => {
    this.setState({ showMore: !this.state.showMore });
  };

  componentDidMount() {
    this.updateActiveViewers();
  }

  componentDidUpdate(prevProps, prevState) {
    if (!lodash.isEqual(prevProps.viewers, this.props.viewers)) {
      this.updateActiveViewers();
    }
  }

  updateActiveViewers = () => {
    const { viewers, user } = this.props;
    let activeViewers = [];
    if (viewers && viewers.length) {
      for (let viewer of viewers) {
        if (viewer.active && viewer.id !== user.id) {
          activeViewers.push(viewer);
        }
      }
    }
    this.setState({ activeViewers });
    if (this.state.showMore && activeViewers.length < 6) {
      this.setState({ showMore: false });
    }
  };

  render() {
    const { toolTip, showToolTip, showMore, activeViewers } = this.state;
    return (
      <div className='avatar' style={styles}>
        {!showMore ? (
          <React.Fragment>
            {activeViewers && activeViewers.length
              ? activeViewers.map((viewer, index) => {
                  if (index < 5)
                    return (
                      <div
                        key={index}
                        className='avatar-item'
                        style={{
                          backgroundColor: this.backgroundColors[index % 5]
                        }}
                        onMouseOver={() => this.onMouseOver(viewer)}
                        onMouseOut={this.onMouseOut}
                      >
                        {viewer.avatar}
                      </div>
                    );
                })
              : null}

            {activeViewers && activeViewers.length > 5 ? (
              <div className='avatar-item-more' onClick={this.toggleShowMore}>
                +{activeViewers.length - 5}
              </div>
            ) : null}
            {showToolTip ? (
              <span className='avatar-tooltip'>
                <div className='row'>
                  <div className='col'>
                    {toolTip ? (
                      <React.Fragment>
                        <p> {toolTip.name ? toolTip.name : 'Anonymous User'}</p>
                        {toolTip.email ? <p>{toolTip.email}</p> : null}
                      </React.Fragment>
                    ) : (
                      <p> Anonymous User</p>
                    )}
                  </div>
                </div>
              </span>
            ) : null}
          </React.Fragment>
        ) : (
          <div>
            {activeViewers && activeViewers.length ? (
              <React.Fragment>
                <div className='avatar-item-more' onClick={this.toggleShowMore}>
                  <FontAwesomeIcon icon={faTimes} />
                </div>
                <div className='avatar-tooltip-list'>
                  <h5>{activeViewers.length} total viewers</h5>
                  <hr />
                  {activeViewers.map((viewer, index) => {
                    return (
                      <div key={index} className='tooltip-list-item'>
                        <div
                          className='tooltip-list-avatar'
                          style={{
                            backgroundColor: this.backgroundColors[index % 5]
                          }}
                        >
                          {viewer.avatar}
                        </div>
                        <div className='tooltip-list-name'>{viewer.name}</div>
                      </div>
                    );
                  })}
                </div>
              </React.Fragment>
            ) : null}
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  viewers: state.documentData.viewers,
  user: state.userData.userDetails
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Viewers);
