import React, { Component } from 'react';
import styles from './ViewersStyles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross, faCut, faTimes } from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';

class Viewers extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showToolTip: false,
      toolTip: null,
      showMore: false
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

  render() {
    const { toolTip, showToolTip, showMore } = this.state;
    const { viewers, user } = this.props;
    let indexCount = 0;
    return (
      <div className='avatar' style={styles}>
        {!showMore ? (
          <React.Fragment>
            {viewers && viewers.length
              ? viewers.map((viewer, index) => {
                  if (viewer.id !== user.id && viewer.active)
                    return (
                      <div
                        key={index}
                        className='avatar-item'
                        style={{
                          backgroundColor: this.backgroundColors[
                            indexCount++ % 5
                          ]
                        }}
                        onMouseOver={() => this.onMouseOver(viewer)}
                        onMouseOut={this.onMouseOut}
                      >
                        {viewer.avatar}
                      </div>
                    );
                })
              : null}

            {viewers && viewers.length > 5 ? (
              <div className='avatar-item-more' onClick={this.toggleShowMore}>
                +{viewers.length - 5}
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
            <div className='avatar-item-more' onClick={this.toggleShowMore}>
              <FontAwesomeIcon icon={faTimes} />
            </div>
            <div className='avatar-tooltip-list'>
              <h5>8 total viewers</h5>
              <hr />
              <div className='tooltip-list-item'>
                <div
                  className='tooltip-list-avatar'
                  style={{ backgroundColor: this.backgroundColors[0] }}
                >
                  SK
                </div>
                <div className='tooltip-list-name'> Sharad Kataria</div>
              </div>
              <div className='tooltip-list-item'>
                <div
                  className='tooltip-list-avatar'
                  style={{ backgroundColor: this.backgroundColors[1] }}
                >
                  SK
                </div>
                <div className='tooltip-list-name'> Sharad Kataria</div>
              </div>
              <div className='tooltip-list-item'>
                <div
                  className='tooltip-list-avatar'
                  style={{ backgroundColor: this.backgroundColors[2] }}
                >
                  SK
                </div>
                <div className='tooltip-list-name'> Sharad Kataria</div>
              </div>
              <div className='tooltip-list-item'>
                <div
                  className='tooltip-list-avatar'
                  style={{ backgroundColor: this.backgroundColors[3] }}
                >
                  SK
                </div>
                <div className='tooltip-list-name'> Sharad Kataria</div>
              </div>
              <div className='tooltip-list-item'>
                <div
                  className='tooltip-list-avatar'
                  style={{ backgroundColor: this.backgroundColors[4] }}
                >
                  SK
                </div>
                <div className='tooltip-list-name'> Sharad Kataria</div>
              </div>
            </div>
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
