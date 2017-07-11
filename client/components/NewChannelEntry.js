import React from 'react'
import { connect } from 'react-redux'
import { addChannel, postChannel } from '../store'

function mapStateToProps (state) {
  return {
    newChannelEntry: state.newChannelEntry
  }
}

function mapDispatchToProps (dispatch) {
  return {
    // handleChange: function () {
    //   dispatch(addChannel(event.target.value))
    // }
    handleChange (event) {
      dispatch(addChannel(event.target.value))
    },
    handleSubmit (event) {
      event.preventDefault()
      dispatch(postChannel({ name: event.target.channelName.value }))
      dispatch(addChannel(''))
    }
  }
}

function NewChannelEntry (props) {
  return (
    <form onSubmit={ props.handleSubmit } >
      <div className="form-group">
        <label htmlFor="name">Create a Channel</label>
        <input
          onChange={ props.handleChange }
          className="form-control"
          type="text"
          name="channelName"
          placeholder="Enter channel name"
          value={ props.newChannelEntry }
        />
      </div>
      <div className="form-group">
        <button type="submit" className="btn btn-default">Create Channel</button>
      </div>
    </form>
  );
}

/** Write your `connect` component below! **/
const Container = connect(mapStateToProps, mapDispatchToProps)(NewChannelEntry)
export default Container
