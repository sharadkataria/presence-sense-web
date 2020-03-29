import React, { Component } from 'react';
import styles from './ViewersStyles.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCross, faCut, faTimes } from '@fortawesome/free-solid-svg-icons';
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

  onMouseOver = value => {
    this.setState({ showToolTip: true, toolTip: value });
  };

  onMouseOut = () => {
    this.setState({ showToolTip: false, toolTip: '' });
  };

  toggleShowMore = () => {
    this.setState({ showMore: !this.state.showMore });
  };

  render() {
    const { toolTip, showToolTip, showMore } = this.state;
    return (
      <div className='avatar' style={styles}>
        {!showMore ? (
          <React.Fragment>
            <div
              className='avatar-item'
              style={{ backgroundColor: this.backgroundColors[0] }}
              onMouseOver={() =>
                this.onMouseOver({ name: 'Sharad 1', email: 'email@gmail.com' })
              }
              onMouseOut={this.onMouseOut}
            >
              S
            </div>

            <div
              className='avatar-item'
              style={{ backgroundColor: this.backgroundColors[1] }}
              onMouseOver={() =>
                this.onMouseOver({
                  name: 'Sharad 2',
                  email: 'email2@gmail.com'
                })
              }
              onMouseOut={this.onMouseOut}
            >
              H
            </div>

            <div
              className='avatar-item'
              style={{ backgroundColor: this.backgroundColors[2] }}
              onMouseOver={() =>
                this.onMouseOver({
                  name: 'Sharad 3',
                  email: 'email3@gmail.com'
                })
              }
              onMouseOut={this.onMouseOut}
            >
              A
            </div>

            <div
              className='avatar-item'
              style={{ backgroundColor: this.backgroundColors[3] }}
              onMouseOver={() =>
                this.onMouseOver({
                  name: 'Sharad 4',
                  email: 'email4@gmail.com'
                })
              }
              onMouseOut={this.onMouseOut}
            >
              R
            </div>

            <div
              className='avatar-item'
              style={{ backgroundColor: this.backgroundColors[4] }}
              onMouseOver={() => this.onMouseOver(null)}
              onMouseOut={this.onMouseOut}
            >
              A
            </div>

            <div className='avatar-item-more' onClick={this.toggleShowMore}>
              +5
            </div>

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

export default Viewers;
