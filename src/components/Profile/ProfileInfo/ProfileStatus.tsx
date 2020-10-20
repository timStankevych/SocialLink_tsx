import React from 'react';

type PropsType = {
    status: string
}

class ProfileStatus extends React.Component<PropsType> {

    state = {
        editMode: false
    };

    activateEditMode() {
        this.setState({
            editMode: true
        })
    }
    deActivateEditMode() {
        this.setState({
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div>
                    <span onDoubleClick={this.activateEditMode.bind(this)}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input value={this.props.status} onBlur={this.deActivateEditMode.bind(this)} autoFocus={true}/>
                </div>
                }
            </div>
        );
    }
}

export default ProfileStatus;