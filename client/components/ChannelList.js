import React from 'react';
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom';
import store from '../store';

function mapStateToProps (state) {
  return {
    channels: state.channels,
    messages: state.messages
  }
}

function ChannelList (props) {

  return (
    <ul>
      {props.channels.map(channel => {
        return (
            <li key={ channel.id } >
              <NavLink to={`/channels/${channel.id}`} activeClassName="active">
                <span># { channel.name }</span>
                <span className="badge">{ props.messages.filter(message => message.channelId === channel.id).length }</span>
              </NavLink>
            </li>
          )
      })}

      <li>
        <NavLink to="/new-channel">Create a channel...</NavLink>
      </li>
    </ul>
  );
}

/** Write your `connect` component below! **/

const ChannelListContainer = connect(mapStateToProps)(ChannelList)
export default ChannelListContainer

