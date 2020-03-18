import React from 'react'

class Status extends React.Component {

    state = {
        editMode: false,
        status: this.props.status,
    }

    activateEditMode = () => {
        this.setState({
            editMode: true,
        })
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false,
        })
        this.props.updateStatus(this.state.status);
    }

    onStatusChange = (e) => {
        this.setState({
            status: e.target.value,
        })
    }

    componentDidUpdate(prevProps, prevStatus) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status,
            })
        }
    }

    render() {
        return (
            <span>
                {!this.state.editMode &&
                    <span onDoubleClick={this.activateEditMode}>
                        {!this.props.status ? "Status!": this.props.status}
                    </span>
                }
                {this.state.editMode &&
                    <span>
                        <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode} type="text"
                            value={this.state.status} />
                    </span>
                }
            </span>
        )
    }
}

export default Status;