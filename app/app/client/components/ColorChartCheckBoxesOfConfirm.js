/**
 * ColorChartCheckBoxesOfConfirm.js COPYRIGHT FUJITSU LIMITED 2021
 */
import React from 'react';
import PropTypes from 'prop-types';

import {grey} from '@material-ui/core/colors';
import {red} from '@material-ui/core/colors';
import {orange} from '@material-ui/core/colors';
import {green} from '@material-ui/core/colors';
import {blue} from '@material-ui/core/colors';
import {purple} from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import ColorChartCheckBoxOfConfirm from './ColorChartCheckBoxOfConfirm';

/**
 * Feature of color chart check boxes
 * @extends React
 */
export default class ColorChartCheckBoxesOfConfirm extends React.Component {
  /**
   * constructor
   * @param {object} props
   */
  constructor(props) {
    super(props);
  }

  /**
   * Color information update event
   * @param  {object} event - information of color event for update
   */
   selectColor(event) {
    this.props.selectColor(event.target.name);
    this.props.close();
  }

  /**
   * render
   * @return {element}
   */
  render() {
    const colorSet = {
      white: false,
      red: false,
      orange: false,
      green: false,
      blue: false,
      purple: false,
    };

    if (this.props.color) {
      colorSet[this.props.color] = true;
    }

    return (
      <div>
        <FormGroup style={{ width: '132px', padding: '10px'}}>
          <FormControlLabel
            control={
              <ColorChartCheckBoxOfConfirm
                selectColor={(event)=>this.selectColor(event)}
                checked={colorSet.green}
                name='green'
                style={{ 'color': green[500],}}
                disabled={this.props.disabled}
              />
            }
          />
          <FormControlLabel
            control={
              <ColorChartCheckBoxOfConfirm
                selectColor={(event)=>this.selectColor(event)}
                checked={colorSet.white}
                name='white'
                style={{'color': grey[900],}}
                disabled={this.props.disabled}
              />
            }
          />
          <FormControlLabel
            control={
              <ColorChartCheckBoxOfConfirm
                selectColor={(event)=>this.selectColor(event)}
                checked={colorSet.red}
                name='red'
                style={{ 'color': red[500],}}
                disabled={this.props.disabled}
              />
            }
          />
          <FormControlLabel
            control={
              <ColorChartCheckBoxOfConfirm
                selectColor={(event)=>this.selectColor(event)}
                checked={colorSet.orange}
                name='orange'
                style={{ 'color': orange[500],}}
                disabled={this.props.disabled}
              />
            }
          />
          <FormControlLabel
            control={
              <ColorChartCheckBoxOfConfirm
                selectColor={(event)=>this.selectColor(event)}
                checked={colorSet.blue}
                name='blue'
                style={{ 'color': blue[500],}}
                disabled={this.props.disabled}
              />
            }
          />
          <FormControlLabel
            control={
              <ColorChartCheckBoxOfConfirm
                selectColor={(event)=>this.selectColor(event)}
                checked={colorSet.purple}
                name='purple'
                style={{ 'color': purple[500],}}
                disabled={this.props.disabled}
              />
            }
          />

        </FormGroup>
      </div>

    );
  }
}

ColorChartCheckBoxesOfConfirm.propTypes = {
  selectColor: PropTypes.func,
  currentId: PropTypes.number,
  color: PropTypes.string,
  classes: PropTypes.object,
  disabled: PropTypes.bool,
  close: PropTypes.func,
};
