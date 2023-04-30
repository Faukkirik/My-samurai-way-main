import React from "react";


class ProfileStatus extends React.Component<any, any> {
    state = {
        editMode: false
    }
    activateEditMode (){
        this.setState({
            editMode: !this.state.editMode
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={ this.activateEditMode.bind(this) }>{this.props.status}</span>
                    </div>}
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} value={this.props.status} onBlur={ this.activateEditMode.bind(this) }/>
                    </div>}

            </div>

        )
    }


}

export default ProfileStatus