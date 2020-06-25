import {DELETE_RECEIVED_MESSAGE } from "./types"


export const deleteReceivedMessage = (message) => {

    return dispatch => {
        return fetch(`https://lets-kari-to-the-next.herokuapp.com/api/v1/messages/${message.id}/update_received_message`, {
            method: "PUT",
            headers: {
                "Content-type": "application/json",
                "Accept": "application/json"
            },
            credentials: "include",
            body: JSON.stringify(message)
        })
            .then(resp => resp.json())
            .then(data => {
                dispatch({ type: DELETE_RECEIVED_MESSAGE, receivedMessageToDelete: data.message })
            })
    }
}

