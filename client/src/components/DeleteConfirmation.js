import React from 'react'
import {Button, Dialog, DialogActions, DialogTitle} from '@material-ui/core'

export default function DeleteConfirmation (props) {
    return(
        <Dialog
            open={props.open}
            onClose={props.onClose}
            >
            <DialogTitle id="delete-dialog-title">Are you sure you would like to delete this blog?</DialogTitle>
            <DialogActions>
                <Button onClick={props.onClose}>
                    Cancel
                </Button>
                <Button onClick={props.handleDelete}>
                    Delete Post
                </Button>
            </DialogActions>
        </Dialog>
        )
}
